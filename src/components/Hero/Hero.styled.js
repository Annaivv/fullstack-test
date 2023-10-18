import styled from "styled-components";
import background from "../../images/image-bg-hero.jpg";
import { device } from "../Layout";

export const HeroSection = styled.section`
  background: linear-gradient(rgba(23, 34, 52, 0.6), rgba(23, 34, 52, 0.6)),
    url(${background}) lightgray 50% / cover no-repeat;
  background-position: center;
  width: 100vw;
  //max-height: 1024px;
  padding: 30vh 30px;
  @media ${device.tablet} {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media ${device.desktop} {
    padding-left: 80px;
    padding-right: 80px;
  }
  text-align: center;
  color: #fff;
  position: relative;
`;

export const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 24px;
  line-height: 40px;
  @media ${device.tablet} {
    font-size: 48px;
    line-height: 60px;
  }
  @media ${device.laptop} {
    font-size: 64px;
    line-height: 80px;
  }
  @media ${device.desktop} {
    font-size: 80px;
    line-height: 100px;
  }
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  letter-spacing: -0.48px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 24px;
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 28px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    line-height: 32px;
  }
  @media ${device.desktop} {
    font-size: 44px;
    line-height: 48px;
    padding-left: 200px;
    padding-right: 200px;
    margin-bottom: 60px;
  }
`;

export const HeroButton = styled.button`
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: transparent;
  color: #fff;
  font-family: Merriweather;
  font-weight: 700;
  padding: 10px 24px;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 28px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 34px;
  }
  @media ${device.desktop} {
    font-size: 40px;
    line-height: 54px;
    padding: 16px 32px;
    border: 2px solid #fff;
  }
`;
