import React, { useState, useEffect } from 'react'
import Row from '../../../../elements/row'
import Col from '../../../../elements/col'
import MediaBox from '../../../../components/mediaBox'
import { services } from '../../redux/selectors'
import { useSelector, shallowEqual } from 'react-redux'

import Flexbox from '../../../../elements/flexbox'
import Heading from '../../../../elements/heading'
import P from '../../../../elements/p'


const Services = ({input, ...rest}) => {

    const {onChange} = input

   const serviceOptions = useSelector(state => services(state), shallowEqual)
   const [selectedIds, setSelectedIds] = useState([])

   const isActive = (id) => selectedIds.includes(id)

   const handleOnClick = id =>{

        if(id === undefined) return
        
        let filterIds = selectedIds

       if(!isActive(id)){
            filterIds.push(id)
       } else {
            filterIds = filterIds.filter(filterId => filterId !== id)
       }
       return setSelectedIds([...filterIds])
   }

   
useEffect(() => {

    if(!onChange) return
    let filterServices = []

    serviceOptions.forEach(service => isActive(service.id) && filterServices.push(service.text))

    console.log(filterServices)
    
    return onChange([...filterServices])

}, [selectedIds])


return (
  <>
        <Col cols={12} className="col-lg-3">
           <Row className="no-gutters">
                <Col cols={6} className="col-lg-12 ">
                    <Heading text="Select Services needed:" className="text-left d-block"/>
                </Col>
           
                <Col cols={6} className="col-lg-12 text-left">
                    <P fontSize=".75rem" className="d-none d-lg-block"> (You can specify in more detail in the details box)</P>
                    <P fontSize=".75rem" className="d-lg-none"> (use details box to explain more.)</P>
                </Col>
           </Row>
        </Col>
        <Col cols={12} className="col-lg-9">
            <Flexbox
                key="services-page-flexbox"
                justifyContent="space-between"
            >
                {serviceOptions.map(service => 
                    <MediaBox
                        {...rest}
                        {...input}
                        onClick={handleOnClick}
                        icon={service.icon} 
                        heading={service.text} 
                        key={service.id} 
                        id={service.id}
                        active={isActive(service.id)}
                    />)
                }
            </Flexbox>
        </Col>
    </>
   
)}



export default Services