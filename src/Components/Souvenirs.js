import React from 'react'
import { Box, Divider, Heading, Image, SimpleGrid, Button } from '@chakra-ui/react'

function Souvenirs() {
    return (
        <>
            <Box bg="blackAlpha.800">
                <Divider py={4} w="70%" mx="auto" />
                <Heading textAlign="center" color="white" py={5}>
                    SOUVENIRS
                </Heading>
                <SimpleGrid columns={2} w="80%" mx="auto" spacing={2} py={10} >
                    <Box>
                        <Image src="https://cdn.shopify.com/s/files/1/1624/5203/articles/gerrie-van-der-walt-2uSnxq3M4GE-unsplash_dd561c21-e3c1-4af3-b25d-61d36b6a6349_600x.jpg?v=1656664516" />
                        {/* <Button display={{base:"block", md:"none", lg:"none"}}>GO TO PRODUCT</Button> */}
                    </Box>
                    <Box h="30vh" color="white" textAlign="center" mt={20} display={{base:"none", md:"block" ,lg:"block"}}>
                        <Heading fontWeight="extrabold" fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }} py={1}>
                            LIFESTYLE <br /> PRODUCTS
                        </Heading>
                        <Heading textDecor="underline" py={10}>
                            THE MILITARY WAY
                        </Heading>
                        <Button bg="orange.400"
                            color="black" w="60%"
                            fontWeight="bolder"
                            rounded="none"
                            mb={2}
                        >EXPLORE NOW</Button>
                        <Button bg="orange.400"
                            color="black" w="60%"
                            fontWeight="bolder"
                            rounded="none"
                        >GO TO PRODUCT</Button>
                    </Box>
                    <Box>
                        <Image src='https://cdn.homebrewersassociation.org/wp-content/uploads/2021/09/16105016/oktoberfest-beer-1440-600x400.jpg' />
                        {/* <Button display={{base:"block", md:"none", lg:"none"}}>GO TO PRODUCT</Button> */}
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default Souvenirs