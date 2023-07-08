import styled from 'styled-components'
export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    h1 {
        color: #8844ee;
        font-size: 3.2rem;
    }
    img {
        border-radius: 10px;
    }
    @media screen and (max-width: 532px) {
        flex-direction: column;
        margin-bottom: 1rem;
    }
`