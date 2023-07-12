import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slide from "../../components/Main/Slide/Slide";
import Footer from "../../components/Main/Footer/Footer";
import Notice from "../../components/Main/Notice/Notice";
import { Container } from "./styled";

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Slide />
      <Notice />
      <Footer />
    </Container>
  );
};

export default HomePage;
