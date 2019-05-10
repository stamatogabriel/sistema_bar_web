import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
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
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background: #0344FF;
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  .manager {
    height: 15px !important;
  }

  .check {
    display: flex;
    flex-direction: row !important;
    justify-content: center;
    width: 90%;
    margin: 15px;

   span{
     margin: 0px !important;
     padding: 10px !important;
   } 
   input{
     margin: 0px !important;
     padding: 5px !important;
     width: 25px !important;
   }
  }
`;
