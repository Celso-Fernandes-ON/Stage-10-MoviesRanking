import { Tag } from '../Tag'
import { Rating } from '../Rating';
import { Container } from './styles'

export function Movie({data, ...rest}){
    
    return(
        <Container {...rest} >
            <h1>{data.title} </h1>
            <Rating stars={data.rating}/>
            <p>
                {data.description}
            </p>
            {
                data.tags && 
                <footer>
                    {data.tags.map(tag => (
                        <Tag key={tag.id} title={tag.name} />
                    ))}
                </footer>
            }
        </Container>
    )
}