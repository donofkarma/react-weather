import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 64px);
    background: url(/assets/images/bg.svg) center center no-repeat;
    background-size: cover;

    form {
        margin-top: -64px;
    }
`;
