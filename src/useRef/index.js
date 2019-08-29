/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:10:48
 * @LastEditTime: 2019-08-15 11:42:06
 * @LastEditors: Please set LastEditors
 */
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    console.log(inputEl);
    inputEl.current = 'hellos'
    // inputEl.current.focus();
  }
  return (
    <>
      <input  type="text" />
      <button onClick={onButtonClick}>focus the input</button>
    </>
  )
}

export default TextInputWithFocusButton;

