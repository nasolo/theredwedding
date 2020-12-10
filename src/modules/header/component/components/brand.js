import React from 'react'
import Navbar from '../../../../elements/navbar/navbar'


const Brand = ({to, src, alt}) => (

    <Navbar.Brand href={to} >
        <Navbar.Logo src={src} alt={alt}/>
    </Navbar.Brand>

)
                
export default Brand