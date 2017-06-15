import { css } from 'styled-components';
import { colors } from '../tokens/color';

export default css`
    margin: 0;
    padding: 10px 15px;
    background: ${ colors.green.medium };
    border: 1px solid ${ colors.green.dark };
    border-radius: 4px;
    color: ${ colors.white };
    font-size: 1.2rem;
    cursor: pointer;

    &:hover,
    &:focus {
        background: ${ colors.green.dark };
    }
`;
