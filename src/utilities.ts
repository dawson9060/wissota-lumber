export const convertEnumToOptions = (enumObj: any) => {
  return Object.entries(enumObj).map(([key, value]) => ({
    label: value as string,
    value: key,
  }))
}
