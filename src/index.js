import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Usercontextprovider } from './context/stateprovider';
import { initialstate } from './context/initialstate';
import reducer from './context/reducer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Usercontextprovider initialstate={initialstate} reducer={reducer}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>

    </Usercontextprovider>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
