import * as S from "./styled";
import FutureMatch from "../FutureMatch/FutureMatch";
import PastMatch from "../PastMatch/PastMatch";
import PersonalRank from "../PersonalRank/PersonalRank";

const Notice = () => {
  return (
    <S.Container>
      <PastMatch />
      <FutureMatch />
      <PersonalRank />
    </S.Container>
  );
};

export default Notice;
