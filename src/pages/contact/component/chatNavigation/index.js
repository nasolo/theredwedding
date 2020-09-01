import React from 'react'
import LinkWrapper from './style/navigationWrapper'
import Row from '../../../../elements/row'
import Column from './style/textCol'
import Link from './style/navLink'
import Icon from '../../../../components/icon'

const ChatNavigation = props => {
    return (
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
    )
}

export default ChatNavigation