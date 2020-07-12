import styled from "styled-components"
import Box from "../Box"
import css from '@styled-system/css'
const handleColumns = (props) =>{

    let cols = ["row"]
    const defaultValues = ["row-cols-3"]
    const columns = ["md", "sm", "lg", "xl"]
    
    //get props keys
    const keys = Object.keys(props)

    ///filter keys for bootstrap keys
    const findCol = keys.filter(x => columns.includes(x))

    const sanitize = val =>{
        const parsed = parseInt(val)
        return !isNaN(parsed)
    }

    //if no bootstrap keys found end function
    if(props.cols){
        cols = [...cols, `row-cols-${props.cols}`]
    }

    if(findCol.length < 1){

        //add default cols
        cols = [...cols, ...defaultValues]
        return cols.join(" ").toString()

    }else{
        Object.keys(findCol).forEach(x =>{
            sanitize(props[keys[x]]) && cols.push(`row-cols-${keys[x]}-${props[keys[x]]}`)
        })
    }

    return  cols.join(" ").toString()
    
}



const mediaQueries = ({theme}) =>css({
    [theme.mediaQueries.lg]:{
        maxWidth: "70%"
    }
})

const Deck = styled(Box).attrs(props =>({
    className: handleColumns(props)
}))`

   
    margin: auto;
    justify-content: center;
    
    
 
`


export default Deck