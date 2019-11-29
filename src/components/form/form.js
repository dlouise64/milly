import React from 'react'
import { FormWrapper } from '../form/styled-form'

function Form(props) {
	return <FormWrapper {...props}>{props.children}</FormWrapper>
}

export default Form
