import React from 'react'
import { Divider, Heading, Box, } from '@chakra-ui/react'
import SimpleSlider from './SimpleSlider/SimpleSlider';

function OurProductItems() {
    return (

        <>
            <Box bg="blackAlpha.800">
                <Divider borderColor="white" w="70%" mx='auto' py={5} />
                <Box>
                    <Heading color="white"
                        py={10}
                        textAlign='center'
                    >
                        RECOMMENDED FOR YOU
                    </Heading>
                </Box>
                <SimpleSlider />
            </Box>
        </>
    )
}

export default OurProductItems