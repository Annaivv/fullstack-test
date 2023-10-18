import styled from "styled-components";
import background from "../../images/image-bg-hero.jpg";
import { device } from "../Layout";

export const HeroSection = styled.section`
  background: linear-gradient(rgba(23, 34, 52, 0.6), rgba(23, 34, 52, 0.6)),
    url(${background}) lightgray 50% / cover no-repeat;
  background-position: center;
  width: 100vw;
  max-height: 1024px;
  padding: 30vh 50px;
  text-align: center;
  color: #fff;
  position: relative;
`;

export const Title = styled.h1`
  // font-size: 64px;
  // font-style: normal;
  // font-weight: 700;
  // line-height: 80px;
  // margin-bottom: 4px;
`;

export const Text = styled.p`
  // width: 822px;
  // margin: 0 auto;
  // margin-bottom: 30px;
  // font-family: "Lato", sans-serif;
  // font-size: 24px;
  // font-style: normal;
  // font-weight: 400;
  // line-height: 32px;
  // letter-spacing: -0.48px;
`;

export const HeroButton = styled.button`
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 10px 24px;
  background-color: transparent;
  color: #fff;
  font-family: Merriweather;
  font-size: 20px;
  font-weight: 700;
  line-height: 34px;
`;
