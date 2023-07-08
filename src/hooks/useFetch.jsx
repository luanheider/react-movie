import { Apikey } from '../config/key'
const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=1`
import { useEffect, useState } from "react"

export const useFetch = () => {
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(moviesUrl)
            const jsonData = await response.json()
            setData(jsonData.results)
        }
        fetchData()
    }, [])

    return { data, image_path }
}