import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from './style';

class Navigation extends React.Component {
    render() {
        return (
            <Nav className={this.props.className}>
                <ul>
                    <li>
                        <NavLink activeClassName="is-active" to="/about">About</NavLink>
                    </li>
                </ul>
            </Nav>
        );
    }
}

export default Navigation;
