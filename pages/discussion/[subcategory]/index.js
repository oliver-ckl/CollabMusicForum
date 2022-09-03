import PostList from '../../../components/postList';

import { useRouter } from 'next/router';
import Router from 'next/router';
function IndexPage({ articles }) {
    //get from props
    return (
        <>
            <button onClick={() => Router.push('/discussion/all')}>
                clear filter
            </button>
            <button onClick={() => Router.push('/discussion/Rock')}>
                Rock
            </button>
            <h1> Forum main page </h1>
            <h2>post list</h2>
            <PostList postList={articles}></PostList>
        </>
    );
}
export default IndexPage;

export async function getServerSideProps(context) {
    const { params } = context;

    var { subcategory } = params;
    subcategory = subcategory[0].toUpperCase() + subcategory.substring(1);
    console.log('\n', subcategory);
    console.log('\n', { subcategory });
    let res;
    if (subcategory == 'all' || subcategory == 'All') {
        res = await fetch(`http://localhost:4000/post`);
    } else {
        res = await fetch(`http://localhost:4000/post?category=${subcategory}`);
    }
    const articles = await res.json();
    return {
        props: {
            articles,
            subcategory,
        },
    };
}
//get ServerSideProps will sent a request to server, run time is longer
