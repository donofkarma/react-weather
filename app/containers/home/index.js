import React from 'react';
import Async from 'react-code-splitting';

const PageContent = () => <Async load={import('components/page-content')} />
const Search = () => <Async load={import('modules/search')} />

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
