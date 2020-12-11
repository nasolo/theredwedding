import styled from "styled-components"
import Box from "../../../elements/Box"
import React from "react"

const ToggleWrapper = styled(Box).attrs(props =>({
    className: `popover-wrapper`
}))``

const Wrapper = React.forwardRef(
    ({className, children, as = "span", ...props}, ref) =>{
        return(
            <ToggleWrapper
                className={className}
                as={as}
                ref={ref}
                {...props}
            >
                {children}
            </ToggleWrapper>
        )
    }
)


export default Wrapper