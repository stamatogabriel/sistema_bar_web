import styled from "styled-components";

export const Div = styled.div`
  max-width: 700px;
  margin: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  margin: 20px auto 0;

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

  a {
    color: #fff;
    font-size: 16px;
    background: #0F0EE8;
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
      background: #0344FF;
        }
    }
    
  button {
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
