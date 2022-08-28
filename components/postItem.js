
import style from '../styles/Home.module.css'
function PostItem({post}){
    return (
            <div>
                <h2>{post.id} {post.title}</h2>
                <p>{post.description}</p>
            </div>    
    )
}
export default PostItem