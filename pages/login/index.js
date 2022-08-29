import LoginPage from '../../components/Login';

function IndexPage(props) {
    return (
        <LoginPage/>
    )
}
export default IndexPage;

/*
export const getServerSideProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const articles = await res.json();
    return {
        props:{
            articles
        }
    }
} 
*/
//get ServerSideProps will sent a request to server, run time is longer


