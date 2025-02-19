import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as items from "./Styled/MatchOverviewAdmin.main.styles";
import { Card, NavigationBar, Dropdown } from "../../components/Components";
import request from "../../Api/request";

export default function MatchOverviewAdmin() {
  const navigate = useNavigate();

  const [seniorOptions, setSeniorOptions] = useState([]); // Dropdown 옵션 리스트
  const [seniorLists, setSeniorLists] = useState([]); // 어르신 리스트
  const [selectedSenior, setSelectedSenior] = useState(null); // 선택된 seniorId
  const [matchRequests, setMatchRequests] = useState([]); // 매칭 추천 리스트
  const [seniorInfo, setSeniorInfo] = useState(null); // 선택된 어르신 정보

  // 마운트 시 '/senior' GET 요청하여 seniorOptions 설정
  useEffect(() => {
    const fetchSeniorList = async () => {
      try {
        const response = await request.get("/senior");
        if (response.isSuccess) {
          setSeniorLists(response.result.seniorList);
          const options = response.result.seniorList.map((senior) => ({
            value: senior.seniorId,
            label: senior.name,
          }));
          setSeniorOptions(options);
        } else {
          console.error(
            "어르신 목록을 가져오는 데 실패했습니다:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("어르신 목록을 가져오는 중 오류 발생:", error);
      }
    };

    fetchSeniorList();
  }, []);

  // Dropdown 선택 시 실행
  const handleSeniorChange = async (seniorId) => {
    setSelectedSenior(seniorId);

    // 선택된 어르신 정보 설정
    const selected = seniorLists.find((senior) => {
      console.log(senior.seniorId, " :::: ", seniorId);
      return senior.seniorId === Number(seniorId);
    });
    setSeniorInfo(selected);

    try {
      const response = await request.get(`/senior/${seniorId}/recommend`);
      if (response.isSuccess) {
        setMatchRequests(response.result.recommendList);
      } else {
        console.error(
          "추천 리스트를 가져오는 데 실패했습니다:",
          response.data.message
        );
      }
    } catch (error) {
      console.error("매칭 추천 리스트를 가져오는 중 오류 발생:", error);
    }
  };

  const onHandle = (id) => {
    navigate(`/admin/matchoverview/${id}`, {
      state: { seniorId: seniorInfo?.seniorId },
    });
  };

  return (
    <items.Container>
      <items.Head>매칭 관리</items.Head>
      <items.DropdownBox>
        <Dropdown
          options={seniorOptions}
          placeholder="어르신 선택"
          onChange={(e) => handleSeniorChange(e.target.value)}
          width="144px"
        />
      </items.DropdownBox>

      {/* 선택된 어르신 정보 표시 */}
      {seniorInfo && (
        <items.CardContainer>
          <items.CardInfoContainer>
            <items.CardProfile
              src={seniorInfo.profileUrl || "/img/profile-default.svg"}
              alt="프로필"
            />
            <items.CardInfoBox>
              <items.CardName>{seniorInfo.name || null}</items.CardName>
              <items.CardInfoBar>
                <items.CardInfoText>
                  {seniorInfo.sex || null}
                </items.CardInfoText>
                <items.CardInfoText>
                  {seniorInfo.birthday || null}
                </items.CardInfoText>
              </items.CardInfoBar>
              <items.CardInfoBar>
                <items.CardInfoText>
                  {seniorInfo.address || null}
                </items.CardInfoText>
              </items.CardInfoBar>
            </items.CardInfoBox>
          </items.CardInfoContainer>
        </items.CardContainer>
      )}

      {/* 매칭 추천 리스트 (Dropdown 선택 후에만 렌더링) */}
      {selectedSenior && (
        <items.MatchRequestListContainer>
          <items.HeaderContainer>
            <items.Head3>매칭 추천 리스트</items.Head3>
          </items.HeaderContainer>
          <items.MatchRequestList>
            {matchRequests.map((item, index) => (
              <Card
                key={index}
                contents={item}
                onClick={() => onHandle(item.memberId)}
              />
            ))}
          </items.MatchRequestList>
        </items.MatchRequestListContainer>
      )}

      <NavigationBar dashboard={true} />
    </items.Container>
  );
}
