import styled from "styled-components"
import Box from "../../../../../elements/Box"

const PackagePageWrapper = styled(Box).attrs(props =>({
className: "package-page-container container"
}))`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10rem auto 5rem auto;
`


export default PackagePageWrapper