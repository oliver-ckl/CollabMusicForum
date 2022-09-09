import Link from 'next/link';
import { Box, Button, Divider } from '@chakra-ui/react';

import PostItem from './PostItem';
function PostList({ postList, subcategory }) {
    // PostList is a component parameter, obtain by page pass in\
    return (
        <Box>
            {
                postList.map((post) => (
                    <Box>
                        <PostItem post={post} />
                        <Divider/>
                    </Box>
                ))
            }
        </Box>
    );
}
export default PostList;
