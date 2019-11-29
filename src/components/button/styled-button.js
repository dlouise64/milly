import styled from 'styled-components'

export const ButtonWrapper = styled.button`
	&:hover {
		cursor: pointer;
		border: ${props =>
			props.success
				? '0.0625rem solid #75a839'
				: '0.0625rem solid transparent'};
		background: ${props => (props.success ? '#75a839' : '#028bb1')};
		color: ${props => (props.bordered ? '#fff' : '#fff')};
	}
	box-shadow: 0 0 0 0.0625rem transparent;
	border: none;
	padding: ${props =>
		props.size === 'lg' ? '0.875rem 2.125rem' : '0.625rem 1.25rem'};
	text-transform: uppercase;
	border-radius: ${props => (props.size === 'lg' ? '1.5625rem' : '1.0625rem')};

	background: ${props => (props.success ? '#8bc34a' : '#02b3e4')};
	font-size: ${props => (props.size === 'lg' ? '0.875rem' : '0.6875rem')};
	font-weight: 500;
	letter-spacing: 0.0625rem;
	color: ${props => (!props.bordered ? '#fff' : '#02b3e4')};
`
