import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;

  a{
    color: #fff;
    font-size: 16px;
    background: #0F0EE8;
    height: 45px;
    border: 0;
    border-radius: 5px;
    width: 50%;
    transition: all 0.2s;
    font-weight: bold;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #0344FF;
        }
    }
`;


