import React, { useState, useEffect } from 'react'
import { ToggleLayer } from 'react-laag';
import { AnimatePresence } from 'framer-motion';
import PopoverBox from '../popover/popover';

import TagInput from './components/tagInputBox'
import PopoverMenu from '../popoverMenu';
import Arrow from '../../elements/arrow'


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


const AutoComplete = ({autoCompleteData, userTags, handleTag, removeUserTag}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [suggetionsFound, setSuggetionsFound] = useState([])


  
    const handleKeyUp = (event, input) =>{

      const inputValue = input.current.value

      if(inputValue === null){
          return false
      }

      if( event.key === "Enter" || event.type === "click"){
          
        handleTag(inputValue)
        return input.current.value = null
      
        }
  
      const suggestionFound = autoCompleteData.reduce((prev, next)=>{ 
          if(next.indexOf(event.target.value.toLowerCase()) > -1){
              prev = [...prev, next]
          }
          return prev
      },[])

      return  setSuggetionsFound(suggestionFound !== null ? suggestionFound : [])
  } 
  
  
    return(
        <ToggleLayer
            isOpen={isOpen}
            fixed
            onOutsideClick={()=>setSuggetionsFound([])}
            placement={{ anchor: "TOP_CENTER", autoAdjust: true, triggerOffset: 4 }}
            renderLayer={({isOpen, layerProps, layerSide, arrowStyle })=>{
                return(
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
                         
                         <PopoverMenu data={suggetionsFound} onClick={handleTag}/>
                         <Arrow
                            style={{
                            ...arrowStyle,
                            backgroundcolor: 'black',
                            borderColor: 'black',
                            position: "absolute",
                            transformOrigin: "center",
                            transform: getArrowTranslate(layerSide)
                            }}/>
                     </PopoverBox>
                    )}
                 </AnimatePresence>
 
                )
            }}
        
        >
        {({ triggerRef }) => (
            
            <TagInput
                handleKeyUp={handleKeyUp}
                setSuggetionsFound ={setSuggetionsFound}
                suggetionsFound={suggetionsFound}
                suggetions={autoCompleteData}
                tags={userTags}
                setTags={handleTag}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                removeUserTag={removeUserTag}
                ref={triggerRef}
            />
      )}

            
        </ToggleLayer>
    )

}


export default AutoComplete