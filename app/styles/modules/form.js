import styled from 'styled-components';
import { colors } from '../tokens/color';

export const Form = styled.form`
    margin: 0;
    padding: 0;
    text-align: center;

    label {
        display: inline-block;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    input {
        display: block;
        margin: 0 auto 1rem;
        padding: 5px 10px;
        width: 200px;
        border: 1px solid ${ colors.grey.light };
        border-radius: 3px;
        font-size: 1.2rem;
    }
`;
