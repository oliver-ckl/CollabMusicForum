import { Box, Center, Flex, IconButton, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import styled from '@emotion/styled'

import React from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  const textButtonRoute = {
    "Login": "/login",
    "Register": "/login",
    "Forum": "/discussion/all"
  }

  const textButton = ["Login", "Register", "Forum"]
  
  const DrawerButton = () => (
    <IconButton 
      aria-label={'Drawer'} 
      icon={<HamburgerIcon boxSize={6} color={'white'} />} 
      float={'left'} 
      size={'lg'} 
      colorScheme={"unstyled"} 
    />
  )

  return (
    <NavWrapper>
      <DrawerButton />
      <Navbar>
        {textButton.map((text)=>(
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