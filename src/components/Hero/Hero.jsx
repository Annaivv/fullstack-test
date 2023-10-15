import { useState } from "react";
import { Header } from "../Header/Header";
import { HeroButton, HeroSection, Text, Title } from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <Header />
      <Title>The chemical negatively charged</Title>
      <Text>
        Numerous calculations predict, and experiments confirm, that the force
        field reflects the beam, while the mass defect is not formed. The
        chemical compound is negatively charged. Twhile the mass defect is{" "}
      </Text>
      <HeroButton>Get Started</HeroButton>
    </HeroSection>
  );
};
