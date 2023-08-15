import React from "react";

import Value from "../Value/Value";

import * as S from "./Cell.styles";

import * as Interface from "./Cell.types";

export default function Cell(props: Interface.CellPropTypes) {
  return (
    <S.Container>
      <Value value={`${props.data.row}${props.data.col}`} />
    </S.Container>
  );
}
