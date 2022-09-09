import { Box, GridItem, Text, Container, Image, Divider, Flex, IconButton } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

function CategoryItem({ imgUrl, title, des, href }) {
    const router = useRouter();

    return (
        <GridItem w='400px' h='320px' bg='white' boxShadow='xl' borderRadius='2%' color='black'>
            <Box m={5}>
                <Image src={imgUrl} maxW='400px' maxH='150px'/>
                <Divider bg='black' mb='5px'/>
                <Text fontSize='xl' fontWeight='bold'>{title}</Text>
                <Text fontSize='md' h='50px' noOfLines={[1,2]}>{des}</Text>
                <Flex mt={4} justifyContent='right' alignItems='center'>
                    <IconButton
                        icon={<ArrowForwardIcon/>}
                        onClick={() => router.push(href)}
                        _hover={{ bg: 'gray.200' }}
                    />
                </Flex>
            </Box>
        </GridItem>
    );
}
export default CategoryItem;
