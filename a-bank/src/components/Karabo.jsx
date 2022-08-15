import React from 'react'
import { Grid, GridItem, Image, Box, Text , Flex } from '@chakra-ui/react'
import karabo from "../assets/karabo.png"
import chatVideo from "../assets/karabo-chat.mp4"
import {AiFillSound} from "react-icons/ai"

function Karabo() {
  return (
<Grid templateColumns='repeat(2, 1fr)'  m={24} h="70vh" >
  <GridItem w='100%' h='100%'  backgroundColor="rgba(0,24,69, .05)" overflow="hidden" display="flex"
  justifyContent="center"
  alignItems="center"
  >

  <Box textAlign="center" w="55%" 

>
        <Box
          pt={40}
        boxShadow='none'  rounded='md'
        borderRadius="20"
      as='video'

      muted autoPlay 
      loop
      src={chatVideo}
    //   poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      alt='Big Buck Bunny'
      objectFit='contain'
      sx={{
        aspectRatio: '1'
      }}
  />
        </Box>
  </GridItem>
  <GridItem w='100%' h='100%' >

    <Box ml={24}>
<Box>        <Text fontSize="7xl" fontFamily="Altone Trial">Meet Karabo</Text>
        <Text display="flex" alignItems="center" gap={2}>[ Ka-ra-bo] <AiFillSound /></Text>
        <Text w="50%">Karabo is a given name in southern Africa. It means "answer". He is here to answer all your African Bank questions</Text></Box>
   <Flex justifyContent="space-between" mt={24}>
    <Box>
        <Text fontSize="3xl" fontFamily="Altone Trial">AI Powered</Text>
        <Text w="70%" mt={8}>With our AI technology inyegration, you will always get an answer with Karabo, anytikme and anywhere</Text>
    </Box>
    <Box>
    <Text fontSize="3xl" fontFamily="Altone Trial">Endless Customer Support</Text>
        <Text w="70%" mt={8}>With our AI technology inyegration, you will always get an answer with Karabo, anytikme and anywhere</Text>
    </Box>
   </Flex>
    </Box>
  </GridItem>
</Grid>
  )
}

export default Karabo