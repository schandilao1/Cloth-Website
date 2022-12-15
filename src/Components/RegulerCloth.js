import { Box, Button, Divider, Flex, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'

function RegulerCloth() {
    return (
        <>
            <Box bg="blackAlpha.800" pt={10}>
                <Flex alignItems="center" flexDir={{ base: "column", md: "column", lg: "row" }} w="80%" mx="auto" justifyContent="space-evenly">
                    <Box textAlign="center" mb={{base:"3%", md:"3%", lg:"0"}}>
                        <Divider py={2} color="orange.400" />
                        <Box mx="5">
                            <Heading color='white' py={7}>REGULAR CLOTHING</Heading>
                            <Heading color='white' fontWeight="extrabold" fontSize={{base:"2rem", md:"3rem", lg:"5rem"}}>BEYOND <Text fontWeight="light">REGULAR</Text></Heading>
                        </Box>
                        <Button bg="orange.400"
                            color="black" w="80%"
                            fontWeight="bolder"
                            rounded='none'
                            my={2}
                        >EXPLORE NOW</Button>
                        <Button bg="orange.400"
                            color="black" w="80%"
                            fontWeight="bolder"
                            rounded='none'
                        >GO TO PRODUCT</Button>
                    </Box>
                    <Box border="2px solid white">
                        <Image src="https://spiderimg.amarujala.com/assets/images/firkee.in/2019/08/13/500x500/man-vs-wild_1565681426.jpeg" />
                    </Box>
                </Flex>
            </Box>
            <Box bg="blackAlpha.800">
                <Flex alignItems="center" flexDir={{ base: "column", md: "column", lg: "row" }} w="80%" mx="auto" justifyContent="space-evenly">
                    <Box border="2px solid white"  mt={{base:"3%", md:"3%", lg:"0"}}>
                        <Image src="https://www.femalefirst.co.uk/image-library/square/500/t/the-island-with-bear-grylls-series-3-bear.jpg" />
                    </Box>
                    <Box textAlign="center" >
                        <Divider py={2} color="orange.400" />
                        <Box mx="5">
                            <Heading color='white' py={7}>OUTDOOR AND <br /> FUNCTIONAL WEAR</Heading>
                            <Heading color='white' fontWeight="extrabold"fontSize={{base:"2rem", md:"3rem", lg:"5rem"}}>NEW WAY <Text fontWeight="light">TO GO BEYOND</Text></Heading>
                        </Box>
                        <Button bg="orange.400"
                            color="black" w="80%"
                            fontWeight="bolder"
                            rounded='none'
                            my={2}
                        >EXPLORE NOW</Button>
                        <Button bg="orange.400"
                            color="black" w="80%"
                            fontWeight="bolder"
                            rounded='none'
                        >GO TO PRODUCT</Button>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default RegulerCloth