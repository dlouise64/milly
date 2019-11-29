import styled from 'styled-components'
import style from '../variables'
export const InputWrapper = styled.input.attrs((/* props */) => ({
	tabIndex: 0
}))`
	padding: ${props => (props.size === 'lg' ? '0.875rem' : '0.5rem')};
	font-size: ${props => (props.size === 'lg' ? '0.875rem' : '0.9375rem')};
	border-radius: 0.4375rem;
	border: none;
	box-shadow: 0 0 0 0.0625rem ${style.border.primary};
	font-weight: 300;
	min-width: 100%;
	margin: 0.625rem 0;
`
