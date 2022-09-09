import { useRouter } from 'next/router';
import Router from 'next/router';
import CategoryList from '@components/CategoryList'

function IndexPage({ categoryList }) {
    //get from props
    return (
        <>
            <h1>Forum Main Page</h1>
            <CategoryList categoryList={categoryList}/>
        </>
    );
}
export default IndexPage;

export async function getServerSideProps(context) {
    let categoryList = [];
    let res = await fetch('http://localhost:4000/forum');
    categoryList = await res.json();

    return {
        props: {
            categoryList
        },
    }
}
//get ServerSideProps will sent a request to server, run time is longer
