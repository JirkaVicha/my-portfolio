import { Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const Navigation = () => {
  
  return (
    <Box
      position='fixed'
      top={0}
      left='50%'
      transform='translateX(-50%)'
      maxWidth='900px'
      width='100%'
      zIndex={999}
      bg='gray.700'
      borderBottomWidth='3px'
      borderBottomColor='blue.500'
      _hover={{ bg: 'blue.500'}}
      transition='background-color 0.3s ease-in-out'
    >
      <Box display='flex' justifyContent='center'>
        <Menu>
         <MenuButton variant='blue.500'>Menu</MenuButton> 
         <MenuList>
          <MenuItem as='a' href='#header'>Úvod</MenuItem>
          <MenuItem as='a' href='#about'>O mně</MenuItem>
          <MenuItem as='a' href='#experience'>Zkušenosti</MenuItem>
          <MenuItem as='a' href='#projects'>Projekty</MenuItem>
          <MenuItem as='a' href='#contact'>Kontakt</MenuItem>
         </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default Navigation