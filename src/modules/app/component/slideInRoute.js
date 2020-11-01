import React from 'react'
import { Route } from 'react-router-dom';
import Frame from '../../../elements/Frame';

function SlideInRoute({ component, variants, ...rest }) {
    return (
      <Route
        {...rest}
        render={routeProps => (
        <Frame 
            className="post"
            {...rest}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {component}
          </Frame>
        )}
      />
    );
  }
  

  export default SlideInRoute