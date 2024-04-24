import { Box, Text, Link, Heading, Button, Link as ChakraLink } from '@chakra-ui/react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section id="footer">
      <Box
        mt='30px' 
        display='flex' 
        flexDirection='column' 
        alignItems='center'
        backgroundColor='blue.500'
        height='250px'
      >
      <Box
        mb={10} 
        display='flex' 
        flexDirection='column'  
        alignItems='center'
      >
        <Heading size='lg' mt={5} color='gray.700'>Jirka Vícha</Heading>
      </Box>
      <Box mb={10} display='flex' justifyContent='space-between' alignItems='center'>
        <Text color='gray.900'>
         <Link as='a' href='#header' mr={4}>Úvod</Link>
         <Link as='a' href='#about' mr={4}>Něco o mně</Link>
         <Link as='a' href='#experience'mr={4}>Zkušenosti</Link>
         <Link as='a' href='#projects'>Projekty</Link> 
        </Text>
      </Box>
      <Box>
        <Button
          variant='solid' 
          bg='gray.700' 
          borderWidth='1px' 
          borderColor='gray.700'
          mr={3}
          overflow='hidden'
          _hover={{ bg: 'transparent'}}
          transition='background-color 0.3s ease-in-out'
          as={ChakraLink}
          href='https://github.com/JirkaVicha'
          target='_blank'
          rel='noopener norefferer'
        >
          <FaGithubSquare />
        </Button>
        <Button
          variant='solid' 
          bg='gray.700' 
          borderWidth='1px' 
          borderColor='gray.700'
          overflow='hidden'
          _hover={{ bg: 'transparent'}}
          transition='background-color 0.3s ease-in-out'
          as={ChakraLink}
          href='https://www.linkedin.com/in/jiri-vicha-a5562a274/'
          target='_blank'
          rel='noopener norefferer'
        >
          <FaLinkedin />
        </Button>
      </Box>
      <Box>
        <Text
          mt={7}
          color='gray.700'
          fontSize='xs'
        >&copy; {new Date().getFullYear()} JirkaVicha. All rights reserved</Text>
      </Box>
      </Box>
    </section>
  )
}

export default Footer