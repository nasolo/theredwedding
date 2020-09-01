import React from "react"
import Icon from '../../icon'
import Wrapper from "../style/wrapper"
import Header from "../style/header"
import List from "../style/list"
import ListItem from "../style/listItem"
import Forms from './../../../elements/forms'


const defaultTitle = "Select an option"

const DropDownMenu = ({list, header, fields, name, ...rest}) =>{

    const {Control, Group, Label} = Forms
    const { names } = fields

    return (
        <Group>
            <Label onClick={handleToggle} for={name}>
                {title}

                {isOpen ? 
                    <Icon icon="angleup" height="1rem" width="1rem"/>
                    :
                    <Icon icon="angledown" height="1rem" width="1rem"/>
                }
             </Label>
            
            {isOpen && 
              <Control as="select" mulitple id={name}>
                   { names.map(field => (
                       <option>field</option>
                    ))}
                </Control>
            }
            

        </Group>
    )
}


export default DropDownMenu