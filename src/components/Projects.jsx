import { Box, Text, Heading, Image, Button, Link as ChakraLink } from '@chakra-ui/react'
import project_1 from '../assets/project_1.jpg'
import project_2 from '../assets/project_2.jpg'
import project_3 from '../assets/project_3.jpg'
import project_4 from '../assets/project_4.jpg'
import project_5 from '../assets/project_5.jpg'

const Projects = () => {
  return (
    <section id='projects'>
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
        <Text fontSize='sm'>Něco málo z mých cvičných projektů</Text>
        <Heading>Projekty</Heading>
      </Box>
    </Box>

    {/* Project 1 */}
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
          alignItems='center'
          gap={7}
        >
          <Image src={project_1} alt='first project' boxShadow='3px 3px #50a2ec' borderRadius={15} />
          <Heading size='sm'>Portfolio (tento web)</Heading>
          <Text fontSize='xs'>ReactJs | Chakra UI</Text>
          <Box display='flex' alignItems='center'>
              <Button 
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='http://george-web.netlify.app/'
                target='_blank'
                rel='noopener norefferer'
              >
                Koukni
              </Button>
              <Button 
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='#'
                target='_blank'
                rel='noopener norefferer'
              >
                GitHub
              </Button> 
          </Box>
        </Box>
      </Box>

{/* Project 2 */}
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
          alignItems='center'
          gap={7}
        >
          <Image src={project_2} alt='second project' boxShadow='3px 3px #50a2ec' borderRadius={15} />
          <Heading size='sm'>Apka na počítání výdajů</Heading>
          <Text fontSize='xs'>ReactJs | Chakra UI</Text>
          <Box display='flex' alignItems='center'>
            <Button
              size='xs' 
              ml={3}
              as={ChakraLink}
              href='https://daily-vydaje.netlify.app/'
              target='_blank'
              rel='noopener norefferer'
            >
              Vyzkoušej
            </Button>
            <Button 
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='https://github.com/JirkaVicha/daily-budget'
                target='_blank'
                rel='noopener norefferer'
              >
                GitHub
              </Button> 
          </Box> 
        </Box>
      </Box>

{/* Project 3 */}
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
          alignItems='center'
          gap={7}
        >
        <Image src={project_3} alt='third project' boxShadow='3px 3px #50a2ec' borderRadius={15} />
          <Heading size='sm'>Seznam produktů (vlož, smaž)</Heading>
          <Text fontSize='xs'>PHP | Bootstrap | MySQL</Text>
          <Box display='flex' alignItems='center'> 
              <Button
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='https://sw-products.000webhostapp.com/views/home.php'
                target='_blank'
                rel='noopener norefferer'
              >
                Koukni
              </Button>
              <Button 
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='https://github.com/JirkaVicha/product-page'
                target='_blank'
                rel='noopener norefferer'
              >
                GitHub
              </Button> 
          </Box>
        </Box>
      </Box>

{/* Project 4 */}
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
          alignItems='center'
          gap={7}
        >
          <Image src={project_4} alt='forth project' boxShadow='3px 3px #50a2ec' borderRadius={15} />
          <Heading size='sm'>Text na Slovo (cs)</Heading>
          <Text fontSize='xs'>ReactJs | CSS</Text>
          <Box display='flex' alignItems='center'>
              <Button
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='https://text-na-slovo.netlify.app/'
                target='_blank'
                rel='noopener norefferer'
              >
                Vyzkoušej
              </Button>
              <Button 
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='https://github.com/JirkaVicha/speech-generate'
                target='_blank'
                rel='noopener norefferer'
              >
                GitHub
              </Button> 
          </Box> 
        </Box>
      </Box>

{/* Project 5 */}
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
          alignItems='center'
          gap={7}
        >
          <Image src={project_5} alt='forth project' boxShadow='3px 3px #50a2ec' borderRadius={15} />
          <Heading size='sm'>Jednoduchá fotogalerie</Heading>
          <Text fontSize='xs'>ReactJs | CSS | API</Text>
          <Box display='flex' alignItems='center'>
              <Button
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='https://simple-fotogallery.netlify.app/'
                target='_blank'
                rel='noopener norefferer'
              >
                Vyzkoušej
              </Button>
              <Button 
                size='xs' 
                ml={3}
                as={ChakraLink}
                href='https://github.com/JirkaVicha/image-gallery'
                target='_blank'
                rel='noopener norefferer'
              >
                GitHub
              </Button> 
          </Box> 
        </Box>
      </Box>
    </Box>

    </section>
  )
}

export default Projects