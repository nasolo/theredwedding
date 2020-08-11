
const sliderTransition={
    type: "spring", stiffness: 300, damping: 200, mass: 10,
    opacity: { duration: .5 }
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
  
  