import React from 'react';
import Nav from '../../../../../elements/nav'
import FooterRight from '../style/footerRight';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Description from '../style/decription';

const RightSide = ({details, id}) =>{

const links = details !== undefined ? Object.keys(details) : null

    return (
        <FooterRight className="p-0">
            <Router basename={`/packages`}>
                <Nav borderBottom="1px white dotted" padding="1rem">
                    {links.map((link, i)=>(
                        <Nav.Item>
                            <Nav.Link 
                                link={link} 
                                to={`/${link}/${id}`} 
                                color={"rgba(253,253,253,.5)"}
                                activeStyle={{
                                    color: 'white',
                                    border: 0
                                }}
                                >
                                {link}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Switch>
                    
                    {links.map((link, i)=>(
                        <Route
                            path={`/${link}/${id}`}
                            render={()=> <Description text={details[link]} padding="1rem"/>}
                        />
                    ))}
                </Switch>
            </Router>
        </FooterRight>
    )
}

export default RightSide