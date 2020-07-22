import Span from '../../../elements/span'
import styled from 'styled-components'
import css from '@styled-system/css'
import Box from '../../../elements/Box'


const mediaQueries =({mediaQueries})=>css({
    [mediaQueries.lg]: {
        flexDirection: 'row', 
        gap: "1rem",
    },
    [mediaQueries.sm]: {
        [`p`]: {
            fontSize: ".75rem",

    }
},
    [mediaQueries.md]: {
        [`p`]: {
            fontSize: "1rem !important",

    }
}
})

const Wrapper = styled(Box).attrs({
    as: 'span',
    className: "shareBoxWrapper"
})`
    margin: auto;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    ${({theme}) => mediaQueries(theme)}
    

   
     p{
        font-weight: 600;
        text-align: center;
        font-size: .65em;
        margin-top: auto !important;
        margin-bottom: auto !important;
        
    }
`

export default Wrapper