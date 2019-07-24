import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import Demo from './demo'
import Demo2 from './components/demo2'

import App from './App'
import High from './high'
import HooksExample from './Hooks'

import { LocaleProvider } from 'antd'
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

moment.locale('zh-cn');

const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
       <App></App>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
