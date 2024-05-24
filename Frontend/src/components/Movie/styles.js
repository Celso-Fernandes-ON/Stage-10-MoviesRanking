import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;
    text-align: left;

    > h1 {
        flex: 1;

        text-align: left;
        font-weight: 700;
        font-size: 24px;

        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 8px;
    }
    > div {
        svg {
            color: ${({theme}) => theme.COLORS.SALMON};
            margin-bottom: 15px;
        }
    }
    > p {
        max-height: 40px;
        overflow: hidden;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        word-break: break-all;


    }
    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

`