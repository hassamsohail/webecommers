import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import provider from
import { Provider } from 'react-redux'
// import store from '../Redux/Store'
import Store from './Redux/store'
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,

  document.getElementById('root'),
)
