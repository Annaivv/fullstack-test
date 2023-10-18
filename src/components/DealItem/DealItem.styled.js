import styled from "styled-components";
import { device } from "../Layout";

export const DealCard = styled.div`
  position: relative;
  background-color: #f2f2f2;
`;

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 10px 14px;
  font-family: Lato;
  font-size: 12px;
  line-height: 14px;
  @media ${device.laptop} {
    padding-bottom: 20px;
    font-size: 14px;
    line-height: 20px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
    line-height: 22px;
  }
  @media ${device.desktop} {
    padding: 30px 36px;
    font-size: 36px;
    line-height: 48px;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const ItemTitle = styled.h4`
  margin-bottom: 10px;
  font-family: Merriweather;
  font-weight: 700;
  font-size: 16px;
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 34px;
  }
  @media ${device.desktop} {
    font-size: 56px;
    line-height: 72px;
    margin-bottom: 20px;
  }
`;

export const ItemDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  row-gap: 10px;
  column-gap: 8px;
`;
