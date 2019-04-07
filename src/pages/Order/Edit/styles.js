import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ul {
  list-style: none;
  color: #777;
  width: 400px;
  padding: 20px;
  margin: 10px;

  div{
    background: #fff;
    border-radius: 5px;
    width: 400px;
  }
}

  li {
    margin: 5px;
    padding: 5px;
    
  }

  .button-containner{
    display: flex;
    flex-direction: row;
  }

  .delete {
    color: #fff;
    font-size: 16px;
    background: #ff0000;
    height: 35px;
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
      background: #FF530D;
    }
  }

  .edit {
    color: #fff;
    font-size: 16px;
    background: #004008;
    height: 35px;
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
      background: #008011;
    }
  }
`;

export const Form = styled.form`
  width: 450px;
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
