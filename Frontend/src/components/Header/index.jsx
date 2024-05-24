import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { Input } from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import avatarPlacerHolder from '../../assets/avatar_placeholder.svg'
import { PiTagFill, PiFilmSlate } from "react-icons/pi";

import { Container, Logout, Profile, ProfileImg, ProfileName, ResultMovies, ResultSearched, ResultTags } from './styles'
import { Tag } from '../Tag'
import { useEffect, useState } from 'react'


export function Header(props){
    const { signOut, user } = useAuth()

    const navigate = new useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlacerHolder

    function handleSearch(e){
        props.searched(e.target.value)
    }
    return(
        <Container>
            <Link to="/" >
                MoviesRanking
            </Link>
            <Input
                placeholder="Pesquisar pelo título"
                onChange={handleSearch}
                onKeyPress={(event) => {
                    if(event.key === 'Enter'){
                        if( location.pathname !== '/'){
                            navigate('/', {searched: event.target.value})
                        }
                    }
                
            }}
            />
            <Profile>
                <div>
                    <ProfileName to="/profile">
                        <strong >{user.name}</strong>
                    </ProfileName>

                    <Logout onClick={signOut}>
                        <span>Sair</span>
                    </Logout>
                    <span ></span>
                </div>

                <ProfileImg to='/profile' >
                    <img src={avatarUrl} alt={user.name} />
                </ProfileImg>
            </Profile>
        </Container>
    )
}