import React from 'react';
import { NavLink } from 'react-router-dom';

import { H1, Navigation, SiteHeader } from './style';

class Header extends React.Component {
    render() {
        return (
            <SiteHeader className={this.props.className}>
                <H1>
                    <NavLink to="/">React Weather</NavLink>
                </H1>
                <Navigation />
            </SiteHeader>
        );
    }
}

export default Header;
