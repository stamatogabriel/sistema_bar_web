import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;


  article{
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    background: #fff;
  }

  p{
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px
  }

  a{
    height: 42px;
    border-radius: 5px;
    border: 2px solid #0F0EE8;
    background: none;
    color:  #0F0EE8;
    margin-top: 10px;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    &:hover{
      color: white;
      background-color: #0F0EE8;
    }
  }
`;