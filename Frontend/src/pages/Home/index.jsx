import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
// import { Container, Brand, Menu, Search, Content, NewMovie } from './styles'
import { Container, Menu, Content, NewMovie } from './styles'
import { Movie } from '../../components/Movie'
import { Tag } from '../../components/Tag'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home(){
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function searched(searched){
        setSearch(searched)
    }

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get('/tags')
            setTags(response.data)
        }

        fetchTags()

    },[])
    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/movies?title=${search}&tags=${tagsSelected}`)
            setMovies(response.data)
        }
        fetchMovies()
    },[search,tagsSelected])

    return(
        <Container>
            <Header searched={searched}/>
            <main>
                <Menu>
                    <h2>Meus filmes</h2>
                    <NewMovie to="/new" >
                        <FiPlus/>
                        Adicionar filme
                    </NewMovie>
                </Menu>
                <Content>
                    {
                        movies.map(movie => (
                            <Movie
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => {handleDetails(movie.id)}}
                            />
                        ))
                    }
                </Content>
            </main>
        </Container>
    )
}