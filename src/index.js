import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use((config)=>{
    return config;
}, error=>{
    return Promise.reject(error);
})
axios.defaults.baseURL="https://jsonplaceholder.typicode.com";
axios.defaults.headers.post['Content-Type']="application/json";

axios.interceptors.response.use((response)=>{
    return response;
}, error=>{
    return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
