import { useState } from 'react'
import { Box, Text, Heading, Image, Button } from '@chakra-ui/react'
import { EditIcon, InfoOutlineIcon, PlusSquareIcon } from '@chakra-ui/icons'
import face from '../assets/my-face.jpg'

const About = () => {
  const initialText = 
  "Ahoj! Jmenuji se Jirka. Odjakživa jsem se zajímal o weby. Přestože mě život zavál do jiných oborů, pořád jsem měl tendence se k tomu vracet a učit se něco nového. Když jsem objevil svět Reactu, otevřely se mi nové možnosti a já se do toho pustil s nadšením a odhodláním. Ano, možná nejsem nejmladší a nemám za sebou desetiletí zkušeností, ale tohle mě nezastavuje. Naopak, právě tato výzva mě motivuje ještě více. Práce s Reactem mě naplňuje, když vidím, jak se mé nápady a kód proměňují v interaktivní uživatelské rozhraní. Každý projekt je pro mě nová příležitost naučit se něco nového a posunout se dál na mé programátorské cestě. Ať už je to tvorba webových aplikací, implementace nových funkcionalit nebo řešení problémů, každý den mě tato práce baví a naplňuje. Jsem přesvědčen, že kombinace nadšení, touhy po učení a nekonečného odhodlání mě dělá silným členem jakékoli týmové spolupráce. Těším se na každou novou výzvu, která mi pomůže růst jako programátor a přinést inovativní řešení pro vaše projekty. Neváhejte mě kontaktovat!" 
  
  const [showFullText, setShowFullText] = useState(initialText)

  const toggleText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <section id='about'>
    <Box
      mt='160px' 
      display='flex' 
      flexDirection='column' 
      alignItems='center'
    >
      <Box 
        mb={10} 
        display='flex' 
        flexDirection='column' 
        justifyContent='center' 
        alignItems='center'
      >
        <Text fontSize='sm'>Něco málo...</Text>
        <Heading>O mně</Heading>
      </Box>
      
      {/* Image and content layout */}
      <Box
        display='grid'
        justifyContent='center'
        alignItems='center'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={10}
        mt={10}
        width='100%'
        maxWidth='900px'
      >
        {/* Image */}
      <Box 
        borderRadius={15}
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        bg='blue.500' 
        w='300px' 
        h='300px'
        mb={{ base: '10px', md: 0 }}
        mx='auto'
      >
      <Image
        src={face}
        alt='face'
        w='300px'
        borderRadius={15}
        mb={3}
        transform='rotate(-10deg)'
        _hover={{ transform: 'rotate(0deg)' }}
        transition='transform 0.3s ease-in-out'
      />
      </Box>
      
      {/* Cards */}
      <Box
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        flexDirection='column'
        gap={7}
        >
        <Box 
          bg='gray.700' 
          p={3} 
          w={[300, 400, 500]} 
          borderWidth='1px' 
          borderRadius='lg' 
          overflow='hidden'
          _hover={{ bg: 'transparent'}}
          transition='background-color 0.3s ease-in-out'
        >
          <Box mb={5} textAlign='center'><EditIcon color='blue.500' /></Box>
            <Heading size='sm' textAlign='center' mb={1}>Kurzy programování</Heading> 
            <Text fontSize='sm' textAlign='center'>JS na Udemy.com</Text>
            <Text fontSize='sm' textAlign='center'>JS, React na Odinproject.com</Text>
            <Text fontSize='sm' textAlign='center'>React na CodewithMosh.com</Text>
        </Box>

        <Box 
          bg='gray.700' 
          p={3} 
          w={[300, 400, 500]}  
          borderWidth='1px' 
          borderRadius='lg' 
          overflow='hidden'
          _hover={{ bg: 'transparent'}}
          transition='background-color 0.3s ease-in-out'
        >
        <Box mb={5} textAlign='center'><InfoOutlineIcon color='blue.500' /></Box>
          <Heading size='sm' textAlign='center' mb={1}>V čem programuji</Heading> 
          <Text fontSize='sm' textAlign='center'>React.js</Text>
          <Text fontSize='sm' textAlign='center'>PHP</Text>
          <Text fontSize='sm' textAlign='center'>HTML, CSS</Text>
        </Box>
        
        <Box 
          bg='gray.700' 
          p={3} 
          w={[300, 400, 500]}  
          borderWidth='1px' 
          borderRadius='lg' 
          overflow='hidden'
          _hover={{ bg: 'transparent'}}
          transition='background-color 0.3s ease-in-out'
        >
        <Box mb={5} textAlign='center'><PlusSquareIcon color='blue.500' /></Box>
          <Heading size='sm' textAlign='center'mb={1}>Další...</Heading> 
          <Text fontSize='sm' textAlign='center'>Firebase Databáze</Text>
          <Text fontSize='sm' textAlign='center'>GitHUB</Text>
          <Text fontSize='sm' textAlign='center'>Netlify</Text>
        </Box>
      
      </Box>
      </Box>

      <Box 
        mt={10} 
        ml={5}
        mr={5}
        display='flex' 
        justifyContent='center' 
        alignItems='center'
        maxWidth='900px'
        borderWidth='1px' 
        borderRadius='lg'
        borderLeftWidth={5}
        borderLeftColor='blue.500'
        //minWidth='200px'
      >
        <Text p={2}>
          {showFullText
            ? `${initialText.slice(0, 205)}...`
            : initialText
          }
        <Button size='xs' m={2} onClick={toggleText}>
          {showFullText ? "Číst dál..." : "Číst méně..."}
        </Button>  
        </Text>
        
      </Box>
    </Box>
    </section>
  )
}

export default About