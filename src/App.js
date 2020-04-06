import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Home from './components/Home'; 
import Nosotros from './components//Nosotros';
import Eventos from './components/Eventos';
import Donaciones from './components/Donaciones';
import Contacto from './components/Contacto';

class App extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/nosotros'component={Nosotros}/>
                    <Route path='/eventos'component={Eventos}/>
                    <Route path='/donaciones'component={Donaciones}/>
                    <Route path='/contactos'component={Contacto}/>
                </Switch>
            </div>
        );
    }
}

export default App;
