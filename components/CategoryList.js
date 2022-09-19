import Link from 'next/link';
import { Grid } from '@chakra-ui/react';

import CategoryItem from './CategoryItem';

function CategoryList({ categoryList }) {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={50} p='50px' maxW='1450px'>
        {
            categoryList.map((item) => (
                <CategoryItem
                    title={item.title}
                    des={item.des}
                    href={item.href}
                    imgUrl={item.imgUrl}
                    key={item.id}
                />
            ))
        }
        </Grid>
    );
}
export default CategoryList;
