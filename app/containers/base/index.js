import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import Header from 'modules/header';
import About from 'containers/about';
import Home from 'containers/home';
import NotFound from 'containers/not-found';

class BaseRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // check to see if the user is already logged in
    }

    render() {
        return (
            <main>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    { /* 404 page - private route so you can't guess paths */ }
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>
        );
    }
}

// BaseRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired
// };

// const mapStateToProps = state => {
//     return {
//         // odd naming but in order to redirect you are authenticated
//         isAuthenticated: state.userState.redirectToReferrer
//     }
// }

export default connect(
    // mapStateToProps
)(BaseRoute);
