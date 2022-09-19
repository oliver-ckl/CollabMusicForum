import  { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/globals.css';
import CommonLayout from '@components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider resetCSS={true}>
            <ColorModeScript initialColorMode={"theme.config.initialColorMode"}/>
            <CommonLayout>
                <Component {...pageProps} />
            </CommonLayout>
        </ChakraProvider>
    );
}

export default MyApp;
