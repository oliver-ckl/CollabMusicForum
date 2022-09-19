import { useState } from 'react'
import { useRouter } from 'next/router';
import Router from 'next/router';
import { Box, Heading, Flex, Button, FormControl, Select } from '@chakra-ui/react';

import PostList from '@components/PostList'

function IndexPage({ articles, categoryList }) {
    let router = useRouter();
    let [category, setCategory] = useState('');

    function toggleFilter(value) {
        setCategory(value);
        router.push(`/discussion/musicShare/${value ? `?category=${value}` : '' }`)
    }

    return (
        <Box w='xl'>
            <Heading> Forum main page </Heading>
            <Flex mt={10} mb={10}>
                <FormControl mr={5} >
                    <Select placeholder='All' value={category} onChange={(e) => toggleFilter(e.target.value)}>
                        {
                            categoryList.map((item) => (
                                <option value={item} key={item.id}>{item}</option>
                            ))
                        }
                    </Select>
                </FormControl>
            </Flex>
            <PostList postList={articles}></PostList>
        </Box>
    );
}
export default IndexPage;

export async function getServerSideProps(context) {
    const { params } = context;
    const query = context.query;

    let postRes = [];
    let categoryRes = [];
    let param = '';

    for (let key in query) {
        param += `${key}=${query[key]}`;
    }

    categoryRes = await fetch('http://localhost:4000/category');
    postRes = await fetch(`http://localhost:4000/post${param ? '?' : ''}${param}`)
    const articles = await postRes.json();
    const categoryList = await categoryRes.json();

    return {
        props: {
            articles,
            categoryList
        },
    };
}
//get ServerSideProps will sent a request to server, run time is longer
