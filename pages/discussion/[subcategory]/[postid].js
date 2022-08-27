import {useRouter} from 'next/router';
import Link from 'next/link' ;
import { Fragment } from 'react';

function DetailPage(){
    const router=useRouter();

    console.log(router.query.postid);
    return <Fragment>
        <h1> direct by post index</h1>
        <Link href='/'>back to Home</Link>
    </Fragment>
    
}

export default DetailPage;
