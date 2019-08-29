/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 17:50:23
 * @LastEditTime: 2019-08-18 18:25:36
 * @LastEditors: Please set LastEditors
 */
import React, { useState, useEffect, useCallback } from 'react'
function MeasureExample() {
  const [height, setHeight] = useState(0);
  let [text, setText] = useState('hello world');
  useEffect(() => {
  });
  const measuredRef = useCallback(node => {
    console.log(node)
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>{text}</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}

export default MeasureExample