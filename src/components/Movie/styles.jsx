import styled from 'styled-components'
export const StyledMovie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export const ContainerImg = styled.span`
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all .4s;
    text-align: center;
    &:hover {
        transform: scale(1.1);        
    }
`
export const Image = styled.img`
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`
export const TitleDetails = styled.span`
    font-weight: bold;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryColor};
    margin-top: 1.2rem;
`
export const Sinopse = styled.span`
    max-width: 30%;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.2rem;
    margin: 1rem 0;
    @media screen and (max-width: 883px) {
        max-width: 100%;
    }
`
export const ReleaseDate = styled.span`
    color: ${({ theme }) => theme.colors.secondaryColor};
`