const variants = {
    enter: (direction) => {
      return {
        y: "100%",
       
        transition: {
          type: "spring", 
          stiffness: 200, 
          damping: 200,
          

      }
      };
    },
    center: {
      y: 0,
      transition: {
        type: "spring", 
        stiffness: 200, 
        damping: 200,
        mass: 10
    }
    },
    exit: (direction) => {
      return {
        scale: .8,
        transition: {
          type: "spring", 
          stiffness: 200, 
          damping: 200,
          mass: 5
      }
      };
    },
    
    
  };
  

  export default variants