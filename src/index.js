import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import { store } from './componets/redux/store';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.interceptors.request.use(request=>{
console.log("moneey");
return request
})

axios.interceptors.response.use(response => {
  console.log(response,"ok");
})

root.render(  
  <React.StrictMode>
    <Provider store={store}>
    <App /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
