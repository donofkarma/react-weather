import { css } from 'styled-components';

export default css`
    &:before {
        content: "";
        display: table;
    }
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`;
