import { Box, Center, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import styled from '@emotion/styled'

import React from 'react'
import { useRouter } from 'next/router'
import NavBarDrawer from './NavBarDrawer'

const NavWrapper = styled(Box)`
  background: #544D4D;
  height: 50px;
` //NavBox CSS (bar)

const Navbar = styled(Flex)`
  display: flex;
  flex-direction: row-reverse;
  height: 50px;
` //Flex CSS (Box of navbar element)

const NavbarBox = styled(Center)`
    width: 200px;
    border-left: solid 1px #E5E5E5;
` //navbar box (seperated by border line left)

const NavBar = () => {
  const [logged, setLogged] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure() //chakraUI hook
  //equal to reactState : {isOpen, setOpen} = React.useState(false), onClose={setOpen(false)} and onClick={setOpen(true)}
  const router = useRouter()

  const textButtonRoute = {
    "Login": "/login",
    "Register": "/login",
    "Forum": "/forum",
    "Discussion": "/discussion/"
  }

  const textButton = ["Login", "Register", "Forum", "Discussion"]
  
  const DrawerButton = () => (
    <IconButton 
      onClick={onOpen}
      aria-label={'Drawer'} 
      icon={<HamburgerIcon boxSize={6} color={'white'} />} 
      float={'left'} 
      size={'lg'} 
      colorScheme={"unstyled"} 
      // display={{ base: 'inline', lg: 'hidden' }}
    />
  )

  return (
    <NavWrapper>
      <DrawerButton/>
      <NavBarDrawer isOpen={isOpen} onClose={onClose} />
      <Navbar>
        {textButton.map((text)=>(
          // Adding display={{base: 'hidden', lg: 'inline'}} can hide nav items when window width reduced to sm
          <NavbarBox key={text} as={'button'}  onClick={()=>{router.push(textButtonRoute[text])}}>
            <Text 
              fontSize={'20px'}>
                {text}
            </Text>
          </NavbarBox>
        ))}
      </Navbar>
    </NavWrapper>
  )
}
/*textButton.map((text)...) > text is each element in array "textButton", textButtonRoute[text] means the corresponding "text" in
object "textButtonRoute", e.g: textButtonRoute[Login] = '/login'*/

export default NavBar