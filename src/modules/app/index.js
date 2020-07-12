import React from 'react'
import { 
    BrowserRouter as Router,
    Redirect,
    useParams
} from "react-router-dom";
import Container from './style/container'
import Home from './style/home'
import Gallery from './style/gallery'
import Packages from './style/packages'
import About from './style/about'
import { routes } from './redux/selectors'

import Testimonies from './style/testimonials'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAppApi } from './redux/actionCreators'
import { RouteTransition, AnimatedRoutes } from '../../components/routeTransitions'
import { direction } from '../../pages/home/redux/actions';

const AppContainer = (props) => {

    const dispatch = useDispatch()    

    const {
        home,
        gallery,
        packages,
        about,
        testimonies,
        contact,
        blog,
        direction
    } = useSelector(state => routes(state), shallowEqual)

    useEffect(() => {
        dispatch(fetchAppApi())
    },[])

    return (
        <Container className="container-fluid">
        <Router>
            <Redirect from="/" to="/home"/>
            <AnimatedRoutes exitBeforeEnter initial={false} direction={direction}>
                { home &&
                <RouteTransition exact direction={direction} path={`${home.to}`} key={home.id}>
                    <Home contents={props.home}/>
                </RouteTransition>
                }
            </AnimatedRoutes>
        
        </Router>
        </Container>
    )
}

export default AppContainer

/*
<Container className="container-fluid">
                <Header contents={props.header}/>
                <Gallery contents={props.gallery} />
                <Packages  contents={props.packages} />
                <About contents={props.aboutUs}/>
                <Testimonies contents={props.testimonies} />
</Container>

        */