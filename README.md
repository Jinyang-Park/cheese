# 📖 Wooyeon
![우연](https://github.com/FE-Dev-Labs/WooyeonBook/assets/80263801/86f67db8-2976-4d9d-86b2-641a1a3bd564)

**프로젝트 기간**  : 2024.02.10 ~ 2024.05.04

🔗 [서비스 배포 링크](https://atelier-de-cheesebon.com/)
<br/>
<br/>


## 📢 프로젝트 소개

### Crafting Unique Wedding Cakes for Your Special Day
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
📦src
 ┣ 📂apis
 ┣ 📂app
 ┃ ┣ 📂(auth)
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂@auth
 ┃ ┃ ┣ 📂(.)login
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂(.)signup
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜default.tsx
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📂callback
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂best
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂cart
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂category
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂community
 ┃ ┃ ┣ 📂(detail)
 ┃ ┃ ┃ ┗ 📂detail
 ┃ ┃ ┃ ┃ ┣ 📂bookBuying
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[doc_id]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂bookMeeting
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[doc_id]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂bookReport
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[doc_id]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📂bookSelling
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[doc_id]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂(post)
 ┃ ┃ ┃ ┗ 📂post
 ┃ ┃ ┃ ┃ ┗ 📂new
 ┃ ┃ ┃ ┃ ┃ ┣ 📂bookBuying
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📂bookMeeting
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📂bookReport
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📂bookSelling
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜layout.tsx
 ┃ ┃ ┣ 📂(update)
 ┃ ┃ ┃ ┗ 📂update
 ┃ ┃ ┃ ┃ ┣ 📂bookBuying
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[docId]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂bookMeeting
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[docId]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂bookReport
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[docId]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂bookSelling
 ┃ ┃ ┃ ┃ ┃ ┗ 📂[docId]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜layout.tsx
 ┃ ┃ ┗ 📂(view)
 ┃ ┃ ┃ ┣ 📂bookBuying
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂bookMeeting
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂bookReport
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂bookSelling
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂detail
 ┃ ┃ ┗ 📂[doc.id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂mypage
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂new
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂orderComplete
 ┃ ┃ ┗ 📂[orderId]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂theme
 ┃ ┃ ┣ 📂[slug]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂used
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜not-found.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂hooks
 ┣ 📂recoil
 ┣ 📂styles
 ┣ 📂types
 ┗ 📂utils
```

- `apis`: api 호출 관련 파일
- `app/files`: 각 페이지 관련 파일
- `assets`: 로고 및 이미지 관련 파일
- `components`: 각 페이지 내부 컴포넌트
- `hooks`: 커스텀 훅 파일
- `recoil`: 리코일 관련 파일
- `styles`: 스타일 관련 파일
- `types`: 타입 관련 파일
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
### 로그인/회원가입
* 유효성 검사 및 우편번호 서비스(Daum postcode api)를 이용한 회원가입

### 헤더
* 카테고리, 베스트셀러, 테마추천, 중고도서, 커뮤니티로의 링크 및 페이지 이동 시 해당 메뉴 활성화

### 검색창 및 검색 페이지
* 도서, 저자 출판사 키워드로 일치하는 도서 조회
* 최근 검색어, 인기 검색어 조회

### 최근 본 상품
* 유저가 최근 접근한 도서 최대 9개까지 사이드바에서 조회 가능
* 본 상품 삭제 및 페이지네이션 기능

### 메인
* 추천 도서 슬라이더
* 대표 신간도서, 테마추천, 베스트셀러, 중고도서 조회
<br/>

### 분야, 인기, 신간, 중고도서
* 카테고리 별 도서 조회 및 페이지네이션 기능
  
### 테마추천
* 12명의 아티스트의 추천도서 조회
  
### 도서 디테일
* 저자, 출판사, 가격, 전자책 여부 등 책의 상세 정보를 확인
* 아코디언 UI로 책 설명, 정보고시, 중고 도서 정보를 확인
* 사용자들의 한줄평을 확인
* 장바구니에 추가하거나 바로 주문

### 장바구니
* 도서 디테일페이지에서 추가한 도서 조회, 수정, 삭제, 주문 기능

#### 커뮤니티
* 독후감, 모임, 삽니다, 팝니다 탭을 통한 유저 게시글 조회 및 생성
* 내가 쓴 글 수정 및 삭제
* 주간 인기글 조회
* 검색을 통한 게시글 찾기 기능
  
#### 게시글 작성
* 독후감, 모임, 삽니다, 팝니다 탭 별 게시글 작성 기능
* Toast UI 에디터를 통한 마크다운 작성 기능 및 이미지 추가 기능
* 독후감
- 검색을 통한 도서 선택
* 모임
- 카카오 채팅방 URL 및 모집 마감일, 모집 인원 선택 기능
* 삽니다/팝니다
- 판매 가격 및 판매/나눔 선택 기능

#### 게시글 상세
* 좋아요, 공유, 조회수
* 댓글 조회 및 생성
* 내가 쓴 댓글 수정 및 삭제

### 마이페이지
* 내가 쓴 글(독후감/모임/삽니다/팝니다/찜한 목록)을 필터링하여 조회
* 닉네임, 주소, 전화번호, 비밀번호를 수정
* 주문 내역을 확인 및 취소

