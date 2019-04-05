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

  img {
    width: 100px;
    margin: 10px 0 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    flex: 1;
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
    flex: 1;
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
    width: 100%;
    margin: 5px;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
`;

export const Aside = styled.aside`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  div {
    background: #fff;
    display: block;
    position: absolute;
    margin: auto;
    padding: 10px;
  }

  p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }
`;
