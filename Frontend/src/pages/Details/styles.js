import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        padding: 40px 80px 0;

        a {
            color: ${({theme}) => theme.COLORS.SALMON};
            font-size: 16px;
        }
    }
`
export const Content = styled.div`
    width: 100%;
    margin-top: 24px;
    
    > p {
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.WHITE};
        text-align: justify;
        word-break: break-all;
        margin-top: 40px;
    }
`
export const Title = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    > h2 {
        font-size: 32px;
        font-weight: 500;
    }
`
export const Stars = styled.div`
    display: flex;
    gap: 10px;
    color: ${({theme}) => theme.COLORS.SALMON};

`
export const Edited = styled.div`
    display: flex;
    gap: 8px;

    align-items: center;
    margin-top: 24px;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    > strong {
        margin-right: 8px;
    }

    > svg {
        color: ${({theme}) => theme.COLORS.SALMON};

    }
`
export const Tags = styled.div`
    display: flex;
    width: max-content;
    margin-top: 40px;
    gap: 8px;

    > div {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    }
`