import styled from "styled-components";
import { device } from "../Layout";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
  @media ${device.desktop} {
    column-gap: 40px;
    row-gap: 40px;
  }
`;
