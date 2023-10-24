import React from 'react';
import CommonStyles from '../../utils/CommonStyles';
import styled from 'styled-components';

function Main() {
  console.log(process.env.REACT_APP_ACCESS_SECRET);
  return (
    <>
      <CommonStyles>
        <PaddingTop>
          <div>shit</div>
          <h1>position: sticky</h1>
          <p>
            이용할 수 있는 <code>position: sticky</code>라고 불리우는 또 다른
            위치잡기 값이 있습니다. 이것은 다른 위치잡기보다 다소 새로운
            것입니다. 이것은 기본적으로 상대 위치잡기와 고정 위치잡기가 혼합된
            하이브리드로서, 위치잡기 요소가 특정 임계점에(예로 뷰포트의
            상단으로부터 10px) 스크롤될 때까지 상대 위치잡기처럼 행동할 수
            있다가 그 뒤에 위치가 고정됩니다. 예를 들어, 탐색 막대가 특정
            지점까지 페이지와 함께 스크롤한 다음 페이지 상단에 흡착되도록 사용할
            수 있습니다.
          </p>
          <p>
            이용할 수 있는 <code>position: sticky</code>라고 불리우는 또 다른
            위치잡기 값이 있습니다. 이것은 다른 위치잡기보다 다소 새로운
            것입니다. 이것은 기본적으로 상대 위치잡기와 고정 위치잡기가 혼합된
            하이브리드로서, 위치잡기 요소가 특정 임계점에(예로 뷰포트의
            상단으로부터 10px) 스크롤될 때까지 상대 위치잡기처럼 행동할 수
            있다가 그 뒤에 위치가 고정됩니다. 예를 들어, 탐색 막대가 특정
            지점까지 페이지와 함께 스크롤한 다음 페이지 상단에 흡착되도록 사용할
            수 있습니다.
          </p>
          <p>
            이용할 수 있는 <code>position: sticky</code>라고 불리우는 또 다른
            위치잡기 값이 있습니다. 이것은 다른 위치잡기보다 다소 새로운
            것입니다. 이것은 기본적으로 상대 위치잡기와 고정 위치잡기가 혼합된
            하이브리드로서, 위치잡기 요소가 특정 임계점에(예로 뷰포트의
            상단으로부터 10px) 스크롤될 때까지 상대 위치잡기처럼 행동할 수
            있다가 그 뒤에 위치가 고정됩니다. 예를 들어, 탐색 막대가 특정
            지점까지 페이지와 함께 스크롤한 다음 페이지 상단에 흡착되도록 사용할
            수 있습니다.
          </p>
          <p>
            이용할 수 있는 <code>position: sticky</code>라고 불리우는 또 다른
            위치잡기 값이 있습니다. 이것은 다른 위치잡기보다 다소 새로운
            것입니다. 이것은 기본적으로 상대 위치잡기와 고정 위치잡기가 혼합된
            하이브리드로서, 위치잡기 요소가 특정 임계점에(예로 뷰포트의
            상단으로부터 10px) 스크롤될 때까지 상대 위치잡기처럼 행동할 수
            있다가 그 뒤에 위치가 고정됩니다. 예를 들어, 탐색 막대가 특정
            지점까지 페이지와 함께 스크롤한 다음 페이지 상단에 흡착되도록 사용할
            수 있습니다.
          </p>
          <p>
            이용할 수 있는 <code>position: sticky</code>라고 불리우는 또 다른
            위치잡기 값이 있습니다. 이것은 다른 위치잡기보다 다소 새로운
            것입니다. 이것은 기본적으로 상대 위치잡기와 고정 위치잡기가 혼합된
            하이브리드로서, 위치잡기 요소가 특정 임계점에(예로 뷰포트의
            상단으로부터 10px) 스크롤될 때까지 상대 위치잡기처럼 행동할 수
            있다가 그 뒤에 위치가 고정됩니다. 예를 들어, 탐색 막대가 특정
            지점까지 페이지와 함께 스크롤한 다음 페이지 상단에 흡착되도록 사용할
            수 있습니다.
          </p>
          <div>shit</div> <div>shit</div> <div>shit</div> <div>shit</div>{' '}
          <div>shit</div> <div>shit</div> <div>shit</div> <div>shit</div>{' '}
          <div>shit</div> <div>shit</div> <div>shit</div> <div>shit</div>{' '}
          <div>shit</div>
          <div>shit</div>
        </PaddingTop>
      </CommonStyles>
    </>
  );
}

export default Main;

export const PaddingTop = styled.div`
  padding-top: 9rem;
`;
