import { useRouter } from 'next/router';
import Link from 'next/link';
import PostItem from '../../../components/postItem';
import PostCommentList from '../../../components/PostCommentList';

function DetailPage({ article, comment }) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    console.log(router.query.postid);
    console.log(article.postid);
    return (
        <>
            <h1> direct by post index</h1>
            <Link href="/">back to Home</Link>
            <Link href="/discussion/all">back to Discussion</Link>
            <PostItem post={article} />
            <PostCommentList data={comment}/>
        </>
    );
}

export default DetailPage;

export const getServerSideProps = async (context) => {

    const res1 = await fetch(`http://localhost:4000/post/${context.query?.postid}`);
    const res2 = await fetch(`http://localhost:4000/comments/${context.query?.postid}`);

    const article = await res1.json();
    const comment = await res2.json();

    return {
        props: {
            article,
            comment,
        },
    };
};

