import React from "react";

import * as S from "./styles";

interface ModuleContainerProps {
  name: string;
  onValidate: () => void;
}

export default function ModuleContainer({
  name,
  onValidate,
}: ModuleContainerProps) {
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
        onClick={onValidate}
      >
        <div className="ButtonTitle"> Acessar</div>
      </S.AcessButton>
    </S.Container>
  );
}
