import * as C from './styles'

const Movie = ({ item, title, sinopse, releaseDate }) => {
  return (
    <C.StyledMovie>
      <C.ContainerImg>
        <C.Image src={item} alt={title} />
      </C.ContainerImg>
      <C.TitleDetails>{title}</C.TitleDetails>
      <C.Sinopse>{sinopse}</C.Sinopse>
      <C.ReleaseDate>{releaseDate}</C.ReleaseDate>
    </C.StyledMovie>
  )
}

export default Movie