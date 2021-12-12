import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton, Link,
} from "@chakra-ui/react";
import {AiOutlineMenu} from "react-icons/ai";


export default function NavBar() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <Box  position={"sticky"} top={0} left={0} as={"header"}
                bg={bg}
                w="full"
                px={{base: 2, sm: 4}}
                py={4}
                shadow="md"
            >
                <Flex  alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <Link
                            href="/"
                            title="Choc Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            <svg className="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32">
                                <path
                                    d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"/>
                            </svg>
                            <VisuallyHidden>Nike</VisuallyHidden>
                        </Link>

                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{base: "none", md: "inline-flex"}}
                        >
                            <Button variant="ghost">Features</Button>
                            <Button variant="ghost">Pricing</Button>
                            <Button variant="ghost">Blog</Button>
                            <Button variant="ghost">Company</Button>
                            <Button variant="ghost">Sign in</Button>
                        </HStack>
                        <Button colorScheme="brand" size="sm">
                            Get Started
                        </Button>
                        <Box display={{base: "inline-flex", md: "none"}}>
                            <IconButton
                                display={{base: "flex", md: "none"}}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu/>}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />

                                <Button w="full" variant="ghost">
                                    Features
                                </Button>
                                <Button w="full" variant="ghost">
                                    Pricing
                                </Button>
                                <Button w="full" variant="ghost">
                                    Blog
                                </Button>
                                <Button w="full" variant="ghost">
                                    Company
                                </Button>
                                <Button w="full" variant="ghost">
                                    Sign in
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
        </React.Fragment>
    );
}