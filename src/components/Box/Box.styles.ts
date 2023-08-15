import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 15rem;
  border: 0.4rem solid var(--dark-grey);
  border-bottom: 0;

  &:nth-child(3n + 2) {
    border-left: 0;
    border-right: 0;
  }

  &:nth-child(n + 7) {
    border-bottom: 0.4rem solid var(--dark-grey);
  }
`;
