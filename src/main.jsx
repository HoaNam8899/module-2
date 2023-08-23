import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeApp } from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storeApp}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
)
