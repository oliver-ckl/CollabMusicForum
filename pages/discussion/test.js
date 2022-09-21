import { Box,Button } from '@chakra-ui/react';
import Head from 'next/head';


import PostCard from '../../components/PostCard';
//will delete

export default function test({ posts }) {
    const applyFilter = async(e)=>{//not working now
       
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
    const query = ctx.query;
    console.log("q: ",query)
    let param = '';
    
    for (let key in query) {
        param += `${key}=${query[key]}&`;
        console.log("key: "+key);
        console.log("query[key]: "+query[key]);
    }
    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts${param? '?' : ''}${param}`);
    // extract the data
    let data = await response.json();
    
    return {
        props: {
            posts: data,
        },
    };
}