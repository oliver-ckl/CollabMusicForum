import style from '../styles/Home.module.css';
import { Box, HStack, Badge, Container, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router'

function PostItem({ post }) {
    let router = useRouter();

    return (
        <Box w='100%' padding={5} _hover={{ bg: 'blackAlpha.300', cursor: 'pointer' }} onClick={() => router.push(`/discussion/musicShare/${post.id}`)}>
            <HStack gap={1}>
                <Badge variant='solid' colorScheme='green' ml={4}>{post.category}</Badge>
                <Heading size='md'>
                    {post.id} - {post.title}
                </Heading>
            </HStack>
            <Container color='gray' noOfLines={[1,2]} mt={3}>{post.description}</Container>
        </Box>
    );
}
export default PostItem;
