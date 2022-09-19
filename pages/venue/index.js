import Link from 'next/link';
import Image from 'next/image';
import VenueBanner from '@components/VenueBanner';

function IndexPage() {
    return (
        <>
            <h1>Venue Page</h1>
            <VenueBanner
                purpose="rent"
                title1="Rent for"
                title2="Everyone"
                des1="explore asdadasdsadasdasd"
                des2="and moreasdadas"
                buttonText="explore renting"
                linkName="/search?purpose=for-rent"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />
            <VenueBanner
                purpose="event"
                title1="Hold Event"
                title2="Here"
                des1=" Explore from Apartments, land, builder floors,"
                des2=" villas and more"
                buttonText="Explore venue"
                linkName="/search?purpose=for-sale"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
            />
            <VenueBanner
                purpose="Test"
                title1="Hold Event"
                title2="Here"
                des1=" Explore from Apartments, land, builder floors,"
                des2=" villas and more"
                buttonText="Explore venue"
                linkName="/search?purpose=for-sale"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
            />
        </>
    );
}

export default IndexPage;

