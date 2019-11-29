import React, { useState } from "react";

function App() {
  const [name, setName] = useState(null);
  const [show, setShow] = useState(false);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {show && <h1>Hello {name} :-)</h1>}
    </div>
  );
}

export default App;
