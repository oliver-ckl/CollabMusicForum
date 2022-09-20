import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box,Button } from '@chakra-ui/react';
export default function PostCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    //will delete later
    
    // Delete post
    const deletePost = async (postId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete post
            await fetch('/api/posts', {
                method: 'DELETE',
                body: postId,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <Box>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <small>{new Date(post.createdAt).toUTCString()}</small>
                <br />

                <Button type="button" onClick={() => deletePost(post['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </Button>
                </Box>
            </li>
        </>
    );
}