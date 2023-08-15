import React from "react";

import createGrid from "../../data/createGrid";

import Box from "../../components/Box/Box";

import * as S from "./Home.styles";

import * as globalInterface from "../../interfaces/data";

export default function Home() {
  const grid: globalInterface.Grid = createGrid();

  return (
    <S.Container>
      <S.BoxContainer>
        {grid.map((box: globalInterface.Box, index) => (
          <Box key={"box-" + index} data={box} />
        ))}
      </S.BoxContainer>
    </S.Container>
  );
}
