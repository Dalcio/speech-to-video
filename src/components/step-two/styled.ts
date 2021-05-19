import styled from 'styled-components';

export const StepTwoContainer = styled.div`
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.m}`};

    textarea {
        outline: none;
        resize: none;
        border-radius: ${({ theme }) => theme.borderRadius.s};
        margin-top: ${({ theme }) => theme.spacing.s};
        box-shadow: 1px #000;
        padding: ${({ theme }) => theme.spacing.s};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        textarea {
            width: 100%;
            height: 300px;
        }
    }
`;

export const StepTwoAsideLeft = styled.aside``;

export const StepTwoAsideRight = styled.aside`
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: ${({ theme }) => theme.spacing.m};
    }
`;

export const CurrentWordContainer = styled.div``;

export const PreviousWordBtn = styled.button``;

export const NextWordBtn = styled.button``;
