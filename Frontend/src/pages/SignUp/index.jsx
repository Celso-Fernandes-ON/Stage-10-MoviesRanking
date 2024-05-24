import { useState } from 'react'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'

export function SignUp(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            return alert('Preencha todos os campos!')
        }

        api.post('/users', {name, email, password})
        .then(() => {
            alert('Usuário cadastrasdo com sucesso!')
            navigate('/')
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert('Não foi possível cadastrar')
            }
        })

    }
    return(
        <Container>
            <Form>
                <h1>Movies Ranking</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input type="text" icon={FiUser} placeholder="Nome" onChange={e => setName(e.target.value)} />
                <Input type="text" icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <Input type="password" icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>

                <Button title="Cadastrar" onClick={handleSignUp}/>
                <Link to="/">Voltar para o login</Link>
            </Form>
            <Background/>
        </Container>
    )
}