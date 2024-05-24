import backgroundImg from '../../assets/background.png'
import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.SALMON};
    }
    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }
    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }
    > a {
        font-size:  16px;
        color: ${({theme}) => theme.COLORS.SALMON};
        text-align: center;
        margin-top: 42px;
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg})no-repeat center center;
    background-size: cover;
`