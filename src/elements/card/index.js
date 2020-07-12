import Box from '../../elements/Box'
import Body from './body'
import CardImg from './img'
import CardLink from './link'
import Subtitle from './subtitle'
import Text from './text'
import Title from './title'
import Deck from './cardDeck'
import styled from 'styled-components'
import Wrapper from './wrapper'
import css from '@styled-system/css'


const mediaQueries = ({theme}) => css({
    [theme.mediaQueries.sm]: {
        flexBasis: "25%"
    }
})


const Card = styled(Box).attrs(props =>({
    className: "card bg-transparent"
}))`

    
   
  
`

Card.Body = Body
Card.Img = CardImg
Card.Link = CardLink
Card.Subtitle = Subtitle
Card.Text = Text
Card.Title = Title
Card.Deck = Deck
Card.Wrapper = Wrapper

export default Card