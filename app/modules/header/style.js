import React from 'react';
import styled from 'styled-components';
import clearfix from '../../styles/utilities/clearfix';

import Search from '../search';

export const SiteHeader = styled.header`
    ${ clearfix }
    padding: 10px;
`;

export const H1 = styled.h1`
    float: left;
`;

export const SearchForm = styled(Search)`
    float: right;

    label {
        display: none;
    }

    input {
        display: inline-block;
        margin-right: 10px;
    }
`;
