import { Container } from "./styles";
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";


export function Rating({stars}){
    let rating = []

    for (let i = 1; i <= 5; i++) {
        if( i <= stars){
            rating.push(<FaStar key={i}/>)
        } else {
            rating.push(<FaRegStar key={i}/>)
        }        
    }
    return(
        <Container>
            {rating}
        </Container>
    )
}