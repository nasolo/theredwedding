import styled, { css } from 'styled-components'
import Box from '../../../elements/Box'

const mediaQueries = ({theme}) => css`

    ${theme.mediaQueries.lg}{
        flex-direction: row;
    }

    .icon {
        ${theme.mediaQueries.lg}{
            height: 2rem;
            width: 3rem;
        }
    }

    .heading{
        ${theme.mediaQueries.lg}{
            font-size: 1rem;
        }
    }

    .icon.Drones{
        ${theme.mediaQueries.lg}{
            height: 1rem;
            width: 4rem;
        }
    }


`


const Media = styled(Box).attrs(props => ({
    className: 'media'
}))`

    flex-direction: column;
    justify-content: space-between;
    display: flex;
    flex-wrap: nowrap;
    &:hover{
        cursor: pointer;
    }
    .icon{
        height: 1rem;
        width: 3rem;
        margin: auto;
    }

    .icon.Drones{
            height: .75rem;
            width: 2em;
    }
    .heading{
        white-space: nowrap;
        font-size: .50rem;
        
    }
    ${mediaQueries}
`

export default Media


/*
    .icon{
        height: 1.25rem;
        width: 2rem; 
    }

    
    */