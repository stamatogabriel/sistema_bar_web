import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 100px auto 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;

  .confirm {
    color: #fff;
    font-size: 16px;
    background: #004002;
    height: 35px;
    border: 0;
    border-radius: 5px;
    width: 30%;
    transition: all 0.2s;
    font-weight: bold;
    margin: 5px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #008004;
    }
  }
  
  article{
    border: 1px solid #999;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
    background: #fff;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    align-items: center;
  }

  h1 {
    font-size: 40px;
  }

  p{
    font-size: 16px;
    color: #999;
    margin-left: 15px;
    line-height: 24px
  }

  button {
    color: #fff;
    font-size: 14px;
    background: #0F0EE8;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 50%;
    transition: all 0.2s;
    font-weight: bold;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #0344FF;
        }
    }
    .excluir {
      background: #FF0000;
      &:hover {
      background: #FF530D;
        }
    }

    .print {
    background: #004002;
    &:hover {
      background: #008004;
    }
  }
    div {
      height: 20px;
      width: 20px;
      margin-left: 5px;
      justify-content: center;
      align-items: center;
      }
      .true {
        background: red;
      }
      .false {
        background: green;
      }
`;