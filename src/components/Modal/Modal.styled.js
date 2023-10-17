import styled from "styled-components";
import background from "../../images/modal-image.jpg";

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
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 65%;
`;

export const HeaderBar = styled.div`
  height: 80px;
  flex-shrink: 0;
  background: #172234;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ContentContainer = styled.div`
  width: 35%;
  margin: 0 0 0 auto;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10vh 100px;
  font-family: "Merriweather", serif;
  font-weight: 700;
`;

export const Title = styled.h3`
  font-size: 28px;
  line-height: 34px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
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
`;

export const SignupLink = styled.a`
  text-decoration: none;
  color: #b29f7e;
  font-family: Lato;
  font-size: 14px;
  line-height: 22px;
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
`;

export const SignupText = styled.p`
  margin-top: 10px;
  color: #172234;
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  line-height: 22px;
`;
