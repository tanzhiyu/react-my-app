import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Divider, Checkbox } from 'antd';
// import RcCheckbox from 'rc-checkbox';
import Questions from './components/Questions';
import Answers from './components/Answers';
import RcCollapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import { merge } from 'lodash';
const RcCheckbox = require('rc-checkbox').default;



const AntDesign = ({ }) => {
  const [{
    questions = [],
    answers = [],
    info = {}
  }, setDataCenter] = useState({});

  const inputRef = useRef(null);

  const detailWithResults = useCallback(results => {
    const questions = results.list.filter(item => item.name.includes('？'));
    const answers = results.list.filter(item => !item.name.includes('？'));
    return {
      questions,
      answers,
      info: {
        err: results.err,
        msg: results.msg
      }
    }
  }, []);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
    const fileList = [{uid: 1, a: 2}];
    const file = {uid: 2, a: 3, b: 4};
    console.log(merge(fileList, file));

  }, []);

  useEffect(() => {
    let response = {
      err: 'no error',
      msg: '我是一条信息',
      list: [{
        id: 0,
        name: '你在干嘛？'
      }, {
        id: 1,
        name: '你吃饭了吗？'
      }, {
        id: 2,
        name: '我没干嘛'
      }, {
        id: 3,
        name: '吃过了'
      }]
    }
    setDataCenter(detailWithResults(response));

  }, [detailWithResults]);



  const handleClick = useCallback(() => {
    setDataCenter(state => {
      return {
        ...state,
        questions: [...questions, {
          id: Math.floor(Math.random() * 100 + 10),
          name: '今晚有时间吗？'
        }]
      }
    })
  }, [])

  const handleSort = () => {
    setDataCenter(state => ({
      ...state
    }))
  }

  return <div>
    <Divider />
    <button onClick={handleSort}>排序</button>
    <Questions
      questions={questions}
      handleAdd={handleClick}
    />
    <Answers
      answers={answers}
    />
    <Divider />

    <div>
      <input type="checkbox" checked onChange={(e) => {
      }} />
    </div>

    <div>
      <RcCheckbox
        // prefixCls="tzy"
        onFocus={() => { console.log('focus') }}
        // className="tzy-cls"
        ref={inputRef}
        onChange={(e) => {
          console.log(e);
        }}
      >
        rc-checkbox
        </RcCheckbox>
    </div>
      
      <div>
        <RcCollapse accordion={true} destroyInactivePanel>
          <div  header={`This is panel header 1`} >
            <div>this is some content! </div>
          </div>
          <RcCollapse.Panel  header={`This is panel header 2`} >
            this is some other content !
          </RcCollapse.Panel>
        </RcCollapse>
      </div>
  </div>
}

export default AntDesign;