import React, { createElement } from 'react'
import code from '../assets/code.jpg'
import { Box, Text, Heading, Button, Image } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { FaMobileAlt } from 'react-icons/fa'

const Header = () => {

  return (
    <section id='header'>
    <Box 
      display='flex' 
      flexDirection='column' 
      alignItems='center'
    >
      <Box 
        mb={5} 
        mt={70} 
        display='flex' 
        flexDirection='column' 
        justifyContent='center' 
        alignItems='center'
      >
       <Text fontSize='sm'>Web Developer</Text>
       <Box
        borderWidth='1px'
        p={2}
        m={2}
        borderLeftWidth={6} 
        borderLeftColor='blue.500' 
      >
        <Heading mb={3}>Jirka Vícha</Heading>
       </Box>
       <Box display='flex' justifyContent='center' alignItems='center' gap={2}>
        <FaMobileAlt />
        <Text fontSize='2xl' mb='1px' fontWeight='bold' color='blue.500'>605 827 289</Text>
       </Box>
      </Box>

      <Box 
        display='flex' 
        justifyContent='space-between' 
        gap={10} 
        m={5}
      >
        <Button size='lg' 
          as='a' 
          href='https://resume.io/r/1T49QsBJ0' 
          target='_blank'
          rel='noopener norefferer'
          variant='outline'>Moje CV</Button>
        <Button size='lg' as='a' href='#contact'>Kontakt</Button>
      </Box>
        <Image 
          borderRadius={15}
          boxShadow='3px 3px #50a2ec'
          boxSize='200px'
          src={code} 
          alt='face' 
          mt={5}
        />
    </Box>
    </section>
  )
}

export default Header