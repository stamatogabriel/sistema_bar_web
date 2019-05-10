import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;

  ul {
    list-style: none;
    color: #777;
    width: 100%;
    padding: 20px;
    margin: 10px;

    li {
      margin: 5px;
      padding: 5px;
      width: 100%;
    }

    div {
      background: #fff;
      border-radius: 5px;
      width: 500px;
      margin: 0;
    }
  }

  .button-containner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .delete {
    color: #fff;
    font-size: 16px;
    background: #ff0000;
    height: 35px;
    border: 0;
    border-radius: 5px;
    width: 70%;
    transition: all 0.2s;
    font-weight: bold;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #ff530d;
    }
  }
`;

export const Form = styled.form`
  width: 90%;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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

  select {
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #0f0ee8;
    height: 45px;
    border: 0;
    border-radius: 5px;
    width: 50%;
    margin: 5px;
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
      background: #0344ff;
    }
  }

  .delete-order {
    color: #fff;
    font-size: 16px;
    background: #ff0000;
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
      background: #ff530d;
    }
  }
`;
