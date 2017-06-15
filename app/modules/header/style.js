import styled from 'styled-components';
import clearfix from '../../styles/utilities/clearfix';
import { colors } from '../../styles/tokens/color';

import Search from '../search';

export const SiteHeader = styled.header`
    ${ clearfix }
    padding: 10px;
    background: ${ colors.orange };
`;

export const H1 = styled.h1`
    float: left;
    margin-bottom: 0;
    color: ${ colors.white };
`;

export const SearchForm = styled(Search)`
    float: right;

    label {
        display: none;
    }

    input {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 0;
        font-size: 1rem;
        text-align: left;
    }

    button {
        font-size: 1rem;
    }
`;
