import React from 'react';
import ReactDOM from 'react-dom';//Libreria react-dom
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4

//Paginas del sitio web
import Home from './componentes/home/Home'; 
import Nosotros from './componentes/nosotros/Nosotros';
import Eventos from './componentes/eventos/Eventos';
import Donaciones from './componentes/donaciones/Donaciones';
import Contacto from './componentes/contacto/Contacto'

// Configuración de la rutas del Sitio Web 
ReactDOM.render(
  <Router>
    <div>
      <Switch>

          {/* Páginas */}
          <Route exact path='/' component={Home} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/eventos' component={Eventos} />
          <Route path='/donaciones' component={Donaciones} />  
          <Route path='/contactos' component={Contacto} /> 

        </Switch>
    </div>
  </Router>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
