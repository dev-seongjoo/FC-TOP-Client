import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, NoticeBoard } from "./styled";
import Slide from "../../components/Main/Slide/Slide";
import PastMatch from "../../components/Main/PastMatch/PastMatch";
import FutureMatch from "../../components/Main/FutureMatch/FutureMatch";
import PersonalRank from "../../components/Main/PersonalRank/PersonalRank";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Slide />
        <NoticeBoard>
          <PastMatch />
          <FutureMatch />
          <PersonalRank />
        </NoticeBoard>
      </Container>
    </>
  );
};

export default HomePage;
