import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 40%;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  
  input {
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #0F0EE8;
    height: 45px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
`;