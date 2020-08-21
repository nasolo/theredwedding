import React from 'react'
import Indicator from '../../../../elements/indicator'


const Indicators = ({items, activeQuote, setActiveIndex, ...rest}) => {

    const shouldRenderQuotes = items !== undefined

    const quotes = shouldRenderQuotes && items.map(quote => quote.props)

    const { id } = activeQuote

    const handleClick = (active, index) => !active && setActiveIndex(index)

    return (
        <>
            {shouldRenderQuotes && quotes.map((quote) =>{ 
                const active = id === quote.id
                return ( 
                    <Indicator 
                        key={quote.id}
                        active={active}
                        onClick={()=>handleClick(active, quote.position)}
                        {...rest}
                    />
                )
            })}
        </>
    )


}

export default Indicators