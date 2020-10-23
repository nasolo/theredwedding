import styled, { css } from "styled-components";
import ContentWrapper  from "../../contact/style/contentWrapper";


const backgroundMediaQueries = ({theme}) =>css`

    ${theme.mediaQueries.lg}{
        &&::before{
            background: linear-gradient(180deg, rgba(184,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
    }

`

const ContentContainer = styled(ContentWrapper).attrs(props => ({
    className: "terms-content-wrapper"
}))`

   text-align: center;
   margin-bottom: 0;
   
   &&::before{
       background: none;
   }
   ${backgroundMediaQueries}

`


export default ContentContainer