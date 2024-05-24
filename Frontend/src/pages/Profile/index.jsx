import { FiLock, FiMail, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Avatar, Container, Form } from './styles'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import avatarPlacerHolder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

export function Profile(){
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlacerHolder
    
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password : newPassword,
            old_password : oldPassword
        }
        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <header>
                <Link to={-1}>
                    <FiArrowLeft/> Voltar
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id='avatar' type="file" onChange={handleChangeAvatar} />
                    </label>
                </Avatar>
                <Input type="text" placeholder="Usuário" icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
                <Input type="text" placeholder="E-mail" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha atual" icon={FiLock} onChange={e => setOldPassword(e.target.value)}/>
                <Input type="password" placeholder="Nova senha" icon={FiLock} onChange={e => setNewPassword(e.target.value)}/>
                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}