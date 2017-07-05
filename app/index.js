import React from 'react';
import Async from 'react-code-splitting';
import ReactDOM from 'react-dom';

const App = () => <Async load={import('containers/app')} />

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
