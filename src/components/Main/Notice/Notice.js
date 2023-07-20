import FutureMatch from "../FutureMatch/FutureMatch";
import PastMatch from "../PastMatch/PastMatch";
import PersonalRank from "../PersonalRank/PersonalRank";
import { Container, NoticeContainer } from "./styled";

const Notice = () => {
  return (
    <NoticeContainer>
      <PastMatch />
      <FutureMatch />
      <PersonalRank />
    </NoticeContainer>
  );
};

export default Notice;
