import styled from "styled-components"
import Box from "../Box"
import FormRow from './formrow'
import Input from "./input"
import Label from "./label"
import Validation from "./validation"
import Group from "./formGroup"



const Form = styled(Box).attrs(props =>({
    as: 'form',
    className: 'form'
}))``

Form.Row = FormRow
Form.Control = Input
Form.Label = Label
Form.Validation = Validation
Form.Group = Group

export default Form