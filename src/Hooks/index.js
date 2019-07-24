import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('')
  console.log('example');
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    return () => {
      console.log('effect clean up')
    }
  });

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <input value={value} onChange={handleInputChange} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;