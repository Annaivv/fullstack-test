import { Button } from "../Button/Button";
import { Container } from "./Header.styled";

export const Header = () => (
  <Container>
    <div>MyLogo</div>
    <div>
      <Button>Log In</Button>
      <Button>Sign Up</Button>
    </div>
  </Container>
);
