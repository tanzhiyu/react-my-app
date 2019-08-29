/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 15:59:46
 * @LastEditTime: 2019-08-16 16:08:15
 * @LastEditors: Please set LastEditors
 */
import React from 'react';

const MemoComponents = props => {
  console.log(props)
  return (
    <div>{props.count.a}</div>
  )
}

export default React.memo(MemoComponents);