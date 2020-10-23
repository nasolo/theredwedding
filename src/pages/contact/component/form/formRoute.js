import React from 'react'

import {      
    Redirect,
    Route,
} from "react-router-dom";

const FormRoute = ({children, formSubmitSucceeded, ...rest}) => {

    return (
        <Route>
            {formSubmitSucceeded ? <Redirect to="/terms"/> : children}
        </Route>
    )
}

export default FormRoute