import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Lumber from './collections/Lumber'
import Specials from './collections/Specials'

import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import type { HandleUpload, HandleDelete } from '@payloadcms/plugin-cloud-storage/types'
import type { UploadApiResponse } from 'cloudinary'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// creating cloudinary adapter
const cloudinaryAdapter = () => ({
  name: 'cloudinary-adapter',
  async handleUpload({
    file,
    collection,
    data,
    req,
    clientUploadContext,
  }: Parameters<HandleUpload>[0]) {
    try {
      const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        ;(async () => {
          const { v2: cloudinary } = await import('cloudinary')
          cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
          })

          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'auto', // auto-detect file type (image, video, etc.)
              public_id: `media/${file.filename.replace(/\.[^/.]+$/, '')}`, // Set custom file name without extension, and it also previxed the cleaned filename with media/
              overwrite: false, // Do not overwrite if a file with the same name exists
              use_filename: true, // Use original filename
            },
            (error: any, result: any) => {
              if (error) return reject(error)
              if (!result) return reject(new Error('No result returned from Cloudinary'))
              resolve(result) // hanlde result
            },
          )

          uploadStream.end(file.buffer) // this line send the file to cloudinary it means entire file is already in memory and will be send whole thing at once not in chunk
        })()
      })

      file.filename = uploadResult.public_id // Use Cloudinary's public_id as the file's unique name
      file.mimeType = `${uploadResult.format}` // Set MIME type based on Cloudinary's format (e.g., image/png)
      file.filesize = uploadResult.bytes // Set the actual file size in bytes, for admin display and validations
    } catch (err) {
      console.log('error')
    }
  },
  async handleDelete({ collection, doc, filename, req }: Parameters<HandleDelete>[0]) {
    // if filename is present then we will look for that file
    try {
      // We remove the file extension from the filename and then target the file
      // inside the "media/" folder on Cloudinary (which we used as the upload path)
      const { v2: cloudinary } = await import('cloudinary')

      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      })
      await cloudinary.uploader.destroy(`media/${filename.replace(/\.[^/.]+$/, '')}`)
    } catch (error) {
      // if something error occured we will catch the error and respond the error in console
      console.error('Cloudinary Delete Error:', error)
    }
  },
  staticHandler() {
    return new Response('Not implemented', { status: 501 })
  },
})

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Lumber, Specials],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: cloudinaryAdapter,
          disableLocalStorage: true,
          generateFileURL: ({ filename }) => {
            // Since we uploaded the file with a "media/" prefix in its public_id,
            // we include "media/" here to correctly generate the Cloudinary URL for the file.
            // return cloudinary.url(`media/${filename}`, { secure: true })
            return `https://res.cloudinary.com/wissotalumber/image/upload/v1/media/${filename}`
          },
        },
      },
    }),
  ],
})
