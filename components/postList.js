import PostItem from './postItem'
function PostList({postList}) {//postList is a component parameter, obtain by page pass in
    return (
        <div>
        {postList.map((post)=>(
            <>
            <PostItem post={post}/>
            <hr></hr> 
            </>
            ))}
        </div>
    )
}
export default PostList;