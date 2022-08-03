
import video from "../assets/karabo.mp4"
import chat from "../assets/chat.png"
import bills from "../assets/bills.png"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Center} from '@chakra-ui/react'

import {
    Button,
    Flex,
    Image,
    Stack,
    Text,
    Avatar, 
    AvatarGroup,
  
    Box,
    Grid,
  } from '@chakra-ui/react';

  export default function SplitScreen() {
    return (
       <Box h="95vh">
         <Grid templateColumns='repeat(2, 1fr)' gap={1} h="100%"
        padding={24}
      paddingTop={30}
      background="radial-gradient(circle at 50% 50%, #002b60, #022a5f, #06285b, #0b2556, #102250, #131e4a, #141a43, #15173c, #141437, #141132, #140f2f, #140e2e)"
        position="relative">

        <Box w="100%" h="100%"  bg="transparent" display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" gap={2} pt="15">
<Flex flexDirection="column" justifyContent="center" alignItems="flex-start" paddingTop="10" gap={8}>

<Text fontSize='7xl'  textAlign="left" color="#fafafa" fontFamily="Altone Trial" w="100%">The Bank for the people <br /> Ran by the people</Text>
<Text fontSize='md' textAlign="left" color="#fafafa" w="60%" mt="0">We are continually innovating financial solutions that are more valuable and more accessible. We call it humanity through banking</Text>
<Stack spacing={4} direction='row'   mt={8}>
  <Button colorScheme='blackAlpha' size='lg' color="#C6E912">
 Open an account
  </Button>
  <Button  colorScheme='blackAlpha' size='lg'  variant='outline' color="#C6E912">
    Watch our latest ad
  </Button>
  </Stack>
</Flex>
<Box w="100%" h="10vh"   bg="transparent" display="flex" justifyContent="space-between" flexDir="row"
      
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
<Box display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" gap={8}>

<Text  textAlign="left" fontSize='6xl' color="#fafafa">3M</Text>
<Flex flexDirection="column">

<AvatarGroup size="md" max={4}>
<Avatar name="Ryan Florence" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
<Avatar name="Kent Dodds" src="https://images.pexels.com/photos/2331539/pexels-photo-2331539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
<Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
<Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
</AvatarGroup>
<Text fontSize='sm' w="80%" textAlign="left" color="#fafafa" mt={2}>We have almost 3 million users in South Africa who are happy with our product</Text>
</Flex>
</Box>

</Flex>
      
<Flex flexDirection="column" >
<Text fontSize='2xl' w="60%" textAlign="left" color="#C6E912">12.5%</Text>
<Text fontSize='sm' w="80%" textAlign="left" color="#fafafa" >Rated the best bank for customer satisfaction</Text>
</Flex>
<Flex flexDirection="column" >
<Text fontSize='2xl' w="80%" textAlign="left" color="#C6E912">#1</Text>
<Text fontSize='sm' w="80%" textAlign="left" color="#fafafa">SA's best rate of 12.50%.  <ArrowForwardIcon /></Text>
</Flex>
      

</Box>
        </Box>
<Center>
<Stack direction="row"
position="relative" 
display="flex"
justifyContent="center"
alignItems="center"

w="100%"
spacing={20}>
<Box w="45%" height="100%" >
<Image
mt="18"
  borderRadius="20"
  src={bills}
  alt="Segun Adebayo"
/>
<Box textAlign="center" w="45%"
position="absolute"  left="20%" top="10%">
        <Box
        boxShadow='md'  rounded='md'
        borderRadius="20"
      as='video'
   
      muted autoPlay 
      loop
      src={video}
    //   poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      alt='Big Buck Bunny'
      objectFit='contain'
      sx={{
        aspectRatio: '1'
      }}
  />
        </Box>
        <Box w="45%" height="100%">
<Image
mt="18"
  borderRadius="20"
  src={chat}
  alt="Segun Adebayo"
/>
  </Box>
</Stack>
</Center>
      </Grid>
  
       </Box>
    );
  }