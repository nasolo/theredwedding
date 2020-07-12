import React from 'react'
import Modal from 'react-bootstrap/Modal'

const CenteredModal = ({children, onHide, ...rest}) => {
    return (
        <Modal
            {...rest}
            onHide={onHide}
            aria-labelledby="contained-modal-centered"
            size="lg"
            >
                {children}
            </Modal>
    )
}


export default CenteredModal