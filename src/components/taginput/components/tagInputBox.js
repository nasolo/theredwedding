import React, { useEffect, useRef, useState } from 'react'

import TagsInput from '../style/tagInput'





const TagInput = React.forwardRef(function TagInput({
    tags, 
    onClick, 
    setTags, 
    suggetions, 
    suggetionsFound, 
    setSuggetionsFound, 
    setIsOpen, 
    isOpen, 
    removeUserTag,
    handleKeyUp
},ref){
    
const input = useRef("")
const SearchTagIcom = useRef("")

    useEffect(() => {
        const userInput = input.current.value
         userInput === "" && setIsOpen(false)
         suggetionsFound.length < 1 && setIsOpen(false)
         userInput.length < 2 && setIsOpen(false)

         

         userInput.length > 1 & isOpen === false & suggetionsFound.length > 0 & suggetionsFound !== [] && setIsOpen(true)

    }, [input.current.value, suggetionsFound, setIsOpen, isOpen])

  
    return(

        <TagsInput className="tags-input" onClick={onClick} ref={ref}>
            <TagsInput.Tags id="tags">
                {tags.map((tag, index)=>(
                    tag.length > 0 && <TagsInput.TagItem className="tag" key={index}>
                    <TagsInput.TagTitle className="tag-title">
                        {tag}
                    </TagsInput.TagTitle>
                    <TagsInput.CloseIcon className="tag-close-icon"
                        onClick={()=> removeUserTag(tag)}
                    >
                            x
                    </TagsInput.CloseIcon>
                    </TagsInput.TagItem>
                ))}
            </TagsInput.Tags>
            
            <TagsInput.Input
            ref={input}
            onKeyUp={(event)=>handleKeyUp(event, input)} 
            placeholder="Press Enter to add tags"
            />
            <TagsInput.SearchIcon ref={SearchTagIcom} icon="magnifyingglass" onClick={(event)=>handleKeyUp(event, input)}/>
        </TagsInput>
    )
})

export default TagInput