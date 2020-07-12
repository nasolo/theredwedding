import transfrom from 'lodash/transform'
import  { mediaQueries }  from '../bootstrap/themes/mainTheme'
   
function createMediaQueries(result, value, key){
    
        const queries = Object.keys(mediaQueries)

        if(!queries.includes(key)){
            result[`${key}_not_found`]= {...value}
        }
        
        if(queries.includes(key)){

             result[`${mediaQueries[key]}`] = {...value}
        
        }

        return result
    }

const handleMediaQueries = (queries) => {
   
    console.log(mediaQueries)
    if(mediaQueries === undefined || !mediaQueries instanceof Object){
       
        return null
    }

    if(queries === undefined || !queries instanceof Object){
        return null
    }


    

    return transfrom(queries, createMediaQueries, {})
}


export default handleMediaQueries
