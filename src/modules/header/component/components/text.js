import React from 'react'
import Navbar from '../../../../elements/navbar/navbar'


const NavText = ({text, ...rest}) => (
    <Navbar.Text {...rest}>
        {text}
    </Navbar.Text>
)


export default NavText