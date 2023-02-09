import React from 'react'
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";

function Footer() {
    return (
            <Flex justifyContent="center" alignItems="flex-end" pb={4}>
                <Box as="p" fontSize="xs" color="gray.500">
                    Developed by: Adeel Hashmi - ID: PIAIC57799
                </Box>
            </Flex>
    )
}

export default Footer