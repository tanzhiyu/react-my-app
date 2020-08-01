import React from 'react';
import styles from './index.module.scss';


const Questions = ({questions, handleAdd = () => {}}) => {
  return <div className={styles.questions}>
    <button onClick={handleAdd}>增加一个问题</button>
    <div>
      {
        questions.map(item => (<p key={item.id}>{item.name}</p>))
      }
    </div>
  </div>
}

export default React.memo(Questions);