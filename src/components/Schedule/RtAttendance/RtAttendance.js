import * as S from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const [matchStartTime, setMatchStartTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [checkLate, setCheckLate] = useState(0);
  const [isDistanceExceeded, setIsDistanceExceeded] = useState(true);

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
    return Math.floor(distance * 1000);
  }

  const fetchLocationPosition = async () => {
    const position = await axios.get(
      `http://localhost:4000/locationposition/${match}`
    );

    setLocationPosition(position.data.LOCATION_POSITION);
  };

  const fetchMatchStartTime = async () => {
    try {
      const matchData = await axios.get(
        `http://localhost:4000/matchstarttime/${match}`
      );

      const { DATE, DURATION, CHECK_LATE } = matchData.data;

      setMatchStartTime(new Date(DATE));
      setDuration(DURATION);
      setCheckLate(CHECK_LATE);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchLocationPosition();
    fetchMatchStartTime();
  }, []);

  const handleLocationClick = () => {
    setMoveMyPosition(false);
    setMoveLocationPosition(true);
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
    } else {
      console.log("Geolocation API를 지원하지 않습니다.");
    }
  };

  const handleAttendanceClick = () => {
    console.log("출석 ㅊㅋㅊㅋ");
  };

  useEffect(() => {
    if (myPosition !== null) {
      const [locationLatitude, locationLongitude] = locationPosition
        .split(",")
        .map(parseFloat);
      const [myLatitude, myLongitude] = myPosition.split(",").map(parseFloat);
      if (
        haversineDistance(
          locationLatitude,
          locationLongitude,
          myLatitude,
          myLongitude
        ) > 30
      ) {
        setIsDistanceExceeded(true);
      } else {
        setIsDistanceExceeded(false);
      }
    }
  }, [myPosition]);

  const formatTwoDigits = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  // const isDistanceExceeded = distance > 30;

  const now = new Date(); // 현재 시간

  const matchStartTimeMinusCheckLateHours = matchStartTime
    ? formatTwoDigits(
        new Date(matchStartTime.getTime() - checkLate * 60 * 1000).getHours()
      )
    : null;

  const matchStartTimeMinusCheckLateMinutes = matchStartTime
    ? formatTwoDigits(
        new Date(matchStartTime.getTime() - checkLate * 60 * 1000).getMinutes()
      )
    : null;

  const matchEndTimePlusDuration = matchStartTime
    ? new Date(matchStartTime.getTime() + duration * 60 * 60 * 1000)
    : null;

  const matchStartTimePlusDurationHours = matchStartTime
    ? formatTwoDigits(
        new Date(
          matchStartTime.getTime() + duration * 60 * 60 * 1000
        ).getHours()
      )
    : null;

  const matchStartTimePlusDurationMinutes = matchStartTime
    ? formatTwoDigits(
        new Date(
          matchStartTime.getTime() + duration * 60 * 60 * 1000
        ).getMinutes()
      )
    : null;

  const isAttendanceEnabled =
    matchStartTime &&
    now.getTime() >= matchStartTime.getTime() - checkLate * 60 * 1000 &&
    now.getTime() <= matchEndTimePlusDuration.getTime() &&
    !isDistanceExceeded;

  return (
    <>
      <S.Title>실시간 출석</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.NoticeWrapper>
          <S.Notice>
            <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
              {matchStartTimeMinusCheckLateHours}시{" "}
              {matchStartTimeMinusCheckLateMinutes}분
            </span>{" "}
            부터{" "}
            <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
              {matchStartTimePlusDurationHours}시{" "}
              {matchStartTimePlusDurationMinutes}분
            </span>{" "}
            까지 출석 가능합니다.
          </S.Notice>
          <S.Notice>
            모임 위치 반경{" "}
            <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>30m</span>{" "}
            내에서만 출석 가능합니다.
          </S.Notice>
          <S.DistanceNotice>
            모임 위치까지 거리:{" "}
            <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
              {distance}m
            </span>
          </S.DistanceNotice>
        </S.NoticeWrapper>
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
        <S.AttendanceBtn
          disabled={!isAttendanceEnabled}
          onClick={handleAttendanceClick}
        >
          출석
        </S.AttendanceBtn>
      </S.Container>
    </>
  );
};

export default RtAttendance;
