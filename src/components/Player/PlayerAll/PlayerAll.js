import {
  Container,
  EngName,
  KorName,
  Num,
  Title,
  Position,
  ProfileImg,
  ProfileImgContainer,
  CardFront,
  CardBack,
  Card,
  CardContainer,
  Field,
} from "./styled";

import bk from "../../../assets/bk.png";

const PlayerAll = () => {
  const dummyData = [
    {
      id: 1,
      num: 11,
      korName: "김성주",
      engName: "KIM SEONGJOO",
      position: "CAM",
    },
    {
      id: 2,
      num: 7,
      korName: "홍길동",
      engName: "HONG GILDONG",
      position: "ST",
    },
    {
      id: 3,
      num: 10,
      korName: "이순신",
      engName: "LEE SUNSHIN",
      position: "CM",
    },
    {
      id: 4,
      num: 3,
      korName: "유관순",
      engName: "YOO KWAN SOON",
      position: "CB",
    },
    {
      id: 5,
      num: 21,
      korName: "김영희",
      engName: "KIM YOUNGHEE",
      position: "CF",
    },
    {
      id: 6,
      num: 5,
      korName: "박철수",
      engName: "PARK CHULSOO",
      position: "RW",
    },
    {
      id: 7,
      num: 9,
      korName: "김민지",
      engName: "KIM MINJI",
      position: "LW",
    },
    {
      id: 8,
      num: 20,
      korName: "이동욱",
      engName: "LEE DONGWOOK",
      position: "CB",
    },
    {
      id: 9,
      num: 8,
      korName: "장영실",
      engName: "JANG YOUNGSIL",
      position: "CM",
    },
    {
      id: 10,
      num: 17,
      korName: "송하나",
      engName: "SONG HANA",
      position: "CDM",
    },
    {
      id: 11,
      num: 11,
      korName: "김성주",
      engName: "KIM SEONGJOO",
      position: "CAM",
    },
    {
      id: 12,
      num: 7,
      korName: "홍길동",
      engName: "HONG GILDONG",
      position: "ST",
    },
    {
      id: 13,
      num: 10,
      korName: "이순신",
      engName: "LEE SUNSHIN",
      position: "CM",
    },
    {
      id: 14,
      num: 3,
      korName: "유관순",
      engName: "YOO KWAN SOON",
      position: "CB",
    },
    {
      id: 15,
      num: 21,
      korName: "김영희",
      engName: "KIM YOUNGHEE",
      position: "CF",
    },
    {
      id: 16,
      num: 5,
      korName: "박철수",
      engName: "PARK CHULSOO",
      position: "RW",
    },
    {
      id: 17,
      num: 9,
      korName: "김민지",
      engName: "KIM MINJI",
      position: "LW",
    },
    {
      id: 18,
      num: 20,
      korName: "이동욱",
      engName: "LEE DONGWOOK",
      position: "CB",
    },
    {
      id: 19,
      num: 8,
      korName: "장영실",
      engName: "JANG YOUNGSIL",
      position: "CM",
    },
    {
      id: 20,
      num: 17,
      korName: "송하나",
      engName: "SONG HANA",
      position: "CDM",
    },
  ];

  return (
    <>
      <Title>ALL</Title>
      <Container>
        {dummyData.map((data) => (
          <CardContainer key={data.id}>
            <Card>
              <CardFront>
                <Num>{data.num}</Num>
                <KorName>{data.korName}</KorName>
                <EngName>{data.engName}</EngName>
                <Position>{data.position}</Position>
                <ProfileImgContainer>
                  <ProfileImg src={bk} />
                </ProfileImgContainer>
              </CardFront>
              <CardBack>111</CardBack>
            </Card>
          </CardContainer>
        ))}
      </Container>
    </>
  );
};

export default PlayerAll;
