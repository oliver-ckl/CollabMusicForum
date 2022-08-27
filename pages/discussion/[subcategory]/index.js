import {useRouter} from 'next/router';

function IndexPage(){
    const router=useRouter();

    console.log(router.query.subcategory);
    return <h1> category index</h1>
}

export default IndexPage;