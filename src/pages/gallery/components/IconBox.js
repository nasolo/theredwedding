
import React from 'react'

import Icon from '../../icon'
import IconBoxWrapper from '../../../elements/span'
import IconBoxText from '../../../elements/p'


const IconBox = ({icon, text}) => (
    <IconBoxWrapper
        className="row"
    >
            <Icon icon={icon} width="1rem" className="col-lg-6"/>
            <IconBoxText className="col-lg-6" fontSize={12}>
            {text}
        </IconBoxText>
    </IconBoxWrapper>
)


export default IconBox