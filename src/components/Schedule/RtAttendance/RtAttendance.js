import * as S from "./styled";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import KakaoMap from "../../KakaoMap/KakaoMap";

const RtAttendance = () => {
  const { match } = useParams();
  const [locationPosition, setLocationPosition] = useState(
    "37.761615734035495,126.74125327825291"
  );
  const [myPosition, setMyPosition] = useState(null);
  const [distance, setDistance] = useState(null);
  const [moveLocationPosition, setMoveLocationPosition] = useState(false);
  const [moveMyPosition, setMoveMyPosition] = useState(false);

  const fetchLocationPosition = async () => {
    const position = await axios.get(
      `http://localhost:4000/locationposition/${match}`
    );

    setLocationPosition(position.data.LOCATION_POSITION);
  };

  useEffect(() => {
    fetchLocationPosition();
  }, []);

  const handleLocationClick = () => {
    setMoveMyPosition(false);
    setMoveLocationPosition(true);
    console.log("hi");
  };

  const handleMyLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setMoveLocationPosition(false);
          setMyPosition(`${latitude.toString()}, ${longitude.toString()}`);
        },
        (error) => {
          console.error("에러 발생:", error);
        }
      );
      setMoveLocationPosition(false);
      setMoveMyPosition(true);
      console.log("hihi");
    } else {
      console.log("Geolocation API를 지원하지 않습니다.");
    }
  };

  function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 지구의 반지름 (단위: km)
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    setDistance(Math.floor(distance * 1000));
  }

  useEffect(() => {
    if (myPosition !== null) {
      const [locationLatitude, locationLongitude] = locationPosition
        .split(",")
        .map(parseFloat);
      const [myLatitude, myLongitude] = myPosition.split(",").map(parseFloat);
      haversineDistance(
        locationLatitude,
        locationLongitude,
        myLatitude,
        myLongitude
      );
    }
  }, [myPosition]);

  return (
    <>
      <S.Title>실시간 출석</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.Notice>모임 위치 반경 30m 내에서만 출석 가능합니다.</S.Notice>
        <S.DistanceNotice>모임 위치까지 거리: {distance}m</S.DistanceNotice>
        <KakaoMap
          position={locationPosition}
          myPosition={myPosition}
          moveLocationPosition={moveLocationPosition}
          moveMyPosition={moveMyPosition}
        />
        <S.MyLocationBtn onClick={handleLocationClick}>
          모임 위치 확인
        </S.MyLocationBtn>
        <S.MyLocationBtn onClick={handleMyLocationClick}>
          현재 위치 확인
        </S.MyLocationBtn>
      </S.Container>
    </>
  );
};

export default RtAttendance;
