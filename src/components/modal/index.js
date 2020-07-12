import React from  'react'
import { nanoid } from '@reduxjs/toolkit'
import CenteredModal from './component/modal';


const ViewModal = ({type, children, show, onHide, ...rest}) => {

 
    return (
        <React.Suspense fallback='loading views'>
            <CenteredModal
                show={show}
                onHide={onHide}
                key={nanoid()}
                {...rest}
            >
                {children}
            </CenteredModal>
        </React.Suspense>
    )
}

export default ViewModal