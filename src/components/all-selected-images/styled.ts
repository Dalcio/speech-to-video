import styled from 'styled-components';

export const AllSelectedContainer = styled.div`
    margin-top: ${({ theme }) => theme.spacing.s};
    background-color: ${({ theme }) => theme.colors.primary};
    height: 150px;

    overflow: auto hidden;
    white-space: nowrap;

    span {
        img {
            max-width: 140px !important;
        }

        &:first-child {
            button {
                border-bottom-right-radius: 0;
            }
        }
    }
`;
