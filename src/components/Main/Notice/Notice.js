import FutureMatch from "../FutureMatch/FutureMatch";
import PastMatch from "../PastMatch/PastMatch";
import PersonalRank from "../PersonalRank/PersonalRank";
import { Container, NoticeContainer } from "./styled";

const Notice = () => {
  return (
    <Container>
      <NoticeContainer>
        <PastMatch />
        <FutureMatch />
        <PersonalRank />
      </NoticeContainer>
    </Container>
  );
};

export default Notice;
