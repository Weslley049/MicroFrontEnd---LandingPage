import React from "react";
import { navigateToUrl } from "single-spa";

import Header from "../../components/Header";
import DynamicImage from "../../components/DynamicImage";
import ModuleContainer from "../../components/ModuleContainer";

import * as S from "./styles";

const modules = [
  "Cadastros",
  "Módulo Empresa",
  "Transferências Especiais",
  "Transferências Fundo a Fundo",
  "Transferências Discrionárias e Legais",
  "Termo de Execução Descentralizada",
];

export default function LandingPage() {
  const onValidate = async () => {
    if (localStorage.getItem("@token")) {
      navigateToUrl("http://localhost:9000/HomePage");
    }

    navigateToUrl("http://localhost:9000/LoginPage");
  };

  return (
    <S.Container>
      <Header />
      <S.BodyContent>
        <S.AfterHeader>
          <S.ImageContainer>
            <DynamicImage
              srcPath="https://redemaisbrasil.plataformamaisbrasil.gov.br/media/images/logo_plataforma_mais_brasil_horizontal.png"
              alt="Plataforma +Brasil"
              height={120}
              width={120}
              styleProps={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </S.ImageContainer>
        </S.AfterHeader>
        <S.SectionContent>
          <h1> Bem-vindo à Plataforma +Brasil </h1>
          <p>
            A <strong>Plataforma +Brasil </strong>
            constitui ferramenta integrada e centralizada, com dados abertos,
            destinada à informatização e à operacionalização das transferências
            de recursos oriundos do Orçamento Fiscal e da Seguridade Social da
            União a órgão ou entidade da administração pública estadual,
            distrital, municipal, direta ou indireta, consórcios públicos e
            entidades privadas sem fins lucrativos.
          </p>

          <p>
            {" "}
            Para acessar os módulos da Plataforma +Brasil, clique nos cards
            abaixo:
          </p>

          <S.AcessModulesHolder>
            {modules.map((module, index) => (
              <React.Fragment key={index}>
                <ModuleContainer name={module} onValidate={onValidate} />
              </React.Fragment>
            ))}
          </S.AcessModulesHolder>
        </S.SectionContent>
      </S.BodyContent>
    </S.Container>
  );
}
