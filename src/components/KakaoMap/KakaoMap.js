import React, { useEffect } from "react";
import * as S from "./styled";
const { kakao } = window;

const KakaoMap = ({
  position,
  width,
  height,
  margin,
  onAddressUpdate,
  onPositionUpdate,
  search,
}) => {
  const [latitude, longitude] = position.split(",").map(parseFloat);
  const locationPosition = new kakao.maps.LatLng(latitude, longitude);

  const searchDetailAddrFromCoords = (coords, callback) => {
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  };

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 클릭한 위치를 표시할 마커입니다
    var marker = new kakao.maps.Marker();

    if (search) {
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          var bounds = new kakao.maps.LatLngBounds();

          for (var i = 0; i < data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      }

      // 장소 검색 객체를 생성합니다
      var ps = new kakao.maps.services.Places();

      // 키워드로 장소를 검색합니다
      ps.keywordSearch(search, placesSearchCB);
    }

    if (onPositionUpdate) {
      // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        // 마커의 좌표를 부모 컴포넌트로 업데이트
        onPositionUpdate(mouseEvent.latLng);

        // 마커를 클릭한 위치에 표시합니다
        marker.setPosition(mouseEvent.latLng);
        marker.setMap(map);
      });
    } else if (onAddressUpdate) {
      searchDetailAddrFromCoords(locationPosition, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const roadAddr = !!result[0].road_address
            ? result[0].road_address.address_name
            : "";
          const lotAddr = result[0].address.address_name;
          const addr = [roadAddr, lotAddr];

          onAddressUpdate(addr);

          marker.setPosition(locationPosition);
          marker.setMap(map);
        }
      });
    }
  }, [position, search]);

  return (
    <S.Container
      id='map'
      style={{ width: width, height: height, margin: margin }} // 속성 값을 style 속성에 적용
    ></S.Container>
  );
};

export default KakaoMap;
