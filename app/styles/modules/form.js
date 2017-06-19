import styled from 'styled-components';
import breakpoints from '../tokens/breakpoints';
import { colors } from '../tokens/color';

export const Form = styled.form`
    margin: 0;
    padding: 0;
    text-align: center;

    label {
        display: inline-block;
        margin-bottom: 1rem;
        font-size: 2rem;

        @media (min-width: ${ breakpoints.large }) {
            font-size: 2.4rem;
        }
    }

    input {
        display: block;
        margin: 0 auto 1.4rem;
        padding: 10px 15px;
        width: 90%;
        max-width: 320px;
        border: 1px solid ${ colors.grey.light };
        border-radius: 4px;
        font-size: 1.2rem;
        text-align: center;

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: ${ colors.grey.light };
        }
        ::-moz-placeholder { /* Firefox 19+ */
            color: ${ colors.grey.light };
        }
        :-ms-input-placeholder { /* IE 10+ */
            color: ${ colors.grey.light };
        }
        :-moz-placeholder { /* Firefox 18- */
            color: ${ colors.grey.light };
        }
    }
`;
