import { StyledContainer } from './styles.jsx'
import Title from '../Title'
import MovieList from '../../components/MovieList'
const Container = () => {
    return (
        <StyledContainer>
            <Title />
            <MovieList />
        </StyledContainer>
    )
}

export default Container