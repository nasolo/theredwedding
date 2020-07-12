import { ToggleLayer } from "react-laag";
import { AnimatePresence } from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";
import React, { useState } from "react";
import PopoverBox from './popover'

const Arrow = props => (
    <svg width={14} height={6} {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="black"
          d="M7 .07v1.428l-5.55 5.5L0 6.982zM7 .07v1.428l5.55 5.5L14 6.982z"
        />
        <path fill="black" d="M1.45 7L7 1.498 12.55 7z" />
      </g>
    </svg>
  );

function getArrowTranslate(layerSide) {
    let x = "-50%";
    let y = 0;
  
    const OFFSET = 3.5;
    if (layerSide === "left") {
      x = -OFFSET + "px";
      y = "-50%";
    } else if (layerSide === "right") {
      x = OFFSET + "px";
      y = "-50%";
    }
  
    const rotation = {
      top: 180,
      right: -90,
      left: 90,
      bottom: 0
    };
  
    // @ts-ignore
    return `translate(${x}, ${y}) rotate(${rotation[layerSide]}deg)`;
  }

  const outTransform = {
    top: { x: 0, y: -20 },
    left: { x: -20, y: 0 },
    bottom: { x: 0, y: 20 },
    right: { x: 20, y: 0 }
  };


const Popover = props => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <ToggleLayer
        ResizeObserver={ResizeObserver}
        isOpen={isOpen}
        onOutsideClick={()=> toggle()}
        closeOnDisappear="partial"
        placement={{
                    anchor: "TOP_CENTER",
                    autoAdjust: true,
                    snapToAnchor: false,
                    triggerOffset: 12,
                    scrollOffset: 16,
                    preferX: "RIGHT"
                }}
                renderLayer={({ isOpen, layerProps, layerSide, arrowStyle }) => (
                <AnimatePresence>
                   {isOpen && (
                    <PopoverBox
                    ref={layerProps.ref}
                    style={{
                        ...layerProps.style, 
                        
                        
                      }}
                      initial={{ opacity: 0, scale: 0.85, ...outTransform[layerSide] }} // animate from
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} // animate to
                        // @ts-ignore
                        exit={{ opacity: 0, scale: 0.85, ...outTransform[layerSide] }} // animate exit
                        transition={{
                            type: "spring",
                            stiffness: 800,
                            damping: 35
                     }}
                    
                    >
                            {props.data}
                            <Arrow
                            style={{
                            ...arrowStyle,
                            backgroundcolor: 'black',
                            borderColor: 'black',
                            position: "absolute",
                            transformOrigin: "center",
                            transform: getArrowTranslate(layerSide)
                            }}
                    />
                    </PopoverBox>
                   )}
                </AnimatePresence>

                  )}
    >


       
        {({ triggerRef, isOpen }) => (

          

           <span ref={triggerRef} onClick = {toggle}>
             {props.children}
           </span>

            
        )}

        </ToggleLayer>

    


    )
}


export default Popover