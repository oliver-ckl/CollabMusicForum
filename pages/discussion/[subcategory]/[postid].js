import Link from 'next/link' ;
import { Fragment } from 'react';

import PostList from '../../../components/postList'

function DetailPage(props){
    console.log(props);
    return (
        <Fragment>
            <h1>Direct by post index</h1>
            <Link href='/'>Back to Home</Link>
            <PostList postList={props?.article}/>
        </Fragment>
    ); 
}

export default DetailPage;

export const getServerSideProps = async (props) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.query?.postid}`)
    const article = await res.json();
    return {
        props: {
            article: [article]
        }
    }
}