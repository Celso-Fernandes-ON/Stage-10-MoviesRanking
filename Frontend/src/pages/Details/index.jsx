import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi'
import { IoTimeOutline } from "react-icons/io5";
import { Container, Content, Edited, Stars, Tags, Title } from './styles'
import { Header } from '../../components/Header'

import { Tag } from '../../components/Tag';
import { useAuth } from '../../hooks/auth';
import { Rating } from '../../components/Rating';

export function  Details(){
  const  {  user } = useAuth()

  const [ data, setData ] = useState(null)
  const params = useParams()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlacerHolder

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
      console.log(response.data)
    }
    fetchMovie()
  },[])

  return(
    <Container>
      <Header/>
        {
          data && 
          <main>
            <Link to={-1} >
              <FiArrowLeft/> Voltar
            </Link>

            <Content>
              <Title>
                <h2>{data.title}</h2>
                <Stars>
                  <Rating stars={data.rating}/>
                </Stars>
              </Title>

              <Edited>
                <img src={avatarUrl} alt="" />
                <strong>Por {user.name}</strong>

                <IoTimeOutline />
                <span>{data.created_at}</span>

              </Edited>

              {
                data.tags &&
                <Tags>
                  {data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))}
                </Tags>
              }

              <p>
                {data.description}
              </p>

            </Content>

          </main>}
    </Container>
  )
}