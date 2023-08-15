import React from "react";

import * as S from "./Value.styles";

import * as Interface from "./Value.types";

export default function Value(props: Interface.ValuePropTypes) {
  return (
    <S.Container>
      <p>{props.value}</p>
    </S.Container>
  );
}
