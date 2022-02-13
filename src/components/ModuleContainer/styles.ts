import styled from "styled-components";
import { Box, Button } from "@material-ui/core";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  margin: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  padding: 24px;

  .TitleModule {
    font-weight: 700;
    line-height: 21px;
    text-align: center;
    color: #0c326f;
    font-size: 18px;
    margin-bottom: 30px;
    font-family: Raleway, Arial, Helvetica, sans-serif;
  }
`;

export const AcessButton = styled(Button)`
  &:hover {
    background-color: "#fff";
    color: "#3c52b2";
  }

  .MuiButton-label {
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
  }
`;
