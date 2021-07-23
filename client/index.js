import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './Components/App.js';

const Root = (
    <Router>
        <App/>
    </Router>
);

ReactDOM.render(Root, document.getElementById('root'));