import styled from "styled-components";

export const Head = styled.header`
    position: fixed;
    width: 100%;
    height: 60px;
    background: #282434;
    font-size: 25px;
    font-weight: bold;
    color: #7c7c7c;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;

    div {
        display: flex;
        align-items: left;
        width: 100%;
        margin: auto 100px auto;
    }

    h3 {
        color: #7c7c7c;
    }

    span {
        font-size: 12px;
    }

    .buttonContainer {
        display: flex;
        flex-direction: column;
        align-items: right;
        margin-right: 15px;
        margin-top: 10px;
        width: 30%;
     }

     .iconContainer {
         width: 5%;
         margin: 0 0 0 10px;
     }

    .menu {
        display: flex;
        float: right;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px  auto;
        color: #fff;
        background-color: #190d18;
        border-radius: 5px;
        border: solid 0.5px #190d18;
        font-size: 12px;
        padding: 5px;
        width: 140px;
        a{
            padding: 10px;
            width: 100%;
            color: #7c7c7c;
            text-decoration: none;
            &:hover {
            border: solid 0.5px #201e29;
            background-color: #201e29;
            color: #fff;
            }
        }
    }

    button {
        display: flex;
        flex-direction: row;
        color: #7c7c7c;
        background-color: #190d18;
        justify-content: center;
        align-items: center;
        border: none;
        margin: auto;
        padding: 10px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        &:hover{
            color: #fff;
            background-color: #201e29;
        }
        span {
            margin-left: 5px;
            font-size: 16px;
        }
    }
    `;