import React from "react";

import * as S from "./styles";

interface ModuleContainerProps {
  name: string;
}

export default function ModuleContainer({ name }: ModuleContainerProps) {
  return (
    <S.Container>
      <div className="TitleModule">{name}</div>

      <S.AcessButton
        color="primary"
        variant="outlined"
        fullWidth
        style={{
          borderRadius: 100,
        }}
      >
        <div className="ButtonTitle"> Acessar</div>
      </S.AcessButton>
    </S.Container>
  );
}
