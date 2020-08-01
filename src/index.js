import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Loadable from 'react-loadable'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

// import App from './App'
const App = Loadable({
  loader: () => import('./App'),
  loading: () => null
});
moment.locale('zh-cn');

const store = createStore(todoApp)
const ThemeContext = React.createContext('light');

ReactDOM.render(
  <ThemeContext.Provider value="dark">
    <Provider store={store}>
      <LocaleProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={props => <App {...props} />}
            >
            </Route>
          </Switch>
        </BrowserRouter>
      </LocaleProvider>
    </Provider>
  </ThemeContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
