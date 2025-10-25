import { Box, Center, Text } from "@mantine/core";

const Footer = () => {
    return (
        <Box w="100%" bg="gray.9">
            <Center p="1rem" w="100%" maw="1400px" mx="auto">
                <Text c="white">Wissota Lumber {new Date().getFullYear()}</Text>
            </Center>
        </Box>
    );
};

export default Footer;