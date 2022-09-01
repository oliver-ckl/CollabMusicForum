import style from '../styles/Home.module.css';
import { Container, HStack, Tag } from '@chakra-ui/react';
function PostItem({ post }) {
    return (
        <Container w='2xl'>
            <HStack h='60px'>   
                <h2>
                    {post.id} {post.title}
                </h2>
                <Tag>{post.category}</Tag>
            </HStack>
            <p>{post.description}</p>
        </Container>
    );
}
export default PostItem;
