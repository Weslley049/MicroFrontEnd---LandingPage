import React from "react";
import * as S from "./styles";

export default function Header() {
  const Options = [
    "Coronavírus (covid-19)",
    "Acesso a informação",
    "Participe",
    "Legislação",
    "Órgãos do Governo",
  ];

  return (
    <S.Container>
      <div className="HeaderTitleContainer">
        <p className="HeaderTitle ">gov.br</p>
      </div>
      <div className="HeaderOptionsContainer">
        <ul>
          {Options.map((option, index) => (
            <React.Fragment key={index}>
              <li className="HeaderOption">
                <a href="#">{option.toLocaleUpperCase()}</a>
              </li>
              <li className="Escapator" />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </S.Container>
  );
}
