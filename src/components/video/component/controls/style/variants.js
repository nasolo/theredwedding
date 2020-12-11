import { display } from "styled-system"

export const volumeControlVariants = {
    visible:{
        opacity: 1,
        width: "100%",
        display: "flex",
        transition: { delay: .3, duration: .5, type: "tween" }
    },
    hidden: {
        opacity: 0,
        width: "0%",
        transition:{ duration: .5, type: "tween" },
        transitionEnd:{display: "none"} 
      
    }
}

export const toolsVariants = {
    visible:{
        opacity: 1,
        
    },
    hidden: {
        opacity: 0,

     
        
        
      
    }
}