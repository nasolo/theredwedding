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
//actions
import { fetchAllAboutUsData } from './redux/actionsCreators' 
//styled components
import Link from '../../elements/Link';
import RouteWithProps from './components/routeWithPros';
import Container from '../../elements/container';
import LinksWrapper from './style/linksWrapper';
import NavLink from './style/navBtns';



const AboutUs = props => {


const dispatch = useDispatch()

const {
    isFetching,
    pageContent
} = useSelector(state => allPages(state), shallowEqual)

const pageRoutes = routes(pageContent)

    return (
        <Container className="h-100 d-flex" >
            <Router>
                <LinksWrapper>
                    {pageRoutes !== undefined
                        ? pageRoutes.map(route =>
                        <NavLink
                            as={Link}
                            variant="dotted"
                            text={route.page}
                            to={`${route.path}`}
                        />) : null
                    }
                </LinksWrapper>
                <Switch>
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