import React from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import Frame from '../../../elements/Frame';
import SlideInRoute from '../component/slideInRoute';


const Post = ({children, contents: Contents, variants, path, ...rest}) => {



  

    const match = useRouteMatch({
        path: path,
        strict: true,
        sensitive: true
      });


    return (
        
            <SlideInRoute {...match} component={Contents} variants={variants}/>
    )

       
}

export default Post



