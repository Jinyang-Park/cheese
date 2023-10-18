import React, { useEffect, useState } from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';
import ReservationCalendar from '../../components/Date/ReservationCalendar ';
import ReservationTimetable from '../../components/Date/ReservationTimetable';
import { PiWarningCircleFill } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, Prompt } from 'react-router-dom';
import history from '../../common/history';

function ReservationDate() {
  // 여러 개의 상태 값을 선택하고 싶을 때는 useSelector를 여러 번 사용하면 됩니다
  // 선택한 날짜와 시간을 불러오는 코드 부분
  const ReservationCakeTime = useSelector((state) => state.ReservationsDT.time);
  const ReservationCakeDate = useSelector(
    (state) => state.ReservationsDT.formattedDate
  );

  console.log(ReservationCakeDate, ReservationCakeTime);

  const navigate = useNavigate();

  const hanldeReservationButtonClick = () => {
    // ReservationCakeDate, ReservationCakeTime 콘솔로그 찍으면 null 이라고 뜬다 그래서 조건문 추가
    if (ReservationCakeTime == null || ReservationCakeDate == null) {
      alert('예약시간을 선택해주세요.');
      return;
    } else {
      navigate('/Reservation/date/menupick');
    }
  };

  useEffect(() => {
    const listenBackEvent = () => {
      if (window.confirm('진행중인 예약 정보가 초기화 됩니다.')) {
      } else {
        navigate('/');
      }
    };
    const historyEvent = history.listen(({ action }) => {
      if (action === 'POP') {
        window.confirm('진행중인 예약 정보가 초기화 됩니다.');
      }
    });
    return historyEvent;
  }, []);

  return (
    <CommonStyles>
      <ReservationWrap>
        <ReservationTitle>예약</ReservationTitle>
      </ReservationWrap>
      <ReservationInner>
        {/* 오더 탭 */}
        <ReservationTabUl>
          <ReservationStepLi>
            <ReservationA>일자선택</ReservationA>
          </ReservationStepLi>
          <ReservationStep2Li>
            <ReservationA>메뉴선택</ReservationA>
          </ReservationStep2Li>
        </ReservationTabUl>
        {/* 예약 날짜, 시간 */}
        <ReservationDateWrap>
          <ReservationDatediv>
            <ReservationCalendar />
            {/* 선택, 비활성화 버튼 */}
            <ReservationSelect>
              <ReservationUl>
                <ReservationLi>
                  <ReservationSelectBtn></ReservationSelectBtn>
                  선택
                </ReservationLi>
                <ReservationLi>
                  <ReservationDisabledBtn></ReservationDisabledBtn>
                  불가
                </ReservationLi>
              </ReservationUl>
            </ReservationSelect>
          </ReservationDatediv>
          {/* 시간 버튼 */}
          <ReservationTime>
            <ReservationTimetable />
          </ReservationTime>
          {/* 선택, 비활성화 버튼 */}
          <ReservationSelect2>
            <ReservationUl>
              <ReservationLi>
                <ReservationSelectBtn></ReservationSelectBtn>
                선택
              </ReservationLi>
              <ReservationLi>
                <ReservationDisabledBtn></ReservationDisabledBtn>
                불가
              </ReservationLi>
            </ReservationUl>
          </ReservationSelect2>
          {/*예약 주의사항 */}
        </ReservationDateWrap>
        <ReservationInfo>
          <ReservationFlex>
            <PiWarningIcon />
            <ReservationInfoH2>예약주의사항</ReservationInfoH2>
          </ReservationFlex>
          <ReservationInfoP>
            예약은 최소 2일 전 ~ 최대 7일 전에만 가능합니다.
          </ReservationInfoP>
        </ReservationInfo>
        {/* 예약  버튼*/}
        <ReservationBtnWrap>
          <ReservationBtn onClick={hanldeReservationButtonClick}>
            예약시간 설정하기
          </ReservationBtn>
        </ReservationBtnWrap>
      </ReservationInner>
    </CommonStyles>
  );
}

export default ReservationDate;

export const ReservationWrap = styled.div`
  position: relative;
`;
export const ReservationTitle = styled.h1`
  padding-top: 200px;
  margin: 0 0 100px;
  text-align: center;
  font-size: 1.75em;
  font-weight: 500;
  letter-spacing: 0;
`;
export const ReservationInner = styled.div`
  width: 1366px;
  margin: 0 auto;
  position: relative;
`;
export const ReservationTabUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  -moz-column-gap: 0;
  column-gap: 0;
`;
export const ReservationStepLi = styled.li`
  border-radius: 10px 0 0 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #f1e4ab;
  border-bottom: 5px solid #f1e4ab;
  color: #000;
  font-weight: 500;
  &::before {
    content: 'STEP01';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const ReservationStep2Li = styled.li`
  background-color: #000;
  border-bottom: 5px solid #f1e4ab;
  text-align: center;
  height: 44px;
  line-height: 44px;
  color: #fff;
  border-radius: 0 10px 0 0;
  &::before {
    content: 'STEP02';
    margin-right: 5px;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const ReservationA = styled.a``;
export const ReservationDateWrap = styled.div`
  display: flex;
  padding-bottom: 100px;
  border: 3px solid #f1e4ab;
  border-width: 0 3px 3px 3px;
`;
export const ReservationDatediv = styled.div`
  width: 700px;
  /* float: left; */
  padding: 20px;
`;
export const ReservationSelect = styled.div`
  position: absolute;
  text-align: right;
  width: 48%;
  top: 550px;
  margin-bottom: 20px;
  display: inline-block;
`;
export const ReservationSelect2 = styled.div`
  position: absolute;
  text-align: right;
  width: 100%;
  top: 340px;
  margin-bottom: 20px;
  display: inline-block;
`;
export const ReservationUl = styled.ul`
  width: 90%;
  margin: 0 auto;
`;
export const ReservationLi = styled.li`
  display: inline-block;
  line-height: 20px;
`;
export const ReservationSelectBtn = styled.div`
  border-radius: 50px;
  background-color: #ffa0c5;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  float: left;
`;
export const ReservationDisabledBtn = styled.div`
  border-radius: 50px;
  background-color: #ddd;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 20px;
  float: left;
`;
export const ReservationTime = styled.div`
  /* width: calc(100% - 780px); */
  /* float: right; */
  padding: 20px 20px 30px 30px;
  margin-top: 10px;
`;
export const ReservationInfo = styled.div`
  position: absolute;
  top: 590px;
  padding-left: 20px;
  /* text-indent: -10px; */
  margin: 20px 0 30px;
`;
export const ReservationInfoH2 = styled.h2`
  padding-left: 8px;
  line-height: 30px;
  height: 30px;
  margin-bottom: 20px;
  font-weight: 400;
  text-indent: 0;
`;
export const ReservationInfoP = styled.p`
  margin-bottom: 5px;
  line-height: 1.6;
`;
export const PiWarningIcon = styled(PiWarningCircleFill)`
  font-size: 30px;
  color: #ffa0c5;
`;
export const ReservationFlex = styled.div`
  display: flex;
`;
export const ReservationBtnWrap = styled.div`
  text-align: center;
  margin: 50px auto 20px;
`;
export const ReservationBtn = styled.button`
  background: #ffdb7e;
  border: 1px solid #ffdb7e;
  color: #846e23;
  width: 100%;
  max-width: 240px;
  padding: 15px;
  margin: 3px 1px;
  border-radius: 500px;
  font-size: 1em;
`;
