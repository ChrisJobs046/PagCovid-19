import React from 'react';
import ReactDOM from 'react-dom';//Libreria react-dom
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router} from 'react-router-dom';


// Configuración de la rutas del Sitio Web 
ReactDOM.render(
  <Router>
    <App/>
  </Router>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
