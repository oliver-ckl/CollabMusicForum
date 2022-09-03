import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Flex,
    Box,
    Spacer,
    MenuGroup,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/discussion/all">Forum</Link>
                </li>
                <li>
                    <Link href="/login/">Login</Link>
                </li>
                <li>
                    <Link href="/venue/">Venue</Link>
                </li>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </ul>
        </nav>
    );
}

export default Nav;
