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

const RightSide = ({details}) =>{

const links = details !== undefined ? Object.keys(details) : null

    return (
        <FooterRight>
            <Router>
                <Nav>
                    {links.map((link, i)=>(
                        <Nav.Item>
                            <Nav.Link link={link} to={`/${link}`}/>
                        </Nav.Item>
                    ))}
                </Nav>
                <Switch>
                <Redirect from='/' path={`/${details[0]}`}/>
                    {links.map((link, i)=>(
                        <Route
                            path={`/${link}`}
                            render={()=> <Description text={details[link]}/>}
                        />
                    ))}
                </Switch>
            </Router>
        </FooterRight>
    )
}

export default RightSide