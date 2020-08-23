import React from 'react'
import Indicator from '../../../../elements/indicator'


const Indicators = ({quotes, activeQuote, dispatch, ...rest}) => {

    const shouldRenderQuotes = quotes !== undefined

    

    const { id } = activeQuote

    const handleClick = (active, id) => !active && console.log(id)

    return (
        <>
            {shouldRenderQuotes && quotes.map((quote) =>{ 
                const active = id === quote.id
                return ( 
                    <Indicator 
                        key={quote.id}
                        active={active}
                        onClick={()=>handleClick(active, quote.id)}
                        {...rest}
                    />
                )
            })}
        </>
    )


}

export default Indicators