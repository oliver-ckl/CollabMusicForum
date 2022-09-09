import { useRouter } from 'next/router';
import { Flex, Heading, Button, Box } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import PostCommentList from '@components/PostCommentList';

function DetailPage({ article, comment }) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    
    return (
        <>
            <Box w='xl' p='20px'>
                <Heading size='xl'><ChatIcon/> #{article.id} - {article.title}</Heading>
                <Flex gap='12' mt='24px'>
                    <Button variant='link'><Link href="/">Back to Home</Link></Button>
                    <Button variant='link'><Link href="/discussion/musicShare">Back to Discussion</Link></Button>
                </Flex>
            </Box>
            <PostCommentList data={comment}/>
        </>
    );
}

export default DetailPage;

export async function getServerSideProps(context) {

    const res1 = await fetch(`http://localhost:4000/post/${context.params?.postid}`);
    const res2 = await fetch(`http://localhost:4000/comments/${context.params?.postid}`);

    const article = await res1.json();
    const comment = await res2.json();

    return {
        props: {
            article,
            comment,
        },
    };
}
//get ServerSideProps will sent a request to server, run time is longer
