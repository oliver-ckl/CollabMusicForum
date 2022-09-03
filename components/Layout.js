import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';
import Nav from './Nav';
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Testing app</title>
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <Nav />
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
}
