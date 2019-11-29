import React, { useState } from 'react'
import Form from './components/form/form'
import Button from './components/button/button'
import Input from './components/input/input'
import Label from './components/label/label'
function App() {
	const [name, setName] = useState(null)
	const [show, setShow] = useState(false)

	function handleChange(e) {
		setName(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		setShow(true)
	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Label>
					Name
					<Input type="text" onChange={handleChange} />
				</Label>
				<Button type="submit">Submit</Button>
			</Form>
			{show && <h1>Hello {name} :-)</h1>}
		</div>
	)
}

export default App
