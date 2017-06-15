import React from 'react';

import { Main } from './style';

class NotFound extends React.Component {
    render() {
        return (
            <Main>
                <h1>404</h1>
                <p>Couldn't find that...</p>
            </Main>
        );
    }
}

export default NotFound;
