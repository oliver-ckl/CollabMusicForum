import { Box, Container, Text, Flex, HStack, Avatar, Tag } from '@chakra-ui/react'

function PostComment ({ index, userid, username, content }) {
	return (
		<Flex flexWrap="wrap" bg='blackAlpha.500' w="2xl" mt="4" pb="4">
			<Flex ml="4" justifyContent="center" alignItems="center" gap="2">
				<Text><b>{index}.</b></Text>
				<Text color="blue.400">{username}</Text>
				<Text color="gray">#{userid}</Text>
			</Flex>
			<Container maxW="600px">
				{content}
			</Container>
		</Flex>
	);
}

export default PostComment;