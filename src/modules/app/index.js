import React from 'react'
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
import { AnimatedRoutes } from '../../components/routeTransitions'
import variants from './routeAnimations'

const AppContainer = (props) => {

    const dispatch = useDispatch()    

    const {
        home,
        gallery,
        packages,
        about,
        testimonials,
        contact,
        blog,
        direction
    } = useSelector(state => routes(state), shallowEqual)

    useEffect(() => {
        dispatch(fetchAppApi())
    },[])

    return (
        <Container className="container-fluid">
  
            
            <AnimatedRoutes exitBeforeEnter initial={false} direction={direction}>
               
                {
                    home &&
              
                    <Home 
                        contents={props.home} 
                        path={home.to} 
                        variants={variants}
                    />
              
                }

                {
                    gallery &&

                    <Gallery contents={props.gallery} path={gallery.to} variants={variants}/>

                }

                {
                    packages &&

                    <Packages  contents={props.packages} path={packages.to} variants={variants}/>

                }

                {
                    packages &&

                    <About  contents={props.about} path={about.to} variants={variants}/>

                }
                {
                    testimonials &&

                    <Testimonies contents={props.testimonies} path={testimonials.to} variants={variants}/>
                }



            </AnimatedRoutes>
        
    
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