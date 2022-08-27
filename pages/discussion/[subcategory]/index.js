import PostList from '../../../components/postList'
function IndexPage({articles}){//get from props
    console.log(articles);
    return <>
    <h1> Forum main page </h1>
   <hr></hr>
    <h2>post list</h2>
    <PostList postList={articles}></PostList>
    </>
}
export default IndexPage;

 export const getServerSideProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const articles = await res.json();
    return {
        props:{
            articles
        }
    }
} 
//get ServerSideProps will sent a request to server, run time is longer


