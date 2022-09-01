import { Box } from '@chakra-ui/react'
import PostComment from './PostComment'

function PostCommentList ({ data }) {
	let comments = data.comment;
	console.log(comments);
	return (
		<Box>
			{
				comments.map((obj, index) => (
					<PostComment
						index={index}
						userid={obj.userid}
						username={obj.username}
						content={obj.content}
					/>
				))
			}
		</Box>
	);
}

export default PostCommentList;