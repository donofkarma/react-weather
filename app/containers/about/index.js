import React from 'react';

import PageContent from 'components/page-content';

class Home extends React.Component {
    render() {
        return (
            <PageContent>
                <h1>About</h1>
                <p>A Weather app built with React and powered by the <a href="https://openweathermap.org/" rel="nereferrer noopener" target="_blank">Open Weather Map API</a>. Icons are <a href="https://erikflowers.github.io/weather-icons/" rel="noreferrer noopener" target="_blank">Weather Icons by Erik Flowers</a>.</p>
                <p>By <a href="https://blacklabelcreative.com/" rel="noreferrer noopener" target="_blank">Jasal Vadgama</a> | <a href="https://twitter.com/donofkarma" rel="noreferrer noopener" target="_blank">@donofkarma</a> | <a href="https://github.com/donofkarma/react-weather" rel="noreferrer noopener" target="_blank">View on Github</a></p>
            </PageContent>
        );
    }
}

export default Home;
