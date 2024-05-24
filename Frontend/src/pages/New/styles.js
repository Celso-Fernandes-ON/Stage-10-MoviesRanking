import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        overflow-y: auto;
    }
`
export const Form = styled.form`
    max-width: 1000px;
    margin: 38px auto;
    > a {
            color: ${({theme}) => theme.COLORS.SALMON};
            font-size: 16px;
            margin-bottom: 4px;
        }
    > h1 {
        margin-top: 24px;
        font-size: 36px;
    }
    > div {
        margin: 40px 0;
        display: flex;
        gap: 40px;

        button:first-child{
            background-color: ${({theme}) => theme.COLORS.BLACK};
            color: ${({theme}) => theme.COLORS.SALMON};
        } 
    }
    h2{
        margin-top: 40px;
    }

`
export const NewTag = styled.div`
    background-color: ${({theme}) => theme.COLORS.BLACK};
    padding: 16px;
    gap: 24px;
    border-radius: 8px;
`