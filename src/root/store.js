import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {reducer as form } from 'redux-form'
//Reducers
import rootReducer from './rootReducer'
import header from '../pages/home/redux/reducer';
import gallery from '../pages/gallery/redux/reducers'
import videoPlayer from '../components/video/reducer';
import packages from '../pages/packages/redux/reducer'
import aboutUs from '../pages/about/redux/reducers'
import testimonials from '../pages/testimonial/redux/reducers'
import navigation from '../modules/header/redux/reducer'

//Custom Middlewares
import apiMiddleware from './middlewares/api';



const reducer = {
    header,
    gallery,
    rootReducer,
    videoPlayer,
    packages,
    aboutUs,
    testimonials,
    navigation,
    form
    
}


const configureAppStore = (preloadedState) =>{
    const store = configureStore({
        reducer,
        middleware: [apiMiddleware, thunk, ...getDefaultMiddleware()],
        preloadedState,
    })
    return store
}




export default configureAppStore