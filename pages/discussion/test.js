import { Box,Button } from '@chakra-ui/react';
import Head from 'next/head';


import PostCard from '../../components/PostCard';
//will delete

export default function test({ posts }) {
    const applyFilter = async(e)=>{//not working now
        let response = await fetch('/api/posts', {
            method: 'GET',
            filter:"music share"
        });
    }
    return (
        <div>
           
            <main>
                <Box>
                    <Button onClick={applyFilter} value={"music share"}>apply filter</Button>
                </Box>
                <div >
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
    // extract the data
    let data = await response.json();
    console.log(data);
    return {
        props: {
            posts: data,
        },
    };
}