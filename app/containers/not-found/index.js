import React from 'react';

import PageContent from 'components/page-content';

class NotFound extends React.Component {
    render() {
        return (
            <PageContent>
                <h1>404</h1>
                <p>Couldn't find that...</p>
            </PageContent>
        );
    }
}

export default NotFound;
