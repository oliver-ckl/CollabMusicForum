import { useState } from 'react';
import { Button, Box, Center, Heading, Text, Input, Container, FormControl, FormLabel } from '@chakra-ui/react'
import style from '../styles/Login.module.css';

function LoginPage() {
    let [loginParam, setLoginParam] = useState({});
    
    return (
        <Container maxW='2xl' bg='blackAlpha.500' border='1px white solid' borderRadius='3%'>
            <Box padding='10' maxW='md'>
                <Heading _hover={{ letterSpacing: 2 }} transition='0.5s'>Login</Heading>
                <FormControl>
                    <FormLabel>Email/Username:</FormLabel>
                    <Input type='email' bg='blackAlpha.300' placeholder='Enter your email here'/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password:</FormLabel>
                    <Input type='password' bg='blackAlpha.300' placeholder='Enter your password here'/>
                </FormControl>
                <Center pt='6'>
                    <Button bg='purple.600' _hover={{ bg: 'purple.700' }}>Login</Button>
                </Center>
            </Box>
        </Container>
    );
}

export default LoginPage;
