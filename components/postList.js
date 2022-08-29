import Link from 'next/link'
import PostItem from './postItem'
function PostList({ postList }) {//postList is a component parameter, obtain by page pass in
    return (
        <>
            {postList.map((post) => (
                <>
                    <div key={post.id}>
                        <Link href={`/discussion/all/${post.id}`} >
                            <a>
                                <h3>{post.title} &rarr;</h3>
                            </a>
                        </Link>
                        <PostItem post={post} />
                        <hr></hr>
                    </div>
                </>
            ))}
        </>
    )
}
export default PostList;