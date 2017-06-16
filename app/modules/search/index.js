import React from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Button } from './style';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isButtonDisabled: true
        }
    }

    render() {
        return (
            <SearchForm className={this.props.className}>
                <label htmlFor="location">Enter your Town or City</label>
                <input
                    id="location"
                    placeholder="e.g. London"
                    type="text"
                />
                <Button
                    disabled={this.state.isButtonDisabled}
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

export default Search;
