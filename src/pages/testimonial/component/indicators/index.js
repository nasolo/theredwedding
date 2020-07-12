import React from 'react'
import Indicator from '../../../../elements/indicator'


const Indicators = ({quotes, activeId, onClick, ...rest}) => {

    const isActive = (id) => id === activeId
    const handleClick = (id) => !isActive(id) && onClick(id)

    return (
        <>
            {quotes.map(quote => 
                <Indicator 
                key={quote.id}
                active={isActive(quote.id)}
                onClick={()=>handleClick(quote)}
                {...rest}
            />)}
        </>
    )


}

export default Indicators