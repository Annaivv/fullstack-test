import { useState } from "react";
import { Container, StyledButton, Logo } from "./Header.styled";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Container>
        <Logo>My Logo</Logo>
        {isLoggedIn ? (
          <StyledButton onClick={onLogout}>Log Out</StyledButton>
        ) : (
          <div>
            <StyledButton onClick={modalOpen}>Log In</StyledButton>
            <StyledButton
              style={{
                backgroundColor: "#B29F7E",
                color: "#fff",
                border: "2px solid #B29F7E",
                marginLeft: 10,
              }}
            >
              Sign Up
            </StyledButton>
          </div>
        )}
      </Container>

      {isModalOpen && <Modal onClose={modalClose} onLogin={onLogin} />}
    </>
  );
};
