import React from 'react';

import { H1, SearchForm, SiteHeader } from './style';

class Header extends React.Component {
    render() {
        return (
            <SiteHeader className={this.props.className}>
                <H1>Weather App</H1>
                <SearchForm className />
            </SiteHeader>
        );
    }
}

export default Header;
