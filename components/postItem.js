import style from '../styles/Home.module.css';
import { Box, HStack, Badge, Container, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router'

function PostItem({ post }) {
    let router = useRouter();

    return (
        <Box w='xl' h='140px' _hover={{ bg: 'blackAlpha.300', cursor: 'pointer' }} onClick={() => router.push(`/discussion/musicShare/${post.id}`)}>
            <HStack h='60px' ml='20px' gap='1'>   
                <Heading size='md'>
                    {post.id} - {post.title}
                </Heading>
                <Badge variant='solid' colorScheme='green'>{post.category}</Badge>
            </HStack>
            <Container color='gray' noOfLines={[1,2]}>{post.description}</Container>
        </Box>
    );
}
export default PostItem;
