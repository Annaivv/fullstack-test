import styled from "styled-components";
import { device } from "../Layout";

export const DealsSection = styled.section`
  padding: 16px;
  @media ${device.tablet} {
    padding: 20px;
  }
  @media ${device.laptop} {
    padding: 50px 80px 12px;
  }
  @media ${device.desktop} {
    padding: 80px 100px 24px;
  }
`;

export const DealsTitle = styled.h2`
  margin-bottom: 16px;
  color: #b29f7e;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  @media ${device.laptopL} {
    font-size: 32px;
    line-height: 40px;
  }
  @media ${device.desktop} {
    font-size: 60px;
    line-height: 72px;
    margin-bottom: 32px;
  }
`;
