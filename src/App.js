import React, { useState } from 'react'
import Button from './components/button/button'

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
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input type="text" onChange={handleChange} />
				</label>
				<Button type="submit">Submit</Button>
			</form>
			{show && <h1>Hello {name} :-)</h1>}
		</div>
	)
}

export default App
