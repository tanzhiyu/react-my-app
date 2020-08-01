import React from 'react';


const Answers = ({answers}) => {
  return <div>
    <div>
      {
        answers.map(({name, id}) => <p  key={id}>{name}</p>)
      }
    </div>
  </div>
}

export default React.memo(Answers);