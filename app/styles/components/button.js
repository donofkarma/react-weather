import { css } from 'styled-components';
import { colors } from '../tokens/color';
import { transition } from '../utilities/animation';

export default css`
    margin: 0;
    padding: 10px 15px;
    background: ${ colors.orange.light };
    border: 1px solid ${ colors.orange.medium };
    border-radius: 4px;
    color: ${ colors.white };
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    ${ transition('background') }

    &:disabled {
        background: ${ colors.grey.medium };
        border-color: ${ colors.grey.medium };
    }

    &:not(:disabled) {
        &:hover,
        &:focus {
            background: ${ colors.orange.medium };
        }

        &:active {
            transform: translateY(2px);
        }
    }
`;
