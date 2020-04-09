import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router >
    <App/>
  </Router >,
document.getElementById('root'));

serviceWorker.unregister();
