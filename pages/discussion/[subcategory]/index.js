import PostList from '../../../components/postList';
function IndexPage({ articles }) {
    //get from props
    return (
        <>
            <h1> Forum main page </h1>
            <h2>post list</h2>
            <PostList postList={articles}></PostList>
        </>
    );
}
export default IndexPage;

export async function getServerSideProps(context) {
    const { params } = context;
    const { subcategory } = params;

    console.log('\n', subcategory);
    console.log('\n', { subcategory });
    let res;
    if (subcategory == 'all') {
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
