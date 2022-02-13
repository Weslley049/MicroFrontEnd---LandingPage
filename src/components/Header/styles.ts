import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #071d41;
  border-bottom: 5px solid #2b74e9;
  justify-content: space-around;

  .HeaderTitleContainer {
    padding: 2%;
    .HeaderTitle {
      color: #fff;
      font-size: 17px;
      font-family: Raleway, Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-style: normal;
    }
  }

  .HeaderOptionsContainer {
    height: 100%;
    overflow: auto;
    overflow-y: hidden;
    display: flex;

    align-items: center;
    justify-content: center;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    li {
      flex-shrink: 0;
      margin-left: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .HeaderOption {
      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 0.7rem;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
      }
    }

    .Escapator {
      height: 20px;
      width: 1px;
      border-right: 1px solid rgba(151, 151, 151, 0.3);
    }
  }
`;
