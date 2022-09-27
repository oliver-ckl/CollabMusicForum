import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input
  } from '@chakra-ui/react'

/*
interface DrawerProps{
    isOpen: Boolean;
    onClose: ()=>void;
}
For your reference(typescript syntax)  */

const NavBarDrawer = (props) => {
  return (
    <Drawer
        isOpen={props.isOpen}
        placement='left'
        onClose={props.onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Drawer</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

        </DrawerContent>
    </Drawer>
  )
}

export default NavBarDrawer