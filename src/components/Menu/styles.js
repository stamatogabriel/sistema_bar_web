import styled from "styled-components";

export const Sidenav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282434;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 40px;
};


ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  padding: auto;
}

li {
  display: flex;
  width: 100%;
    div {
      width: 100%;
    }
}

 a {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  align-content: center;
  padding: 10px;
  text-decoration: none;
  font-size: 14px;
  color: #8c8c8c;
  width: 100%;
  span {
    margin: 5px;
  }
};

li a:hover {
  color: #f1f1f1;
  background-color: #201e29;
};

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
};

`;