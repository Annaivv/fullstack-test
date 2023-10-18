import styled from "styled-components";
import { device } from "../Layout";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #172234;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //padding: 24px 80px;
  padding: 12px 40px;
  @media ${device.tablet} {
    padding: 16px 60px;
  }
  @media ${device.laptop} {
    padding: 24px 80px;
  }
  @media ${device.desktop} {
    padding: 40px 120px;
  }
`;

export const Logo = styled.div`
  align-self: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 28px;
  }
  @media ${device.laptop} {
    font-size: 28px;
    line-height: 34px;
  }
  @media ${device.desktop} {
    font-size: 48px;
    line-height: 42px;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid #b29f7e;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  font-family: "Merriweather", serif;
  font-weight: 700;
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;
  padding: 4px 8px;
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 24px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    line-height: 22px;
    padding: 11px 48px;
  }
  @media ${device.desktop} {
    font-size: 36px;
    line-height: 42px;
    padding: 22px 60px;
  }
`;
