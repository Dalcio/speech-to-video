import styled from 'styled-components';

export const VideoContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    flex: 1;
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: ${({ theme }) => theme.spacing.s};
    }
`;
