import React from 'react'
import Validation from '../../../../../elements/forms/validation'

const renderValidation = ({touched, error}) => {
    if(!touched) return

    return error && <Validation meta={error} className="invalid-tooltip"/>
}


export default renderValidation
