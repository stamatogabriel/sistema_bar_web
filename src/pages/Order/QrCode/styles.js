import styled from "styled-components";

export const Div = styled.div`
    height: 400px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid;
    margin: 50px;
    padding: 25px;

    h1{
        margin: 25px;
    }

    div{
        align-items: flex-start !important;
    }
`;