import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  span{
    margin: 20px;
  }

  
  .button-containner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  a{
    color: #fff;
    font-size: 20px;
    background: #0F0EE8;
    height: 80px;
    border-radius: 5px;
    width: 50%;
    transition: all 0.2s;
    font-weight: bold;
    margin: 15px;
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


