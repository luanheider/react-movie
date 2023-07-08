import { StyledMovieList } from './styles'
import Movie from '../Movie/'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
const MovieList = () => {
  const { data: movies, image_path } = useFetch()

  return (
    <StyledMovieList>
      {movies && movies.map(movie => (
        <Link className='link' to={`/details/${movie.id}`} key={movie.id}>
          <Movie item={`${image_path}${movie.poster_path}`} title={movie.title} key={movie.id} />
        </Link>
      ))}
    </StyledMovieList>
  )
}

export default MovieList