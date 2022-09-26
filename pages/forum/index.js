import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

//Box, Grid etc. is div, can't use "%"
const index = () => {
    return (
        <Grid
            padding={2}
            templateAreas={`"banner banner banner"
                  "showcase showcase media"
                  "showcase showcase media"`}
            gridTemplateRows={'200px 1fr 550px'}
            gridTemplateColumns={'1100px 1fr 400px'}

            gap='2'
            color='blackAlpha.700'
            fontWeight='bold'
            alignItems={'stretch'
            }
        >
        
            <GridItem pl='2' bg='pink.300' area={'banner'}>
                banner
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'showcase'}>
                showcase
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'media'}>
                media player
            </GridItem>
        </Grid>
    )
}

export default index