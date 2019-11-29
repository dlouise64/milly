import React from 'react'
import { ButtonWrapper } from './styled-button'

export default function Button(props) {
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}
