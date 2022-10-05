import { Box, Container, Text, Flex, HStack, Avatar, Tag } from '@chakra-ui/react'

function PostComment ({ index, userid, username, content }) {
	return (
		<Box bg='blackAlpha.300' w="100%" mt={8} pl={{base: 3}} pr={{base: 3}}>
			<HStack ml="4" p='2'>
				<Text><b>{index}.</b></Text>
				<Text color="blue.500" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>{username}</Text>
				<Text color="gray">#{userid}</Text>
			</HStack>
			<Container pb={3}>
				{content}
			</Container>
		</Box>
	);
}

export default PostComment;