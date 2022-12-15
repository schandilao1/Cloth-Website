import React, { useState } from 'react'
import { Image, Flex, Box, Button, Link } from "@chakra-ui/react"

function OurProduct() {
    const ourtProductData = [
        {
            Image: "https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/fe050866-8169-4645-ad76-10437425291c/Blank%20T-Shirt_thumb_300x300",
            Button: "Upper Wear",
            Link: "https://www.amazon.in/s?k=t-shirt&crid=3IRX0IGR0QL6M&sprefix=t-shirt%2Caps%2C265&ref=nb_sb_noss_1"
        },
        {
            Image: "https://kanikabastralaya.com/wp-content/uploads/2022/04/1_jo-removebg-preview-300x300.png",
            Button: "Bottom Wear",
            Link: "https://www.amazon.in/s?k=bottom+wear&crid=3S5I819P18FXU&sprefix=bottom+wear%2Caps%2C272&ref=nb_sb_noss_1"
        },
        {
            Image: "https://www.svgrepo.com/show/219941/mug.svg",
            Button: "Souvenirs",
            Link: "https://www.amazon.in/s?k=cUp&crid=1K6TJDNKAC2PN&sprefix=cp%2Caps%2C507&ref=nb_sb_noss_2"
        },
        {
            Image: "https://cdn.yougotagift.com/media/images/cards/fb/tmpfdpQ3f.png",
            Button: "Lifestyle",
            Link: "https://www.amazon.in/s?k=LifeStyle&crid=HDDSHKIUDMXE&sprefix=lifesty%2Caps%2C306&ref=nb_sb_noss_2"
        },
        {
            Image: "https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/fe050866-8169-4645-ad76-10437425291c/Blank%20T-Shirt_thumb_300x300",
            Button: "Customized",
            Link: ""
        }
    ]
    const [MyArray] = useState(ourtProductData);

    return (
        <>
            <Flex flexDir={{ base: "column", md: "column", lg: 'row' }}
                w="100%" mx="auto" justifyContent="center" bg="blackAlpha.800" marginTop={.5}>
                {
                    MyArray.map((MyData) => {
                        return <Box w="80%" mx="auto" border="1px solid grey" p={10} my={{ base: "1rem", md: "1rem", lg: '0rem' }}>
                            <Image w={{ base: "100%", md: "50%", lg: '100%' }} m={{ base: "auto", md: 'auto', lg: 'auto' }} src={MyData.Image} />
                            <Link href={MyData.Link} _hover={{ textDecor: "none" }} target="__blank">
                                <Button color="white"
                                    fontWeight="extrabold"
                                    my={3}
                                    bg="blackAlpha.100"
                                    w="100%" _hover={{ bg: "orange.400" }}
                                    border="2px solid white">
                                    {MyData.Button}
                                </Button>
                            </Link>
                        </Box>
                    })
                }
            </Flex>
        </>
    )
}

export default OurProduct