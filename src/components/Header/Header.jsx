import { useState } from "react";
import { Container, StyledButton } from "./Header.styled";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
    console.log("Open!");
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <div>MyLogo</div>
        <div>
          <StyledButton onClick={modalOpen}>Log In</StyledButton>
          <StyledButton>Sign Up</StyledButton>
        </div>
      </Container>

      {isModalOpen && <Modal onClose={modalClose} />}
    </>
  );
};
