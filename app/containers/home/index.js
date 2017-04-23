import React from 'react';

import Search from '../../modules/search';
import { Main } from './style';

class Home extends React.Component {
    render() {
        return (
            <Main>
                <Search />
            </Main>
        );
    }
}

export default Home;
