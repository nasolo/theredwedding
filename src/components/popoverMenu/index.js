import React from 'react'
import styled from 'styled-components'
import Box from '../../elements/Box'
import Icon from '../icon'


 const MenuList = styled(Box).attrs(props => ({
     as: 'ul'
 }))`
 
    list-style: none;
    padding: 0;
    text-align: left;

 `


 const MenuListItem = styled(Box).attrs(props => ({
    as: 'li'
}))`
line-height: 2em;

`

const Menulinks = styled(Box).attrs(props =>({
    as: 'button',
    className: 'autosuggetionbtn btn'
}))`

    z-index: 200;
    color: white;
    font-weight: 700;
    cursor: pointer;

`
const PopoverMenu = ({data, onClick}) =>{

    return(
        <MenuList>
            {data.map((data) => 
            (<MenuListItem>
                <Menulinks onClick={()=>onClick(data.text === undefined ? data : data.text)}>
                    {data.icon && <Icon icon={data.icon}/>}
                    {data.text && data.text}
                    {data}
                </Menulinks>
            </MenuListItem>)
            )}
        </MenuList>
    )

}

export default PopoverMenu