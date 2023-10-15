import { useState } from "react";
import { Container, StyledButton, Logo } from "./Header.styled";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <Logo>My Logo</Logo>
        <div>
          <StyledButton onClick={modalOpen}>Log In</StyledButton>
          <StyledButton>Sign Up</StyledButton>
        </div>
      </Container>

      {isModalOpen && <Modal onClose={modalClose} />}
    </>
  );
};
