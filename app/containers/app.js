import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styles/utilities/normalize';
import '../styles/utilities/base';

import Header from '../modules/header';
import Home from './home';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
