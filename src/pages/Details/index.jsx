import { useParams } from 'react-router-dom'
import { Apikey } from '../../config/key'
import Movie from '../../components/Movie'
import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
const Details = () => {
  const { id } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${Apikey}&language=en-US`
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()

      const { title, poster_path, overview, release_date
      } = jsonData

      const movie = {
        id,
        title,
        sinopse: overview,
        image: `${image_path}${poster_path}`,
        releaseDate: release_date
      }
      setData(movie)
    }
    fetchData()
  }, [url])

  return (
    <>
      {data && (
        <Container>
          <Movie
            item={data.image}
            title={data.title}
            releaseDate={data.releaseDate}
            sinopse={data.sinopse}
            key={data.id} />
          <Link className='btn' to='/'>Home</Link>
        </Container>
      )}
    </>
  )
}

export default Details
