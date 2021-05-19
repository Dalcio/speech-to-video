import styled from 'styled-components';

export const RecordContainer = styled.button`
    cursor: pointer;
    width: 96px;
    height: 96px;
    border: none;
    border-radius: 100%;
    background-color: red;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    text-align: center;

    &:hover,
    &:focus {
        opacity: 0.8;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: 20px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 100px;
        height: 100px;
        margin-left: -50px;
    }
`;
