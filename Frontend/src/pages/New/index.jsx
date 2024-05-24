import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, Form, NewTag } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function New(){
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate()

    function handleAddTag(){
        if(newTag === ''||newTag === ' '){
            return alert('Tag vazia')
        }
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie(){
        if(!title){
            return alert('Você não colocou o nome do filme')
        }

        if(!rating){
            return alert('Você não colocou a nota do filme')
        }

        if(newTag){
            return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique na cruz salmão para adicionar')
        }
        
        try {

            await api.post('/movies',{
                title,
                description,
                rating,
                tags
            })

            alert('Filme resgistrado com sucesso')

            navigate('/')
        } catch (error) {

            if(error.response){

                alert(error.response.data.message)
            } else {
                
                alert('Não foi resgistrado o filme')
            }

        }
 
    }
    function handleResetPage(){
        setNewTag('')
        tags.map((tag) => {
            handleRemoveTag(tag)
        })
    }
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <Link to={-1} >
                        <FiArrowLeft/> Voltar
                    </Link>

                    <h1>Novo filme</h1>

                    <div>
                        <Input
                            placeholder="Título"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />
                        

                        <Input
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            onChange={e => setRating(e.target.value)}

                        />
                    </div>

                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <h2>Marcadores</h2>

                    <NewTag>
                        {
                            tags.map((tag, index) => (
                                <MovieTag
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <MovieTag
                            isNew
                            value={newTag}
                            placeholder='Nova tag'
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        />
                    </NewTag>

                    <div>
                        <Button type='reset' title="Excluir filme" onClick={handleResetPage}/>
                        <Button title="Salvar alterações" onClick={handleNewMovie} />
                    </div>

                </Form>
            </main>
        </Container>
    )
}