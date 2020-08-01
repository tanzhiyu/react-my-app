import React, { useState, useCallback, memo, useRef } from 'react';

const ButtonControl = memo(({text, control}) => {
  return <button onClick={control}>{text}</button>
})

function Counter(props) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  const start = useCallback(() => {
    if (ref.current) {
      return
    }
    ref.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

  }, [])
  
  const stop = useCallback(() => {
    if (!ref.current) {
      return
    }
    clearInterval(ref.current);
    ref.current = null
  }, []);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
      <ButtonControl control={start} text="启动"></ButtonControl>
      <ButtonControl control={stop} text="停止"></ButtonControl>
    </div>
  )
}


export default Counter