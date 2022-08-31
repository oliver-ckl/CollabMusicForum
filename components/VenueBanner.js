import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Badge, Text, Button, Container, Heading } from '@chakra-ui/react';

function VenueBanner ({ purpose, title1, title2, des1, des2, linkName, buttonText, imageUrl }) {
    return (
        <Flex m="10" bg='blackAlpha.500'>
            <Image src={imageUrl} width={500} height={300} alt="banner"/>
            <Box w={400} ml={4}>
                <Badge variant='solid' colorScheme='green'>{purpose}</Badge>
                <Heading size='lg'>{title1}</Heading>
                <Heading size='lg'>{title2}</Heading>
                <Text>{des1}</Text>
                <Text>{des2}</Text>
                <Button size="xl" bg="blue.300" color="white" mb={3}>
                    <Link href={linkName}>{buttonText}</Link>
                </Button>
            </Box>
        </Flex>
    );
}

export default VenueBanner;