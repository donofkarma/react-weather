import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { /*Redirect,*/ Route, Switch } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from '../reducers';
import Sagas from '../sagas';

import '../styles/utilities/normalize';
import '../styles/utilities/base';

import Header from '../modules/header';
import Home from './home';
import NotFound from './not-found';

// create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// build the middleware for intercepting and dispatching navigation actions
const middlewareRouter = routerMiddleware(history);
// build the middleware for side effects
const middlewareSaga = createSagaMiddleware();

// add the reducer to your store on the `router` key
// also apply our middleware for navigating
const store = createStore(
    Reducers,
    applyMiddleware(middlewareRouter, middlewareSaga)
)

// start watching for redux actions
middlewareSaga.run(Sagas);

// let isAuthenticated = false;
// const PrivateRoute = ({ component: Component, path }) => (
//     <Route path={path} render={props => (
//         isAuthenticated ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to={{
//                 pathname: '/login',
//                 state: {
//                     from: props.location
//                 }
//             }} />
//         )
//     )}/>
// )

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                { /* ConnectedRouter will use the store from Provider automatically */ }
                <ConnectedRouter history={history}>
                    <div>
                        <Header />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
