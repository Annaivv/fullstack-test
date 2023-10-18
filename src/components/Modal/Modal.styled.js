import styled from "styled-components";
import background from "../../images/modal-image.jpg";
import { device } from "../Layout";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(112, 112, 112, 0.8);
  z-index: 5;
`;

export const ModalContent = styled.div`
  width: 80%;
  height: 80vh;
  background-color: #f2f2f2;
  @media ${device.tablet} {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
  }
  @media ${device.laptopL} {
    background-size: 67%;
  }
  @media ${device.desktop} {
    background-size: contain;
  }
`;

export const HeaderBar = styled.div`
  height: 80px;
  flex-shrink: 0;
  background: #172234;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ContentContainer = styled.div`
  @media ${device.tablet} {
    width: 50%;
    margin: 0 auto;
    background-color: #f2f2f2;
  }
  @media ${device.laptop} {
    width: 40%;
    height: calc(80vh - 80px);
    margin: 0 0 0 auto;
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media ${device.laptopL} {
    width: 35%;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Merriweather", serif;
  font-weight: 700;
  padding: 30px 20px;
  @media ${device.tablet} {
    padding: 45px 50px;
  }
  @media ${device.laptop} {
    padding: 60px;
  }
  @media ${device.laptopL} {
    padding: 110px 100px;
  }
  @media ${device.desktop} {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  line-height: 34px;
  @media ${device.desktop} {
    font-size: 60px;
    line-height: 72px;
    margin-bottom: 36px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  @media ${device.desktop} {
    font-size: 32px;
    line-height: 42px;
    margin-top: 36px;
  }
`;

export const Input = styled.input`
  padding: 14px 20px 12px 20px;
  color: #172234;
  background-color: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-family: Lato;
  font-size: 14px;
  line-height: 22px;
  @media ${device.desktop} {
    font-size: 32px;
    line-height: 42px;
    margin-top: 16px;
    padding: 24px 30px;
  }
`;

export const SignupLink = styled.a`
  text-decoration: none;
  color: #b29f7e;
  font-family: Lato;
  font-size: 14px;
  line-height: 22px;
  @media ${device.desktop} {
    font-size: 32px;
    line-height: 42px;
  }
`;

export const SigninButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 11px 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  border-radius: 5px;
  background: #b29f7e;
  border: 2px solid #b29f7e;
  @media ${device.desktop} {
    font-size: 36px;
    line-height: 42px;
    padding: 24px 30px;
  }
`;

export const SignupText = styled.p`
  margin-top: 10px;
  color: #172234;
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  line-height: 22px;
  @media ${device.desktop} {
    font-size: 32px;
    line-height: 42px;
    padding: 24px 30px;
  }
`;
