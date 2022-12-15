import React, { useState } from 'react'
import {
    Heading,
    Text,
    IconButton,
    Flex,
    Image,
    Spacer,
    Button,
    Link,
    Box,
    ButtonGroup,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FaBars, FaHome, FaSistrix, FaUserAlt, FaTshirt, FaComments, FaAngleDown, FaGifts, FaUsersCog } from "react-icons/fa";

import NavItems from './NavItems';
function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    const [navSize, changeNavSize] = useState("large")
    return (
        <>
            {/* Main Header */}
            <Flex w="100%" minWidth='max-content' alignItems='center' bg="black" px="7" py={2} pos={{ base: "fixed", md: "relative", lg: "relative" }} zIndex="2">
                <Box p='2'>
                    <Image
                        w={{ base: '65px', md: '80px', lg: '90px' }}
                        m="auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6z4rlCVxjpH5mkuYaWk0--8Frgqr-0iVp5A&usqp=CAU"
                    />
                </Box>
                <Spacer />
                <Flex mx={4} my={3}>
                    <Link href="https://www.w3resource.com/javascript-exercises/" color="white" _hover={{ TextDir: 'none', }} fontSize={{ base: '13px', md: '15px', lg: '17px' }}
                        display={{ base: 'none', md: 'block', lg: 'block' }}

                    >Find OutLet</Link>
                    <Link href="https://www.w3resource.com/javascript-exercises/" color="white" ml={4} _hover={{ TextDir: 'none', }} fontSize={{ base: '13px', md: '15px', lg: '17px' }}
                        display={{ base: 'none', md: 'block', lg: 'block' }}

                    > Download Catalogue</Link>
                </Flex>
                <ButtonGroup>
                    <Button bg="orange.400" rightIcon={<FaSistrix />}
                        fontSize={{ base: '0px', md: '13px', lg: '17px' }}
                        display={{ base: 'none', md: 'block', lg: 'block' }}
                    >SEARCH PRODUCT</Button>
                </ButtonGroup>
                {/* small screen navbar */}
                <Button fontSize="3rem" bg="orange.400" color="white" ref={btnRef} as={FaBars} onClick={onOpen} display={{ base: 'block', md: 'none', lg: 'none' }} />
                <Drawer
                    bg="red"
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Image
                                w={{ base: '65px', md: '80px', lg: '90px' }}
                                m="auto"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6z4rlCVxjpH5mkuYaWk0--8Frgqr-0iVp5A&usqp=CAU"
                            />
                        </DrawerHeader>

                        <DrawerBody>
                            <NavItems navSize={navSize} icon={FaHome} title="Home" icon1={FaAngleDown} />
                            <NavItems navSize={navSize} icon={FaTshirt} title="Clothing" />
                            <NavItems navSize={navSize} icon={FaGifts} title="Souvenirs" />
                            <NavItems navSize={navSize} icon={FaUsersCog} title="Customized" />
                            <NavItems navSize={navSize} icon={FaUserAlt} title="About Us" />
                            <NavItems navSize={navSize} icon={FaComments} title="Contact Us" />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>

            {/* Sidenavbar */}
            <Flex pos="absolute"
                display={{ base: 'none', md: 'block', lg: 'block' }}
                h="90vh"
                margin-top="2.5vh"
                box-shadow="0 4px 12px 0 rgba(0,0,0,0.5)"
                w={navSize === "small" ? "75px" : "180px"}
                flexDir="column"
                justifyContent="space-between"
                alignItems={navSize === "small" ? "center" : "none"}
                bg="black"
                color="white"
                zIndex="2"
            >
                <Flex
                    p="5%"
                    flexDir="column"
                    alignItems="flex-start"
                    as="nav"
                >
                    <IconButton
                        background="none"
                        mt={5}
                        ml={3}
                        _hover={{ background: "yellow.600" }}
                        icon={<FaBars />}
                        onClick={() => {
                            if (navSize === "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }}
                    />
                    <NavItems navSize={navSize} icon={FaHome} title="Home" icon1={FaAngleDown} />
                    <NavItems navSize={navSize} icon={FaTshirt} title="Clothing" />
                    <NavItems navSize={navSize} icon={FaGifts} title="Souvenirs" />
                    <NavItems navSize={navSize} icon={FaUsersCog} title="Customized" />
                    <NavItems navSize={navSize} icon={FaUserAlt} title="About Us" />
                    <NavItems navSize={navSize} icon={FaComments} title="Contact Us" />
                </Flex>

                <Flex p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize === "small" ? "center" : "flex-start"}
                    mb={4}
                >
                    {/* <Divider display={navSize === 'small' ? "none" : "flex"} />
                <Flex alignItems="center" mt={4}>
                    <Avatar size="sm" src='https://avatars.githubusercontent.com/u/115537878?s=400&u=1dbf786768394c40266d37515d1dfecf5eb15f57&v=4' />
                    <Flex
                        flexDir="column"
                        ml={3}
                    >
                        <Heading as="h3"
                            size="sm"
                            display={navSize === 'small' ? "none" : "flex-start"}
                            color="yellow.600"
                        >Schedule a call</Heading>
                        <Text display={navSize === 'small' ? "none" : "flex-start"} color="yellow.600">Blogs</Text>
                    </Flex>
                </Flex> */}
                </Flex>
            </Flex>

            {/* Banner section */}
            <Box
                w="100%"
                pos="relative">
                <Image w="100%" h="90vh" src='https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?w=1380&t=st=1670049226~exp=1670049826~hmac=ceca76198e8c264da7251eaf6f6322fa4c321429cbddc05f12d01c8554fed49c' />
                <Flex>
                    {/* Large Screen Heading */}
                    <Heading fontSize={{ base: "0", md: "5xl", lg: "6xl" }}
                        color="white"
                        display={{ base: "none", md: "block", lg: "block" }}
                        pos="absolute"
                        top={10}
                        left={220}
                        mx={5}
                    >
                        Wear Your <br /> <Text fontWeight="bolder" fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>VALUES</Text> To Be The <br />  <Text fontWeight="bolder" bg="orange.400" color="white" textAlign="center" fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>CHANGE</Text>
                        <Flex py={6}>
                            <Button bg="orange.400"
                                color="black" w="100%"
                                fontWeight="bolder"
                                rounded="none"
                                rightIcon={<ArrowForwardIcon />}>EXPLORE NOW</Button>
                            <Button bg="orange.400" ml={2}
                                color="black" w="100%"
                                fontWeight="bolder"
                                rounded="none"
                                rightIcon={<FaGifts />}>GO TO PRODUCT</Button>
                        </Flex>
                    </Heading>

                    {/* small Screen Heading */}
                    <Heading textAlign="center" fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                    mt={14}
                        color="white"
                        display={{ base: "block", md: "none", lg: "none" }}
                        pos="absolute"
                        top="7rem"
                        left={0}
                        padding="0rem 2rem"
                    >
                        WEAR YOUR VALUES TO BE THE <br />
                        <Heading fontWeight="bolder" bg="orange.400" py={2}>
                            CHANGE
                        </Heading>
                        <br />
                        <Button bg="orange.400"
                            rounded="none"
                            mr={2}
                            color="black" w={{ base: "90%", md: "", lg: "100%" }}
                            fontWeight="bolder" m="auto"
                            rightIcon={<ArrowForwardIcon />}>EXPLORE NOW</Button>
                        <Button bg="orange.400"
                            rounded="none"
                            color="black" w={{ base: "90%", md: "", lg: "100%" }}
                            fontWeight="bolder" m="auto"
                            mt={2}
                            rightIcon={<FaGifts />}>GO TO PRODUCT</Button>
                    </Heading>
                </Flex>
            </Box>
        </>
    )
}

export default Sidebar