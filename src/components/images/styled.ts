import styled from 'styled-components';

export const HandleImagesContainer = styled.div`
    flex: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: ${({ theme }) => theme.spacing.m};
    }

    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const WordRelatedImagesContainer = styled.div`
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: ${({ theme }) => `0 0 ${theme.spacing.s} ${theme.spacing.s}`};
    justify-content: space-evenly;

    span {
        margin: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.s} 0 0`};
    }

    img {
        height: 150px;
        border-radius: ${({ theme }) => theme.borderRadius.s};
        width: 150px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        height: 300px;
    }

    #img-remove {
        border: 5px solid ${({ theme }) => theme.colors.primary};
    }
`;

export const AudioImagesContainer = styled.div`
    flex: 1;
    margin-top: ${({ theme }) => theme.spacing.s};
    background-color: ${({ theme }) => theme.colors.primary};
    height: 150px;
    overflow-y: auto;
    span:first-child {
        button {
            border-bottom-right-radius: 0;
        }
    }
`;

export const ImgContainer = styled.span`
    position: relative;
    height: 150px;

    img {
        height: 150px;
        width: 100%;
    }
    button {
        display: none;
        cursor: pointer;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border: unset;
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 0.8;
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.s};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.s};
        font-size: inherit;
        padding: ${({ theme }) => theme.spacing.s};
        color: inherit;

        &:hover {
            opacity: 0.6;
        }
    }

    img:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    &:hover {
        button {
            display: block;
            /* transition: ; */
        }
    }
`;
