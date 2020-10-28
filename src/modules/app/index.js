import React from 'react'
import Container from './style/container'
import Home from './style/home'
import Gallery from './style/gallery'
import Packages from './style/packages'
import About from './style/about'
import Contact from './style/contact'
import Info from './style/info'
import Blog from './style/blog'


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
        terms,

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
                {

                    contact &&

                    <Contact contents={props.contact} path={contact.to} variants={variants}/>
                }
                {
                    terms &&

                    <Info contents={props.info} path={terms.to} variants={variants} />

                }   
                   
                {
                   
                    blog && 

                    <Blog contents={props.blog} path={blog.to} variants={variants} />

                }

            </AnimatedRoutes>
        
    
        </Container>
    )
}

export default AppContainer