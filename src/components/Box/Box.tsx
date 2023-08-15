import React from "react";

import Cell from "../Cell/Cell";

import * as S from "./Box.styles";

import * as globalInterface from "../../interfaces/data";

import * as Interface from "./Box.types";

export default function Box(props: Interface.BoxPropTypes) {
  return (
    <S.Container>
      {props.data.map((boxItem: globalInterface.BoxItem, index) => (
        <Cell key={"cell-" + index} data={boxItem} />
      ))}
    </S.Container>
  );
}
