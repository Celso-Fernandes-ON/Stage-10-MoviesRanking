import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    gap: 64px;
    align-items: center;

    padding: 0 80px;

    > a {
        font-size:  24px;
        color: ${({theme}) => theme.COLORS.SALMON};
        text-align: center;
        font-weight: 700;
    }
    > div:nth-child(2) {
        flex: 1;
        width: 100%;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        text-align: right;
        width: max-content;

    }
`

export const ProfileImg = styled(Link)`
    > img {
        height: 56px;
        width: 56px;
        border-radius: 50%;
        object-fit: cover;
    }
`

export const ProfileName = styled(Link)`
    > strong {
        display: inline;
        font-size: 18px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`
export const Logout = styled.button`
    border: none;
    background: none;
    text-align: right;

    > span {
        cursor: pointer;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`
export const ResultSearched = styled.div`
    padding-top: 1rem;
    margin-top: -1.3rem;
    
    z-index: 1;
    position: absolute;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    display: flex;
    flex-direction: column;
    gap: .5rem;

    > div {

    }

`
export const ResultTags = styled.div`
    font-size: 1.2rem;
    align-items: center;
    display: flex;
    gap: 0.5rem;


    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

`
export const ResultMovies= styled.div`
    font-size: 1.6rem;
    align-items: center;
    display: flex;
    gap: 0.5rem;

    > svg {
        color: ${({theme}) => theme.COLORS.SALMON};
    }
    > button {
        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`