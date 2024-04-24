import { Box, Heading, Text } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'

const Experience = () => {
  return (
    <section id="experience">
    <Box
      mt='150px' 
      display='flex' 
      flexDirection='column' 
      alignItems='center'
    >
      <Box
        mb={10} 
        display='flex' 
        flexDirection='column'  
        alignItems='center'
      >
        <Text fontSize='sm'>Co umím...</Text>
        <Heading>Moje zkušenosti</Heading>
      </Box>
    </Box>

    <Box
      display='grid'
      justifyContent='center'
      alignItems='center'
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={{ base: 5, md: 5 }}
      mt={10}
      width='70%'
      m='0 auto'
    >
      {/* Left Box */}
      <Box
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        bg='gray.700'
        borderWidth='1px' 
        borderRadius='lg'
        borderLeftWidth={5}
        borderLeftColor='blue.500' 
        p={5}
        w='100%'
        minH='400px' 
        mb={{ base: 5, md: 5 }}
        mx='auto'
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='left'
          flexWrap='wrap'
          gap={10}
        >
          <Heading size='md'>Frontend Development</Heading>
          <Text><CheckCircleIcon mr={5} color='blue.500' />HTML - <span style={{ color: 'gray' }}>Vyznám se</span></Text>
          <Text><CheckCircleIcon mr={5} color='blue.500' />CSS - <span style={{ color: 'gray' }}>Docela se vyznám</span></Text>
          <Text><CheckCircleIcon mr={5} color='blue.500' />JavaScript - <span style={{ color: 'gray' }}>Mám širší základy</span></Text>
          <Text><CheckCircleIcon mr={5} color='blue.500' />React - <span style={{ color: 'gray' }}>Prohlubuju znalosti</span></Text>
          <Text><CheckCircleIcon mr={5} color='blue.500' />Chakra UI - <span style={{ color: 'gray' }}>Velký pomocník</span></Text>
        </Box>
      </Box>

      {/* Right Box */}
      <Box
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        bg='gray.700' 
        borderWidth='1px' 
        borderRadius='lg'
        borderLeftWidth={5}
        borderLeftColor='blue.500'
        p={5}
        w='100%'
        minH='400px' 
        mb={{ base: 5, md: 5 }}
        mx='auto'
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='left'
          flexWrap='wrap'
          gap={10}
        >
          <Heading size='md'>Backend Development</Heading>
          <Text><CheckCircleIcon mr={5} color='blue.500' />PHP - <span style={{ color: 'gray' }}>Mám základy</span></Text>
          <Text><CheckCircleIcon mr={5} color='blue.500' />MySQL - <span style={{ color: 'gray' }}>Podobně jako PHP</span></Text>
          <Text><CheckCircleIcon mr={5} color='blue.500' />Firebase - <span style={{ color: 'gray' }}>Skvělá DB pro React</span></Text>
        </Box>

      </Box>
    </Box>
   </section> 
  )
}

export default Experience