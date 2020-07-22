import styled from "styled-components"
import Box from "../../../../elements/Box"
import { motion } from "framer-motion"


export const Wrapper = styled(Box).attrs(props =>({
   as: motion.div,
    className: "player-btn-wrapper"
}))`
    margin: auto;
    height: 100%;
    width: 100%;
    max-height: 12rem;
    max-width: 12rem;
    align-self: center;
    z-index: 100;

`


export const PlayContainer = styled(Box).attrs(props =>({
    className: "playBtn-container"
}))`

    height: 100%;
    width: 100%;
    
    background-color: ${({theme}) => theme.colors.blacks[7] || "rgba(0, 0, 0, 0.3)"};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const PlayIcon = styled(Box).attrs(props =>({
    className: "react-player__play-icon"
}))`

    border-style: solid;
    border-width: 16px 0px 16px 26px;
    border-color: transparent transparent transparent white;
    margin-left: 7px;


`