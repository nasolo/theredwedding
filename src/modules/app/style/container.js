import styled from "styled-components";
import Box from "../../../elements/Box";

const Container = styled(Box)`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(calc(100vh), auto);
    grid-gap: 0;
    padding: 0;
    margin: 0;
    z-index: 1;
    position: relative;
    background-color: black;

    .home{
        grid-column: 1/13;
        grid-row: 1;
        position: relative;

    }
    .gallery{
        grid-column: 1/13;
        grid-row: 1;
        position: relative;
        display: flex;

    }
    .packages{
        grid-column: 1/13;
        grid-row: 1; 
    }
    .about{
        grid-column: 1/13;
        grid-row: 1;

    }

    .tesimonials{
        grid-column: 1/13;
        grid-row: 1;

    }
    .contact{
        grid-column: 1/13;
        grid-row: 1;

    }
    .chat{
        grid-column: 1/13;
        grid-row: 1;

    }
    .terms {
        grid-column: 1/13;
        grid-row: 1;
    }
    .blog {
        grid-column: 1/13;
        grid-row: 1;
    }
`


export default Container