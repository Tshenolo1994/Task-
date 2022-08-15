import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text , Flex,Button} from "@chakra-ui/react";
import { Grid, GridItem, SimpleGrid} from '@chakra-ui/react'
import { MdSwitchAccount } from "react-icons/md";
import {HiOutlineDocumentText} from "react-icons/hi"
import {FaCcMastercard} from "react-icons/fa"
import {RiGroupLine, RiMastercardFill, RiQuestionAnswerLine} from "react-icons/ri"

function Services() {
  return (
    <Box w='100%' p={24} h="100%" className='services'>
<Flex flexDir="column" alignItems="center" justifyContent="center" gap={12}>
<Text fontSize='7xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%">Our Services for you</Text>
<Text fontSize='lg'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="30%">African Bank empowers your customers to pay

with their bank accounts
without being taken away.
</Text>
<Box className='el'>
</Box>
</Flex>
<Tabs isFitted variant='unstyled'>
  <TabList mb="1em">
    <Tab fontSize='3xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%" _selected={{ textDecoration: 'underline' }}>New Customers</Tab>
    <Tab fontSize='3xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%" _selected={{ textDecoration: 'underline' }}>Existing Customers</Tab>
  </TabList>
  <TabPanels h="80vh">
    <TabPanel textAlign="left" h="100%">
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h="100%">
  <GridItem w='100%' h='100%' background="#C6E912">
<Flex flexDirection="column" alignItems="center" h="100%"
 justifyContent="space-evenly">
<Text fontSize='6xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%" mt={8}>Get value with African Bank
</Text> 
<Text w="55%">
<p>Integrate African Bank on your web-site to offer fast, secure and seamless online bank transfer payment method</p>
<p>You could receive payments straight into your company bank account or open a Banky merchant account and collect funds there.
</p>
</Text>
<Button w="25%">Get Started</Button>
</Flex>
  </GridItem>
  <GridItem w='100%' h='100%' >
  <SimpleGrid columns={2} spacing={0} h="100%">
  <Box backgroundColor="rgba(198,233,18, .3)" h="100%" p={12}>
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <HiOutlineDocumentText
    size="80px"
    fill='#C6E912'
    color='#ebffad'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Reputable Loan Rates</Text>
     <Text>Get the best loan rates in the country. Gaurateed returns in 60 months, with personal loan rate at just 12%</Text>
     <Button>Apply Now</Button>
</Box>
 </Flex>
  </Box>
  <Box backgroundColor="rgba(198,233,18, .1)" h="100%" p={12}>
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <RiQuestionAnswerLine
    size="80px"
    fill='#C6E912'
    color='#ebffad'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Endless Customer Support</Text>
     <Text>For queries on your account, banking services or general queries, speak to our reliable chatbot Karabo</Text>
     <Button>Ask Karabo</Button>
</Box>
 </Flex>
  </Box>
  <Box backgroundColor="rgba(198,233,18, .1)" h="100%" p={12}>
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <FaCcMastercard
    size="80px"
    fill='#C6E912'
    color='#ebffad'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Activate MW Card</Text>
     <Text>Active your new MW card now</Text>
     <Button>Activate card</Button>
</Box>
 </Flex>
  </Box>
  <Box backgroundColor="rgba(198,233,18, .3)" h="100%" p={12}>
 <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <RiGroupLine
    size="80px"
    fill='#C6E912'
    color='#ebffad'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Branch Queue</Text>
     <Text> You can now book appointments and queue remotely to get service at your availability </Text>
     <Button>Wait in queue</Button>
</Box>
 </Flex>
    
  </Box>

</SimpleGrid>
  </GridItem>
  
</Grid>


    </TabPanel>
    <TabPanel textAlign="left" h="100%">
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h="100%">
  <GridItem w='100%' h='100%'         background="#140e2e">
<Flex flexDirection="column" alignItems="center" h="100%"
 justifyContent="space-evenly">
<Text fontSize='6xl'  textAlign="center" color="#fefcf7"  fontFamily="Altone Trial" w="100%" mt={8}>Get value with African Bank
</Text> 
<Text w="55%" color="#fefcf7">
<p>Integrate African Bank your web-site to offer fast, secure and seamless online bank transfer payment method</p>
<p>You could receive payments straight into your company bank account or open a Banky merchant account and collect funds there.
</p>
</Text>
<Button w="25%">Sign in</Button>
</Flex>
  </GridItem>
  <GridItem w='100%' h='100%' >
  <SimpleGrid columns={2} spacing={0} h="100%">
  <Box backgroundColor="rgba(0,24,69, .3)" h="100%" p={12}>
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <HiOutlineDocumentText
    size="80px"
    fill='#141437'
    color='#f0f0fa'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Reputable Loan Rates</Text>
     <Text>Get the best loan rates in the country. Gaurateed returns in 60 months, with personal loan rate at just 12%</Text>
     <Button>Apply Now</Button>
</Box>
 </Flex>
  </Box>
  <Box backgroundColor="rgba(0,24,69, .1)" h="100%" p={12}>
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <RiQuestionAnswerLine
    size="80px"
    fill='#141437'
    color='#f0f0fa'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Endless Customer Support</Text>
     <Text>For queries on your account, banking services or general queries, speak to our reliable chatbot Karabo</Text>
     <Button>Ask Karabo</Button>
</Box>
 </Flex>
  </Box>
  <Box backgroundColor="rgba(0,24,69, .1)" h="100%" p={12}>
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <FaCcMastercard
    size="80px"
    fill='#141437'
    color='#f0f0fa'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Activate MW Card</Text>
     <Text>Active your new MW card now</Text>
     <Button>Activate card</Button>
</Box>
 </Flex>
  </Box>
  <Box backgroundColor="rgba(0,24,69, .3)" h="100%" p={12}>
 <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <RiGroupLine
    size="80px"
    fill='#141437'
    color='#f0f0fa'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Branch Queue</Text>
     <Text> You can now book appointments and queue remotely to get service at your availability </Text>
     <Button>Wait in queue</Button>
</Box>
 </Flex>
    
  </Box>

</SimpleGrid>
  </GridItem>
  
</Grid>


    </TabPanel>
  </TabPanels>
</Tabs>

    </Box>
  )
}

export default Services