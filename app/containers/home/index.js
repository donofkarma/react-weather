import React from 'react';

import PageContent from 'components/page-content';
import Search from 'modules/search';

class Home extends React.Component {
    render() {
        return (
            <PageContent>
                <Search />
            </PageContent>
        );
    }
}

export default Home;
