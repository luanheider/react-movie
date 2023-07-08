import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "League Spartan", sans-serif;
    }
    body {
        padding: 2rem;
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.tertiaryColor};
    }
`