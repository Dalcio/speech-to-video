import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 26px 112px;
    display: flex;
    flex-direction: row;
    h2 {
        margin-left: 16px;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
