import styled from "styled-components";

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
  // padding: 20px 14px;
  //
  // font-family: Lato;
  // font-size: 18px;
  // line-height: 22px;
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const ItemTitle = styled.h4`
  margin-bottom: 5px;
  font-family: Merriweather;
  // font-size: 20px;
  font-weight: 700;
  // line-height: 34px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  // column-gap: 60px;
  row-gap: 10px;
`;

export const ItemDetail = styled.p`
  width: calc(33% - 40px);
`;
