import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

    border: ${({theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none" };

    border-radius: 10px;
    padding-right: 16px;

    width: ${({isNew}) => isNew ? "200px" : "max-content" } ;

    > button {
        border: none;
        background: none;

        svg {
            color: ${({theme}) => theme.COLORS.SALMON};
        }
    }
    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${({theme }) => theme.COLORS.GRAY_300}
        }
    }
`