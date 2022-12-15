import React, { useState } from "react";
import { Image, Heading, Button, Flex, Box } from '@chakra-ui/react'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

function SimpleSlider() {
  // Style Object
  const myStyles = {
    w: "70%",
    margin: "auto",
    border: "5px solid orange"
  }

  // Slider Setting start
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ourtProductData = [
    {
      Image: "https://m.media-amazon.com/images/I/71cVqgS6qfL._AC_SS300_.jpg",
      Heading: "T-Shirt Men",
      Button1: "Rs. 590",
      Button2: "Buy Now",
    },
    {
      Image: "https://m.media-amazon.com/images/S/aplus-media-library-service-brand-media/eed70bf5e616bfde7ef174cdba7bccff.w1200.h1800.__CR0,76,1200,1200_PT0_SX300_V1___.jpg",
      Heading: "Shirt Men",
      Button1: "Rs. 590",
      Button2: "Buy Now",
    },
    {
      Image: "https://m.media-amazon.com/images/S/aplus-media/sc/168008c0-d535-4de6-a425-48b07c14ecd6.__CR0,0,500,500_PT0_SX300_V1___.jpg",
      Heading: "Coffee Cup  ",
      Button1: "Rs. 590",
      Button2: "Buy Now",
    },
    {
      Image: "https://images-eu.ssl-images-amazon.com/images/I/419c1gRc3xL._SX300_SY300_QL70_ML2_.jpg",
      Heading: "Beer Mug",
      Button1: "Rs. 590",
      Button2: "Buy Now",
    },
    {
      Image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/db1d22ec-48d2-487c-8ccf-2a9272c61f08.__CR0,0,3522,3522_PT0_SX300_V1___.jpg",
      Heading: "Track Pant",
      Button1: "Rs. 590",
      Button2: "Buy Now",
    }
  ]
  const [MyArray] = useState(ourtProductData);
 
  return (
    <>
      <div flexDir={{ base: 'column', md: "column", lg: 'row' }} style={{ padding: "2rem 0rem" }}>
        <Slider {...settings}>
          {
            MyArray.map((MyData) => {
              return <div>
                <Image style={myStyles} src={MyData.Image} />
                <Box w="70%" m="auto" py={3}>
                  <Heading color="white" textAlign="center" my={2}>{MyData.Heading}</Heading>
                  <Flex justifyContent="center">
                    <Button bg="orange.400" border="2px solid white" mx={2} color='white' _hover={{bg:"orange.300"}}>{MyData.Button1}</Button>
                    <Button bg="red.700" border="2px solid white" color="white" _hover={{bg:"red.600"}}>{MyData.Button2}</Button>
                  </Flex>
                </Box>
              </div>
            })
          }
        </Slider>
      </div>
    </>
  )
}

export default SimpleSlider