# 🎂 atelier-de-cheesebon🧡 
![CHEESEBONIMAGE](https://github.com/Jinyang-Park/cheese/assets/80263801/09b37e50-5f14-4a34-97c0-d020515ba182)

**프로젝트 기간**  : 

🔗 [서비스 배포 링크](https://atelier-de-cheesebon.com/)
<br/>
<br/>


## 📢 프로젝트 소개

### Crafting Unique Wedding Cakes for Your Special Day🧡
* **Express, MySQL**을 사용한 케이크 예약 시스템 서비스입니다.
* 날짜와 시간을 선택해 웨딩케이크 상담 예약과 일반 케이크 예약을 **빠르고 편리**하게 할 수 있습니다.
* Naver Map을 통해 가게 위치를 확인할 수 있으며, 유니크하고 시즌에 맞는 케이크 제작 서비스를 제공합니다.
<br/>
<br/>

## 🖥 기술 스택
![다이어그램](https://github.com/Jinyang-Park/cheese/assets/80263801/95862ffb-1b20-431a-bc83-bbec8065f830)


| 구분                 | 사용 기술          |
| -------------------- | ------------------ |
| 언어              | JavaScript            |
| 프레임워크                   | React, Express           |
| 번들링 도구                 | Webpack, Babel           |
| 서버             | Express, Node.js, JWT, MySQL        |
| DB                   | MySQL (Amazon RDS) |
| 클라이언트 상태 관리 | react-redux          |
| 배포             | Amazon EC2, S3, CloudFront, Route 53, ELB           |
| HTTP Client             | axios            |
| 패키지 관리 매니저   | npm         |
| 스타일링             | styled-components           |
<br/>
<br/>

## 🗂 디렉토리 구조

```
📦client
 ┣ 📂common
 ┣ 📂components
 ┃ ┣ 📂Cart
 ┃ ┣ 📂Date
 ┃ ┣ 📂Layout
 ┃ ┣ 📂Location
 ┃ ┣ 📂Main
 ┃ ┣ 📂Menudetail
 ┃ ┗ 📂Mypage
 ┣ 📂contexts
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂Location
 ┃ ┃ ┣ 📜Location.jsx
 ┃ ┃ ┗ 📜Location.style.jsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜Login.jsx
 ┃ ┣ 📂Main
 ┃ ┃ ┗ 📜Main.jsx
 ┃ ┣ 📂Menu
 ┃ ┃ ┗ 📜Menu.jsx
 ┃ ┣ 📂Menudetail
 ┃ ┃ ┗ 📜Menudetail.jsx
 ┃ ┣ 📂MenuInformationDetail
 ┃ ┃ ┗ 📜MenuInformationDetail.jsx
 ┃ ┣ 📂Menupick
 ┃ ┃ ┗ 📜Menupick.jsx
 ┃ ┣ 📂Mypage
 ┃ ┃ ┗ 📜Mypage.jsx
 ┃ ┣ 📂Reservation
 ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┗ 📜Reservation.jsx
 ┃ ┣ 📂ReservationDate
 ┃ ┃ ┗ 📜ReservationDate.jsx
 ┃ ┣ 📂ShoppingCart
 ┃ ┃ ┗ 📜ShoppingCart.jsx
 ┃ ┗ 📂Signup
 ┃ ┃ ┗ 📜Signup.jsx
 ┣ 📂public
 ┣ 📂redux
 ┣ 📂service
 ┣ 📂shared
 ┣ 📂utils
 ┣ 📜App.jsx
 ┗ 📜index.jsx
```

- `apis`: api 호출 관련 파일
- `common`: 공통적으로 사용되는 파일
- `components`: 각 페이지 내부 컴포넌트
- `contexts`: 컨텍스트 관련 파일
- `hooks`: 커스텀 훅 파일
- `pages`: 각 페이지 관련 파일
- `redux`: 리덕스 관련 파일
- `shared`: 공통으로 사용되는 파일
- `utils`: 기타 특정 작업 수행하는 함수 파일
<br/>
<br/>

## ⭐️ 주요 기능
### 📌 신간, 베스트셀러, 중고도서, 테마추천 및 최근 본 상품
* 알라딘 API를 활용해 다양한 책을 찾아보고 구매할 수 있으며, 최근 본 상품을 다시 확인할 수도 있습니다.

### 📌 검색 및 인기 검색어 서비스
* 개인 검색 기록과 인기 검색어를 기반으로 도서를 검색하고 추천받을 수 있습니다.

### 📌 커뮤니티 
* 유저들과 독후감을 공유하고 독서 모임을 만들 수 있습니다.
* 삽니다, 팝니다 탭을 통해 원하는 중고 도서를 구매하거나 판매할 수 있습니다.
* 최신 인기 글을 확인하고, 좋아요를 누르거나 댓글을 남길 수 있습니다.
<br/>
<br/>

## 💡 구현 기능
### 로그인/ 회원가입
* Express와 MySQL을 활용한 유효성 검사와 회원가입 기능 구현

### 예약 페이지
* 웨딩케이크 상담 및 일반 케이크 예약 가능
* 약 시 날짜와 시간 선택, 케이크 단과 수량 조절, 테이스팅 종류 3가지 중 선택 가능

### 마이페이지
* 닉네임 변경 능
* 주문한 상품의 취소 기능

### 장바구니 
* 예약 날짜, 시간 변경 가능
* 주문 수량 조절 및 예약 상품 추가 기능

### 위치페이지
* Naver Map API를 이용해 가게 위치 확인 및 네이버 가게 정보 페이지로의 이동 가능
  
### 메뉴패이지
* 검색 기능을 통한 원하는 케이크 상품 조회
* 케이크 종류별로 상품 확인 가능
  
