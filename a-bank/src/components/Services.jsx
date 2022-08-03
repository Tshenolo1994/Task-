import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text , Flex,Button} from "@chakra-ui/react";
import { Grid, GridItem, SimpleGrid} from '@chakra-ui/react'
import { FcDocument } from "react-icons/fc";
import {FcFeedback} from "react-icons/fc"
function Services() {
  return (
    <Box w='100%' p={24} h="100vh" className='services'>
<Flex flexDir="column" alignItems="center" justifyContent="center" gap={12}>
<Text fontSize='7xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%">Our Services for you</Text>
<Text fontSize='lg'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="30%">Banky empowers your customers to pay

with their bank accounts
without being taken away.
</Text>
<Box className='el'>
</Box>
</Flex>
<Tabs isFitted>
  <TabList mb="1em">
    <Tab fontSize='3xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%">New Customers</Tab>
    <Tab fontSize='3xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%">Existing Customers</Tab>
  </TabList>
  <TabPanels h="80vh">
    <TabPanel textAlign="left" h="100%">
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h="100%">
  <GridItem w='100%' h='100%' bg='#C6E912'>
<Flex flexDirection="column" alignItems="center" h="100%"
 justifyContent="space-evenly">
<Text fontSize='6xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%" mt={8}>Get value with African Bank
</Text> 
<Text w="55%">
<p>Integrate Banky on your web-site to offer fast, secure and seamless online bank transfer payment method</p>
<p>You could receive payments straight into your company bank account or open a Banky merchant account and collect funds there.
</p>
</Text>
<Button w="25%">Get Started</Button>
</Flex>
  </GridItem>
  <GridItem w='100%' h='100%' >
  <SimpleGrid columns={2} spacing={0} h="100%">
  <Box backgroundColor="rgba(198,233,18, .3)" h="100%">
    <FcDocument 
    size="100px"
    fill='#000'
    />
  </Box>
  <Box backgroundColor="rgba(198,233,18, .1)" h="100%">
    <FcFeedback 
     size="100px"
     fill='#000'/>
  </Box>
  <Box backgroundColor="rgba(198,233,18, .1)" h="100%"></Box>
  <Box backgroundColor="rgba(198,233,18, .3)" h="100%"></Box>

</SimpleGrid>
  </GridItem>
  
</Grid>





    </TabPanel>
    <TabPanel textAlign="left" h="100%">
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h="100%">
  <GridItem w='100%' h='100%' bg='#C6E912'>
<Flex flexDirection="column" alignItems="center" h="100%"
 justifyContent="space-evenly">
<Text fontSize='6xl'  textAlign="center" color="#140e2e" fontFamily="Altone Trial" w="100%" mt={8}>Get value with African Bank
</Text> 
<Text w="55%">
<p>Integrate Banky on your web-site to offer fast, secure and seamless online bank transfer payment method</p>
<p>You could receive payments straight into your company bank account or open a Banky merchant account and collect funds there.
</p>
</Text>
<Button w="25%">Get Started</Button>
</Flex>
  </GridItem>
  <GridItem w='100%' h='100%' >
  <SimpleGrid columns={2} spacing={0} h="100%">
  <Box backgroundColor="rgba(198,233,18, .3)" h="100%">
    hbb
  </Box>
  <Box backgroundColor="rgba(198,233,18, .1)" h="100%"></Box>
  <Box backgroundColor="rgba(198,233,18, .1)" h="100%"></Box>
  <Box backgroundColor="rgba(198,233,18, .3)" h="100%"></Box>

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