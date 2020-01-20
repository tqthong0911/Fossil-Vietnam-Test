import './lib';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import './styles.scss';

ReactDOM.render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
