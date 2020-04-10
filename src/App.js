import React, { Component } from 'react';

import './App.css';

import Menu from './componentes/menu/Menu';
import Home from './componentes/home/Home'; 
import Nosotros from './componentes/nosotros/Nosotros';
import Eventos from './componentes/eventos/Eventos';
import Contacto from './componentes/contacto/Contacto';
import Donaciones from './componentes/donaciones/Donaciones';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render(){
       return(
            <div>
                <div>
                    <Menu/>
                </div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/nosotros' component={Nosotros} />
                    <Route path='/eventos' component={Eventos} />
                    <Route path='/donaciones' component={Donaciones} />
                    <Route path='/contacto' component={Contacto} /> 
                </Switch>
            </div>
       );
    }
}

export default App;
