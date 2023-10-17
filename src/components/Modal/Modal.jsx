import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ContentContainer,
  HeaderBar,
  Image,
  LoginForm,
  ModalContent,
  Overlay,
  Title,
  Label,
  Input,
  SignupLink,
  SigninButton,
  SignupText,
} from "./Modal.styled";
import image from "../../images/modal-image.jpg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setEmail("");
    setPassword("");
    form.reset();
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <HeaderBar />
        <ContentContainer>
          <Image src={image} />
          <LoginForm autoComplete="off" onSubmit={handleSubmit}>
            <Title>Login</Title>
            <Label>
              Email
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
              />
            </Label>
            <Label>
              Password
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
              />
            </Label>
            <SignupLink
              href="#root"
              onClick={handleBackdropClick}
              style={{ display: "block", textAlign: "end", marginTop: 10 }}
            >
              Forgot password?
            </SignupLink>
            <SigninButton type="submit" onClick={onLogin}>
              Sign In
            </SigninButton>
            <SignupText>
              Don't have an account?{" "}
              <span>
                <SignupLink href="#root" onClick={handleBackdropClick}>
                  Sign Up
                </SignupLink>
              </span>
            </SignupText>
          </LoginForm>
        </ContentContainer>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};
