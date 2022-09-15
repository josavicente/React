import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp, } from './HelloWorldApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
            {/* <CounterApp  />
             */}
            <FirstApp title='Hola soy Vegeta!'/>
      </React.StrictMode>
);