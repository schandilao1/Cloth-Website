import React from 'react'
import {Flex,
    Menu,
    // MenuList,
    MenuButton,
    Text,
    Icon,
    Link
} from '@chakra-ui/react'
// import { ChevronDownIcon } from '@chakra-ui/icons'
function NavItems({navSize , title , icon, icon1} ) {
  return (
    <>
    <Flex mt={30}
    flexDir="column"
    w="100%"
    alignItems={navSize === "small" ? "center" : "flex-start"}
    >
        <Menu placement='right'>
            <Link
            borderRadius={8}
            _hover={{textDecoration:"none", background:'yellow.600'}}
            p={3}
            w={navSize === "large" && "100%"}
            href="https://www.youtube.com/watch?v=U121KdsZ8QE&t=1s&ab_channel=BenjaminCarlson"
            >
            <MenuButton w="100%">
                <Flex>
                    <Icon fontSize="xl" as={icon} />
                    <Text ml={3} display={navSize === "small" ? "none" : "flex-start"} color={{base:"black", md:"white", lg:"white"}}>{title}</Text>
                </Flex>
            </MenuButton>
            </Link>
        </Menu>
    </Flex>
    </>
  )
}

export default NavItems