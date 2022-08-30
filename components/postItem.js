import style from '../styles/Home.module.css';
import { Container } from '@chakra-ui/react';
function PostItem({ post }) {
    return (
        <Container w='2xl' bg='blackAlpha.400'>
            <h2>
                {post.id} {post.title}
            </h2>
            <p>{post.description}</p>
        </Container>
    );
}
export default PostItem;
