import Link from 'next/link';
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
    MenuItemOption,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="black.1000">
        <Box fontSize="3xl" color="black.300" fontWeight="bold">
            <Link href="/" paddingLeft="5">
                Testing Name
            </Link>
        </Box>
        <Spacer />
        <Box>
            <Menu isLazy>
                <MenuButton as={IconButton}>Menu Item</MenuButton>
                <MenuList>
                    <Link href="/">
                        <MenuItemOption>Home</MenuItemOption>
                    </Link>
                    <Link href="/discussion/all">
                        <MenuItemOption>Discussion</MenuItemOption>
                    </Link>
                    <MenuGroup title="venue">
                        <Link href="/venue/search" passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/venue/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>buy property</MenuItem>
                        </Link>
                        <Link href="/venue/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey />}>rent property</MenuItem>
                        </Link>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);
export default Navbar;
