import React, { useCallback, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    Redirect
  } from "react-router-dom";
  import routes from './components/routes'

//redux dependencies
import {useSelector, useDispatch, shallowEqual } from 'react-redux'
//selectors
import {allPages} from './redux/selectors'

//styled components

import RouteWithProps from './components/routeWithPros';
import Container from '../../elements/container';
import LinksWrapper from './style/linksWrapper';
import Link from './style/navBtns';



const AboutUs = props => {


const dispatch = useDispatch()

const {
    pageContent
} = useSelector(state => allPages(state), shallowEqual)

const pageRoutes = routes(pageContent)

    return (
        <Container 
            display="flex"
            flexDirection="column-reverse"
            className="h-100" 
        >
            <Router >
                <LinksWrapper>
                    {pageRoutes !== undefined
                        && pageRoutes.map(route =>
                        <Link
                            variant="dotted"
                            text={route.page}
                            to={`${route.path}`}
                        />)
                    }
                </LinksWrapper>
                <Switch>
                   <Redirect from="/about" to="video"/>
                {pageRoutes !== undefined
                    ? pageRoutes.map((route, i) => (
                        <RouteWithProps key={i} {...route}/>
                    )) : null 
                }
                </Switch>
            </Router>
        </Container>
    )
}

export default AboutUs