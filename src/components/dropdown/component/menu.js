import React, { useState, useEffect } from "react"
import Icon from '../../icon'
import Wrapper from "../style/wrapper"
import Header from "../style/header"
import List from "../style/list"
import ListItem from "../style/listItem"
import ButtonWrapper from "../style/buttonWrapper"
import DropdownWrapper from "../style/dropdownWrapper"
import ButtonLabel from "../style/buttonLabel"

const optionsStateObject = (list) => {
    if(!list instanceof Array) return

    return list.map((item, i) => ({
          id: i,
          title: item,
          selected: false,
          key: item.split(' ').join('-')
    }))
}

const defaultIntValues = ['add an option']

const defaultTitle = "Select an option"
const defaultSelectedPrefix = "Selected options:"






const DropDownMenu = ({list, header, onChange, className, prefix, ...rest}) =>{


    const [state, setState] = useState({
        isOpen: false,
        options: [],
        title: null,
        selectedIds: [],
        selectedOptions: []
    })

    const { isOpen, options, title, selectedIds, selectedOptions } = state

    const handleToggle = () => {
        return setState({
            ...state,
            isOpen: !isOpen
        })
    }

    const getSelectedOptionsTitles = selectedOptions.map(values => values.title)

    const handleSelectedListItems = (id) => {
        
        let selectedIdsToAdd = selectedIds
        const isSelected = (id) => selectedIdsToAdd.includes(id)
        
        //if slected item is selectedIds state return remove else add

        if(isSelected(id)){
            selectedIdsToAdd = selectedIdsToAdd.filter(filterId => filterId !== id)
        }else{
            selectedIdsToAdd.push(id)
        }

        return setState({
            ...state,
            options: options.map(option => ({...option, selected: isSelected(option.id)})),
            selectedIds: selectedIdsToAdd,
            selectedOptions: options.filter(option => isSelected(option.id))
        })
    }

    useEffect(
        ()=>{
            const initOptionsObj = list ? optionsStateObject(list) : optionsStateObject(defaultIntValues)
            return setState({
                ...state,
                title: header || defaultTitle,
                options: initOptionsObj
            })
        },[list, header])

    useEffect(
        ()=>{
            const selectedValues = getSelectedOptionsTitles
            if(onChange) return onChange([...selectedValues])
        },[selectedOptions])

    return (
        <Wrapper >

            <ButtonWrapper className={`menu rounded-lg ${className} mb-1`}>
                <ButtonLabel onClick={handleToggle} >
                {isOpen ? 
                    <Icon icon="angleup" height="1rem" width="1rem" margin="auto .5rem"/>
                    :
                    <Icon icon="angledown" height="1rem" width="1rem" margin="auto .5rem"/>
                }
                {getSelectedOptionsTitles.length > 0 ? `${ prefix || defaultSelectedPrefix } ${getSelectedOptionsTitles.join(", ")}` : title}
                </ButtonLabel>
            </ButtonWrapper>
            <DropdownWrapper className="w-100">
                {isOpen && 
                    <List>
                        {options.map(option => (
                            <ListItem
                                key={`${option.id}-${option.key}`} 
                                onClick={() => handleSelectedListItems(option.id)}
                            >
                                {option.title}
                                {option.selected && <Icon id={option.id} icon="check" width="1rem" height="1rem"/>}
                            </ListItem>
                        ))}
                    </List>
                }
            </DropdownWrapper>
        </Wrapper>
    )
}


export default DropDownMenu