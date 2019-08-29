/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-17 23:03:26
 * @LastEditTime: 2019-08-12 15:26:45
 * @LastEditors: Please set LastEditors
 */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function Example(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('')
  const exampleEl = useRef(null);
  useEffect(() => {
    document.title = `${count} times`;
    axios.get('/test').then(res => console.log(res))
    .catch(err => console.log(err))
    return () => {
      console.log('effect clean up')
    }
  });

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  const handleClick = () => {
    console.log(exampleEl)
    setCount(count + 1)
  }

  return (
    <div ref={exampleEl}>
      <p>initCount: {props.initCount}</p>
      <p>You clicked {count} times</p>
      <input  value={value} onChange={handleInputChange} />
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
export default Example;