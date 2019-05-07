import styled from "styled-components";

export const Div = styled.div`
  max-width: 700px;
  margin: 120px auto 0;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;

  input {
    flex: 2;
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

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  h1 {
    font-size: 40px;
  }

  p {
    color: #666;
    line-height: 24px;
    margin-top: 5px;
    font-size: 16px;
  }
  
  .error {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #0f0ee8;
    height: 45px;
    border: 0;
    border-radius: 5px;
    width: 100%;
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

  .cancelar {
    color: #fff;
    font-size: 16px;
    background: #FF0000 !important;;
    height: 45px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: all 0.2s;
    font-weight: bold;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #FF530D !important;
        }
    }
`;
