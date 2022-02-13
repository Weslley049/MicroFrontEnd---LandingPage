import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
`;

export const BodyContent = styled.div`
  height: 93vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AfterHeader = styled.nav`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3%;
  flex-direction: row;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
`;

export const ImageContainer = styled.div``;

export const SectionContent = styled.section`
  height: 90%;
  width: 90%;
  padding: 3%;
  word-break: break-word;
  overflow: hidden;
  text-align: justify;

  h1 {
    color: #1351b4;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    margin-bottom: 20px;
  }

  p {
    color: #555;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const AcessModulesHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
