import styled from 'styled-components';

import clearfix from 'styles/utilities/clearfix';
import breakpoints from 'styles/tokens/breakpoints';

import Nav from 'modules/navigation';

export const SiteHeader = styled.header`
    ${ clearfix }
    padding: 10px 20px;
`;

export const H1 = styled.h1`
    float: left;
    margin-bottom: 0;

    @media (max-width: ${ breakpoints.small }) {
        font-size: 1.6rem;
    }
`;

export const Navigation = styled(Nav)`
    float: right;
    font-size: 1rem;
    line-height: 2rem;

    @media (min-width: ${ breakpoints.small }) {
        line-height: 2.8rem;
    }
`;
