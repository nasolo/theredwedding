import React from 'react'
import styled from 'styled-components'
import ComposeBoxHelper from '../../utils/style/composeBox'

const bsPrefix = 'jumbotron'

const JumbotronRef = ({children, className}) => (
    <div className={className}>
        {children}
    </div>
)


const Jumbotron = styled(JumbotronRef).attrs(props => ({
    className: props.fluid ? `${bsPrefix}-fluid` : bsPrefix
}))`

${ComposeBoxHelper}


`

export default Jumbotron