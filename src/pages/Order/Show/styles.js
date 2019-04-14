import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;

div { 
  background: #fff;
  border: 1px solid #ddd;
}

.button-containner {
  border: none;
}

.edit {
    color: #fff;
    font-size: 16px;
    background: #004002;
    height: 35px;
    border: 0;
    border-radius: 5px;
    width: 30%;
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
    width: 30%;
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

  .pay {
    color: #fff;
    font-size: 16px;
    background: #FFC800;
    height: 35px;
    border: 0;
    border-radius: 5px;
    width: 30%;
    transition: all 0.2s;
    font-weight: bold;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #FFFC28;
    }
  }
  article{
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  p{
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px
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

    .button-containner{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;