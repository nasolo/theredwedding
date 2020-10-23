import styled, { css } from 'styled-components'
import Jumbotron from '../../../elements/jumbotron'



const jombotronMediaQueries = ({theme}) =>css`
    ${theme.mediaQueries.lg}{

        margin: auto;
        max-width: 70%;
        font-size: 1rem;

    }
`

const TermsJumbotron = styled(Jumbotron).attrs( props => ({
    className: 'terms-jumbotron'
}))`
    overflow: auto;
    font-size: .75rem;
    max-height: 70vh !important;
    margin-bottom: 0;
    padding: 2rem 2rem;
    ${jombotronMediaQueries};
`


export default TermsJumbotron