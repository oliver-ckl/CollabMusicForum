import Link from 'next/link'
import style from '../styles/Home.module.css'
function PostItem({post}){
    return (
        <Link href="/discussion/all/[postid]" as={`/discussion/all/${post.id}`}>
            <div className={style.grid}>
                <a>
                <h3>{post.title} &rarr;</h3>
                <p>{post.id}</p>
                <p>{post.body}</p>
                </a>
            </div>
        
        </Link>
    )
}
export default PostItem