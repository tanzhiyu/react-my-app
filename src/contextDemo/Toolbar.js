/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:22:29
 * @LastEditTime: 2019-08-12 17:41:50
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ThemedButton from './ThemedButton'

 const doSomething = (a, b) => {
   console.log('重计算');
   return a + b;
 }
const Toolbar = props => {
  const {a, b} = props;
  const memoizedCallback = React.useCallback(() => {
    console.log(a, b)
    return doSomething(a, b);
  }, [a, b])
  // console.log(memoizedCallback());
  return (
    <div>
      {memoizedCallback()}
      <ThemedButton />
    </div>
  )
}

export default Toolbar;