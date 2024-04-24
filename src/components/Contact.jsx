import { Box, Heading, Text, FormControl, Input, Textarea, Button } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { EmailIcon } from '@chakra-ui/icons'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm('service_fvtfmii', 'template_urtnah8', form.current, {
        publicKey: 'C4n4qQ_5g0kpWISVA',
      })
      .then(
        () => {
          setStateMessage('Message sent!')
          setIsSubmitting(false)
          setTimeout(() => {
          setStateMessage(null)
        }, 2000)
        }, (error) => {
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => {
          setStateMessage(null)
        }, 2000)
        },
      )
    e.target.reset()
  }

  return (
    <section id="contact">
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
        <Text fontSize='sm'>Jsem k dispozici...</Text>
        <Heading>Kontaktujte mě</Heading>
      </Box>
    

    <Box 
      bg='gray.700' 
      p={3}
      mb={10} 
      w={[300, 400, 500]} 
      borderWidth='1px' 
      borderRadius='lg' 
      overflow='hidden'
      _hover={{ bg: 'transparent'}}
      transition='background-color 0.3s ease-in-out'
    >
      <Box mb={2} textAlign='center'><EmailIcon color='blue.500' /></Box>
        <Heading size='sm' textAlign='center' mb={1}>Email</Heading> 
          <Text fontSize='sm' textAlign='center'>jirigeorgevicha@gmail.com</Text>
          
            <Box mt={3}>
              <Text fontSize='sm' textAlign='center' color='blue.500'>
                <a href='mailto:jirigeorgevicha@gmail.com?subject=Subject&body=Message%20content'>
                  Napsat zprávu
                </a>
              </Text> 
            </Box>
            
      </Box>
    </Box>

    {/* Form */}
    <Box
      display='flex'
      justifyContent='center'
      width='100%'
    >
      <Box
        ml={10}
        mr={10}
        mb={30}
        display='flex' 
        justifyContent='center' 
        alignItems='center'
        w={[300, 400, 500]} 
      >
        <FormControl as='form' ref={form} onSubmit={sendEmail}>
          <Input mb={3} id='user_name' type='text' name='user_name' placeholder='Jméno' required />
          <Input mb={3} id='user_email' type='email' name='user_email' placeholder='Email' required />
          <Textarea id='message' name='message' placeholder='Vaše zpráva' required />
          <Box display='flex' alignItems='center'>
            <Button mt={5} mr={3} type='submit'>Odeslat</Button>
            {stateMessage && <Text mt={5} color='blue.500'>{stateMessage}</Text>}
          </Box>
        </FormControl> 
      </Box>
    </Box>
    
    </section>
  )
}

export default Contact