import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        display: grid;
        grid-template-rows: 130px auto ;

        grid-template-areas: 
        "menu"
        "content";
        padding: 0 80px;
    }

`
export const Menu = styled.div`
    grid-area: menu;
    
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        font-size: 32px;
        font-weight: 400;
    }

`
export const NewMovie = styled(Link)`
    display: flex;
    width: max-content;
    height: 48px;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.SALMON};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    
    padding: 0 32px;

    align-items: center;

    border: 0;
    border-radius: 10px;
    font-weight: 400;

    &:disabled{
        opacity: 0.5;
    }
`
export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: auto;

`