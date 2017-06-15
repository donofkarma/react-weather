import styled from 'styled-components';
import { colors } from '../tokens/color';

export const Form = styled.form`
    margin: 0;
    padding: 0;
    text-align: center;

    label {
        display: inline-block;
        margin-bottom: 1rem;
        color: ${ colors.white };
        font-size: 3rem;
    }

    input {
        display: block;
        margin: 0 auto 1rem;
        padding: 10px 15px;
        width: 250px;
        border: 1px solid ${ colors.grey.light };
        border-radius: 4px;
        font-size: 1.2rem;
        text-align: center;
    }
`;
