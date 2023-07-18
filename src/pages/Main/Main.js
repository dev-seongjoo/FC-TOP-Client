import React from "react";
import Slide from "../../components/Main/Slide/Slide";
import Footer from "../../components/Main/Footer/Footer";
import Notice from "../../components/Main/Notice/Notice";
import { Container } from "./styled";

const HomePage = () => {
  return (
    <Container>
      <Slide />
      <Notice />
      <Footer />
    </Container>
  );
};

export default HomePage;
