import React from 'react'
import {Box, Text , Flex,Button, ButtonGroup} from "@chakra-ui/react";
import { Grid, GridItem, SimpleGrid} from '@chakra-ui/react'
import {HiOutlineDocumentText} from "react-icons/hi"
import {FaCcMastercard} from "react-icons/fa"
import {RiGroupLine, RiMastercardFill, RiQuestionAnswerLine} from "react-icons/ri"
function OtherServices() {
  return (
<Box display="flex" flexDir="column" gap={6} m={24}>

     <Box bg="#C6E912"  h="40vh" >

<Box w="55%" display="flex" justifyContent="space-evenly" gap={4} flexDirection="column" p={12} >
<Text fontSize="6xl" fontWeight="400" fontFamily="Altone Trial">Banking</Text>
          <Text fontSize="3xl" fontWeight="300">#1 for customer satisfaction</Text>
          <Text fontSize="xl">Perform everday essential banking srrvices with ease adn effeciecy. Transfer, send money and even set up your financial goals</Text>
       
          <ButtonGroup variant='outline' spacing='6'>
  <Button colorScheme="#140e2e">Apply Now</Button>
  <Button>Learn More</Button>
</ButtonGroup>
</Box>

     </Box>
     <Flex justifyContent="space-between" gap={6}>
     <Box  display="flex" justifyContent="space-evenly" gap={4} flexDirection="column" p={12} backgroundColor="rgba(0,24,69, .1)">
<Text fontSize="6xl" fontWeight="400" fontFamily="Altone Trial">Invest</Text>
          <Text fontSize="3xl" fontWeight="300">12% interest rates</Text>
          <Text fontSize="xl">Get an investment that is right for you. We offer fixed desposists, notice deposits amongt many</Text>
       
          <ButtonGroup variant='outline' spacing='6'>
  <Button colorScheme="#140e2e">Apply Now</Button>
  <Button>Learn More</Button>
</ButtonGroup>
</Box>
<Box  display="flex" justifyContent="space-evenly" gap={4} flexDirection="column" p={12} backgroundColor="rgba(198,233,18, .2)" >
<Text fontSize="6xl" fontWeight="400" fontFamily="Altone Trial">Borrow</Text>
          <Text fontSize="3xl" fontWeight="300">12% interest rates</Text>
          <Text fontSize="xl">Get a loan that suits your needs. From personal loans, to consolidation loan and more and just 12% interest rates with repayment plas from 18 months to 24 morgs</Text>
       
          <ButtonGroup variant='outline' spacing='6'>
  <Button colorScheme="#140e2e">Apply Now</Button>
  <Button>Learn More</Button>
</ButtonGroup>
</Box>
     </Flex>
     <Box  background="#140e2e"  h="40vh"  color="#fbfbfb">

<Box w="55%" display="flex" justifyContent="space-evenly" gap={4} flexDirection="column" p={12} >
<Text fontSize="6xl" fontWeight="400" fontFamily="Altone Trial">Insure</Text>
          <Text fontSize="3xl" fontWeight="300">12% interest rates</Text>
          <Text fontSize="xl">Get insurance for those unexpected events in your life. We will cover ypur credot life and funeral cover</Text>
       
          <ButtonGroup variant='outline' spacing='6'>
  <Button colorScheme="#140e2e">Apply Now</Button>
  <Button>Learn More</Button>
</ButtonGroup>
</Box>

     </Box>
</Box>
  )
}

export default OtherServices
