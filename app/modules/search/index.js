import React from 'react';
import PropTypes from 'prop-types';

import { SearchForm, Button } from './style';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }
    }

    handleChange(e) {
        let location = e.target.value;

        this.setState({
            location: location
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let path = '/location/' + this.state.location.toLowerCase();

        this.context.router.history.push(path);
    }

    render() {
        return (
            <SearchForm
                className={this.props.className}
                onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="location">Enter your Town or City</label>
                <input
                    id="location"
                    placeholder="e.g. London"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                />
                <Button
                    disabled={this.state.location === ''}
                    id="location"
                    type="submit"
                >
                    Get Weather
                </Button>
            </SearchForm>
        );
    }
}

Search.propTypes = {
    className: PropTypes.string
};

Search.contextTypes = {
    router: PropTypes.object
};

export default Search;
