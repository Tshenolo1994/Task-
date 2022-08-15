import React from 'react'
import { Select } from '@chakra-ui/react'
import { Grid, GridItem, Box, CircularProgress, CircularProgressLabel, Text, Flex ,  Button, Stack, Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  SliderMark, Tooltip} from '@chakra-ui/react'

function Loan() {

  const [sliderValue, setSliderValue] = React.useState(50)
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

  return (
<Grid templateColumns='repeat(2, 1fr)' gap={0} h="100vh">
  <GridItem w='100%' h='100%' p={24} display="flex" justifyContent="center" alignItems="center"> 
<Flex flexDirection="column" gap={10}>

    <Text fontSize="6xl">Calculate your potential Investment returns</Text>
    <Text w="75%">Lower your rate. Change your term. Take cash out to pay off debt. No matter which option you choose, refinancing with Lower can save you money.</Text>
<Stack spacing={16}>
  <Flex flexDirection="column">
    <Text fontWeight={500} fontSize="18px">Which investment type do you want?</Text>
  <Select placeholder='Fixed deposit' variant='flushed'>
  <option value='option1'>Notice Deposit</option>
  <option value='option2'>Access Accumulator</option>
  <option value='option3'>Tax Free</option>
</Select>
  </Flex>
<Flex flexDirection="column" >
  <Text fontWeight={500} fontSize="18px" mb={12}>For how long do you want to invest</Text>
<Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}

defaultValue={0}
      min={1}
      max={36}
      colorScheme='teal'
>
        <SliderMark value={3} {...labelStyles}>
          3 months
        </SliderMark>
        <SliderMark value={12} {...labelStyles}>
          12 months
        </SliderMark>
        <SliderMark value={36} {...labelStyles}>
          36 months
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12%'
        >
          {sliderValue} mo.
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
</Flex>
<Flex flexDirection="column">
    <Text fontWeight={500} fontSize="18px">Which payout frequency do you prefer?</Text>
  <Select placeholder='Fixed deposit' variant='flushed'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  </Flex>
</Stack>
<Flex>
<Input variant='flushed' placeholder='Flushed' />
</Flex>
    <Flex gap={8} mt={10}>
    <Button w="50%"> Calculate repayment</Button>
    <Button w="50%"> Apply now</Button>
    </Flex>
</Flex>

  </GridItem>
  
  <GridItem w='100%' h='100%'p={24} display="flex" justifyContent="center" alignItems="center">
  <Box>
  <CircularProgress value={40} color="#C6E912" size="600" thickness='4px' >
 
  <CircularProgressLabel fontSize="7xl">R2 400
  <br />
  <Text fontSize="lg">avg monthly income</Text>
  </CircularProgressLabel>

</CircularProgress>
</Box>
  </GridItem>

</Grid>
  )
}

export default Loan