import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner =({purpose,title1,title2,des1,des2,linkName,buttonText,imageUrl })=>(
<Flex flexWrap="wrap" justifyContent='center' alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"/>  
    <Box p='5'>
        <Text color="gray.500" fontSize='sm' fontWeight = 'medium'>{purpose}</Text>
        <Text fontSize='3xl' fontWeight = 'bold'>{title1}<br/>{title2}</Text>
        <Text fontSize='lg' padding="3" fontWeight = 'medium'>{des1}<br/>{des2}</Text>
        <Button size="xl" bg="blue.300" color='white'>
            <Link href={linkName}>{buttonText}</Link>
        </Button>
    </Box>
</Flex>
)

export default function venueHome(){
    return <div>
    <h1>Venue Page</h1>

        <Banner 
        purpose='rent'
        title1="Rent for"
        title2="Everyone"
        des1="explore"
        des2="and more"
        buttonText="explore renting"
        linkName="/search?purpose=for-rent"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Banner
        purpose='event'
        title1='Hold Event'
        title2='Here'
        des1=' Explore from Apartments, land, builder floors,'
        des2=' villas and more'
        buttonText='Explore venue'
         linkName='/search?purpose=for-sale'
         imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />

    </div>
}