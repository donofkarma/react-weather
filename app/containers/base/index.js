import React from 'react';
import Async from 'react-code-splitting';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

const Header = () => <Async load={import('modules/header')} />
const About = () => <Async load={import('containers/about')} />
const Home = () => <Async load={import('containers/home')} />
const NotFound = () => <Async load={import('containers/not-found')} />

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
