export const motionCofig = ( isOpen, variants) => ({
  custom: isOpen,
  animate: isOpen ? "open" : "closed",
  initial: "initial",
  enter:"open",
  exit:"closed",
  variants: {variants}
})

export const parent = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const siblings = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    },
    initial:{
        y: 50,
        opacity: 0
    }
  };


  export const sideDraweVarients = {
    open: {
        x: -1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
        display: "initial",
      },
      initial: {
        x: "100%",
        opacity: 0
      },
      closed: {
        x: "100%",
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 40,
          delay: .7
         
        },
        transitionEnd: {
            display: "none",
          }
      }
    }



