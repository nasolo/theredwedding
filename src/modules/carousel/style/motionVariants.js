
const sliderTransition={
  type: "spring", stiffness: 300, damping: 200, mass: 10,
  opacity: { duration: .5 }
}



export const mobileFooterVariants = {

    container:{
        hidden:{
            maxHeight: "5%"
        },

        visible: {
        maxHeight: "100%",
        transition:{
            duration: 5,
            type: "spring",
            stiffness: 500,
            damping: 10,
            
           
        }
           
        }
    },
    items:{
        visible:{
            opacity: 1,
            
          
        },
        hidden: {
            opacity: 0,
            delay: 5
            
        }
    }
}

export const sliderVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
        transition: {
          ...sliderTransition
        }
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        ...sliderTransition
      }
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? "-100%" : "100%",
        opacity: 0,
        transition: {
          ...sliderTransition
        }
      };
    }
  };

