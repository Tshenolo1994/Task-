import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Mousewheel} from "swiper";
import {
    Button,
    Flex,
    Image,
    Stack,
    Text,
    Avatar, 
    AvatarGroup,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Box,
    Grid,
  } from '@chakra-ui/react';
export default function App() {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1.1}
        spaceBetween={0}
        mousewheel={{
       
    sensitivity: .5,
    releaseOnEdges: true,
        }}
       
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide >

  <Flex flexDirection="column" p={12} >
  <Text fontSize="6xl"  textAlign="left" width='90%' fontFamily="Altone Trial">An easy and secure digital account. Ideal for you or your company</Text>
    <Button width='25%'>Open account</Button>
  </Flex>
  <Flex w="60%" justifyContent="space-between">
    <Box className="el el-2"></Box>
    <Text
   position="absolute"
   bottom="25%"
   textAlign="left"
    >African Bank is a financial solution that works as a digital account, for financial management and insertion, aimed at educational and cultural initiatives, commercial establishments and the promotion of tourist equipment.</Text>
  </Flex>

        </SwiperSlide>
        <SwiperSlide>
            <Flex direction="row">
           < Text
   position="absolute"
   bottom="20%"
   textAlign="left"
   w="35%"
    >African Bank is a financial solution that works as a digital account, for financial management and insertion, aimed at educational and cultural initiatives, commercial establishments and the promotion of tourist equipment.</Text>
                <Box className="el-3"></Box>
            </Flex>
            <Text position="absolute"
            left="10%"
            className="text"
            color="rgba(0,24,69, .3)"
            fontSize="150px" fontFamily="Altone Trial">INVEST</Text>
          
            <Text position="absolute" fontFamily="Altone Trial"
            right="-35%"  fontSize="150px"  color="rgba(0,24,69, .3)"
    className="text"
            >INSURE</Text>
        </SwiperSlide>
        <SwiperSlide className="values" >

        
            <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontSize="4xl" mb="2rem" fontFamily="Altone Trial">Why African Bank?</ListItem>
  <ListItem fontSize="2xl">Honest guidance that helps you choose what works for you.</ListItem>
  <ListItem fontSize="2xl">Affordable offers that suit your goals and budget.</ListItem>
  <ListItem fontSize="2xl">Competitive interest rate based on how you spend.</ListItem>
  <ListItem fontSize="2xl">No hidden fees, just clear pricing and payment plans.t</ListItem>
</UnorderedList>
        
        </SwiperSlide>
     
        
      </Swiper>
    </>
  );
}
