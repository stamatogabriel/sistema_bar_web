import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 30px;

  strong {
    margin: 15px;
    margin-left: 0px;
  }

  div{
    width: 100%;
  }

  .products {
    margin-left: 0px !important;
    margin: 10px;
    padding: 0px;
    width: 100%;
    justify-content: flex-start !important;
    background-color: #fff;
  }

  ul {
    list-style: none;
    color: #777;
    width: 100%;
    padding: 10px;
    margin: 0px;
  }

  li {
    margin: 0px;
    padding: 5px;
  }

  .button-containner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
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
    width: 90%;
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

  .confirm {
    color: #fff;
    font-size: 16px;
    background: #004002;
    height: 35px;
    border: 0;
    border-radius: 5px;
    width: 90%;
    transition: all 0.2s;
    font-weight: bold;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #008004;
    }
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
      background: #ff530d;
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
`;
