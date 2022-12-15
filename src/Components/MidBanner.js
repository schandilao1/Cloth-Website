import React from 'react'
import { Box, Divider, Heading, Button, Text } from '@chakra-ui/react'

function MidBanner() {
  return (
    <>
        {/* <Image w="100%" src='midBanner Image.png' alt='Image'  /> */}
      <Box position="abosolute" bg="blackAlpha.700" py={20}>
        <Divider borderColor="white" w="70%" mx='auto' />
        <Box position='relative' top=''>
          <Heading color="white" textAlign='center' py='5'>MILITRY INSPIRED CLOTHING</Heading>
        </Box>
        <Box position='relative' top={30} left={{ base: "10%", md: "15%", lg: "20%" }} w={{ base: "40%", md: "30%", lg: "19%" }}>
          <Heading color="white" fontWeight="extrabold" fontSize={{ base: "2rem", md: "2.5rem", lg: "3.5rem" }}>
            STAY <br /> <Text fontWeight="medium">ACTIVE</Text> STAY  <br /> <Text fontWeight="medium">YOUNG</Text>
          </Heading>
          <Button my={2} w="100%" bg="orange.400" rounded="none" fontSize={{ base: ".9rem", md: "1.5rem", lg: "2rem" }}>EXPLORE NOW</Button>
        </Box>
        {/* <Box py={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad unde ratione animi autem aut libero iure sed alias earum accusantium at culpa odio, enim ex, ea nulla? A quia assumenda, harum magnam laboriosam molestias obcaecati aliquid tempore sit esse dolore quisquam numquam quos tempora officiis repellat nisi non exercitationem quidem voluptatem maxime quasi. Explicabo ipsam laudantium omnis tempora nemo saepe illo vel ducimus doloribus, distinctio fugit. Blanditiis eum, nesciunt quos quasi amet odit similique est, aspernatur expedita eligendi hic illo recusandae esse inventore at voluptatibus, architecto officiis rem porro! Sapiente hic sint possimus, error quos, adipisci nisi dignissimos voluptatibus natus cupiditate at doloremque autem. Vitae, perspiciatis. Tempora possimus quia optio atque praesentium aspernatur, laudantium aut quis temporibus facere alias maiores at, beatae sequi corporis voluptatem dolorem aliquid quas! Voluptas nisi nobis dicta deserunt suscipit at earum enim ipsum itaque expedita et saepe fugit id illum reprehenderit molestiae, nam consequatur nihil rerum nemo non mollitia asperiores? Obcaecati beatae inventore eius labore odio, totam optio unde impedit in corporis! Quaerat, dicta amet. Repellat aperiam id tenetur officiis? Hic similique quisquam repellat dolores aspernatur repudiandae rem, dicta sit eos voluptas eveniet sint quo! Cum sapiente sed necessitatibus explicabo, officiis exercitationem perferendis quia! Incidunt adipisci quaerat asperiores. Atque rerum vel numquam nesciunt. Minima fugiat, ullam hic possimus explicabo quis, sequi itaque labore magni quo voluptatibus nemo corrupti, eius reiciendis asperiores at beatae. Vel at error dolor sequi ex ea quasi itaque est praesentium temporibus nesciunt autem, asperiores enim et non doloribus consequuntur provident explicabo dignissimos accusantium! Reprehenderit unde debitis amet distinctio repellendus ducimus sit, laborum nesciunt, aliquam fugiat soluta consectetur nostrum quod, iure commodi deserunt magnam quas. Ut dolore sequi, magnam dolor omnis ipsum praesentium eius! Inventore, saepe obcaecati tenetur labore dignissimos a dolorem! Exercitationem explicabo facilis porro dolores repudiandae ducimus quod provident.55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        </Box> */}
      </Box>
    </>
  )
}

export default MidBanner