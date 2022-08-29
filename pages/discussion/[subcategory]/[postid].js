import {useRouter} from 'next/router'; 
import Link from 'next/link' ;
import PostItem from '../../../components/postItem'
function DetailPage({article}){
    const router=useRouter();
    if (router.isFallback){
        return <h1>Loading...</h1>
    }
    console.log(router.query.postid); 
    console.log(article.postid); 
    return <>
        <PostItem post={article}/>
        <h1> direct by post index</h1>
        <Link href='/'>back to Home</Link>
    </>
}

export default DetailPage;


export const getServerSideProps = async (context) =>{
    const res = await fetch(`http://localhost:4000/post/${context.query?.postid}`)
    const article = await res.json();
    console.log(article)
    return {
        props: {
            article
        }
    }
} 

