import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App.js';

ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>, 
    document.getElementById('root'),
);