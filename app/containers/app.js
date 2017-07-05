import React from 'react';
import Async from 'react-code-splitting';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from 'reducers';
import Sagas from 'sagas';

// global css
import 'styles/utilities/normalize';
import 'styles/utilities/base';
import 'styles/utilities/weather-icons';

const BaseRoute = () => <Async load={import('containers/base')} />

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

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                { /* ConnectedRouter will use the store from Provider automatically */ }
                <ConnectedRouter history={history}>
                    <Route path="/" component={BaseRoute} />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
