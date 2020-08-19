import styled from "styled-components"
import Box from "../Box"



const handleColumns = (props) =>{

    let cols = ["col"]
  
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
    if(props.cols || props.col){
        cols = [...cols, `col-${props.cols}`]
    }

    if(findCol.length < 1){

        //add default cols
        return cols.join(" ").toString()

    }else{
        Object.keys(findCol).forEach(x =>{
            sanitize(props[keys[x]]) && cols.push(`col-${findCol[x]}-${props[findCol[x]]}`)
        })
    }

    return  cols.join(" ").toString()
    
}




const Col = styled(Box).attrs(props =>({
    as: props.as || "div",
    className: `${handleColumns(props)}`
}))``


export default Col