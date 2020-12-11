import React from 'react'
import Icon from '../icon'
import PropTypes from 'prop-types';
import Popover from '../popover';


const RenderIcon = ({icon, popOverComponent}) => (
    <Popover data={popOverComponent}>
          <Icon icon={icon} height="2rem" pr={10} fill="rgba(204,204,204,.7)"/>
    </Popover>
)

const Favourite = ({
    icon ="star",
    popOverData="Select star to favorite images you love"
}) =>{

    return (
        <RenderIcon icon={icon} popOverComponent={popOverData}/>
    )

}



export default Favourite