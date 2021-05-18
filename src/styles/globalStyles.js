import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
      font-size: 1.45rem;
  }
`;

export default GlobalStyle;
