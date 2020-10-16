import React from 'react'
import LinkWrapper from './style/navigationWrapper'
import Row from '../../../../elements/row'
import Column from './style/textCol'
import Link from './style/navLink'
import Icon from '../../../../components/icon'
import Container from '../../../../elements/container'

const ChatNavigation = props => {
    return (
    <Container 
        fluid 
        position="relative"
        margin="10rem auto 0"
        
    >
        <LinkWrapper>
            <Row className="h-100">
                <Column className="quote">
                    <Link>
                        <span>GET A QUOTE </span>now
                    </Link>
                </Column>
                <Column className="chat" active> 
                    <Link>
                        <Icon icon="person"/>
                        <span>CHAT </span>live
                    </Link>
                </Column>
            </Row>
        </LinkWrapper>
    </Container> 
    )
}

export default ChatNavigation