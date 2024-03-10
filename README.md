# 프로젝트 소개
**프로젝트 이름 : Prestige Collection 🎫**
<p>제작 기간 : 2024.02.19 ~ 2024.03.01</p> <br>
<p>팀 구성 : 7명 ( 프론트엔드 4명, 백엔드 3명)</p>
<p> 엘리스 SW 엔지니어 트랙 8기 1차 프로젝트 과제로, "쇼핑몰 웹 서비스 제작 프로젝트" 입니다. <br> 실제 서비스 운영이 아닌 기능 구현에 초점을 맞춘 데모 웹 어플리케이션으로 주어진 구현 항목에 따라 제작되었습니다.</p>



## 소개
당신이 원하는 전시 여기 다 있다!<br>
**나만 몰랐던 요즘 전시관을 배달 받아보세요 📦**

[협업 노션🎡 ](https://quark-dianella-5e6.notion.site/1-a9a352e0b16b41058c562af70b6b997a?pvs=4)<br>
[발표 자료📢](https://www.canva.com/design/DAF-RQc7jdA/6pxWOKAt0RmZwgJC381TcA/edit?utm_content=DAF-RQc7jdA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## 목표

- 회원가입, 구매, 관리자, 상품관리 등의 기본적인 기능 구현 🛠️
- 보기 좋고 깔끔한 UI 🎨
- 모바일 반응형 및 클린 코드 구현 

---

## 배포 주소
[ART_CONCIERGE](http://kdt-sw-8-team01.elicecoding.com/)



## 시작 가이드

**installation**
```
git clone [주소]
npm install 
npm start 
```
<br>

**<관리자 계정>**<br>
ID : team1@elice.io<br>
password :12345678  

---

## 기술 스택
**Front-End**
<div align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=Java&logoColor=white" />
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
</div>

**Back-End**
<div align="center">
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
	<img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" />
	<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white" />
	<img src="https://img.shields.io/badge/Mongoose-880000?style=flat&logo=Mongoose&logoColor=white" />
</div>

**Tools**
<div align="center">
	<img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=GitLab&logoColor=white" />
	<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white" />
	<img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=white" />
</div>

---

## 전체 기능

|  | 일반 사용자 | 관리자 |
| --- | --- | --- |
| 사용자 관련 기능 | 로그인, 회원가입, 회원정보 CRUD | 유저 조회 및 수정, 검색 |
| 상품 관련 기능 | 상품 목록 및 상품 상세 정보 조회 | 상품 CRUD, 카테고리 CRUD |
| 주문 관련 기능 | 장바구니에 상품 추가, 장바구니 목록 및 개별 또는 전체 상품 구매 | 주문 정보 조회 및 상태 관리 |

---

## 기능 예시

1. 전시 조회
- 카테고리별 전시 조회 
- 전시 상세 정보 조회 
- 내가 원하는 전시 검색

[전시조회](https://github.com/gonn-i/ART_CONCIERGE/assets/121345759/e62ac6fb-58f3-4f6e-858b-a7dca44ea0cf)



2. 장바구니
- 원하는 전시 장바구니에 추가 
- 장바구니 삭제 및 수정 

[장바구니](https://github.com/gonn-i/ART_CONCIERGE/assets/121345759/02ea53cf-949d-480a-b9af-f123c24ccd79)


3. 주문하기 
- 사용자의 정보 입력 
- 정보 입력 후 주문하기 
- 이후 마이페이지로 주문 내역 조회 및 수정, 취소 

[주문하기](https://github.com/gonn-i/ART_CONCIERGE/assets/121345759/66373f89-eb0a-430f-b050-41be507ef78d)


4. 회원가입 
- 이메일 인증 후 회원가입 가능

[회원가입](https://github.com/gonn-i/ART_CONCIERGE/assets/121345759/2e14d941-c272-4bf6-a6c1-cab8f64e64af)


5. 로그인 및 로그아웃 
- JWT 를 이용한 로그인/ 로그아웃

[로그인/로그아웃](https://github.com/gonn-i/ART_CONCIERGE/assets/121345759/af340dd5-533e-4928-ba24-7e94c327b72e)


6. 마이페이지 
(관리자) 
- 카테고리 추가 및 수정, 삭제 (CRUD)
- 전시 추가 및 수정, 삭제 (CRUD)
- 사용자의 주문 정보 수정 (RUD) 

[관리자 마이페이지](https://github.com/gonn-i/ART_CONCIERGE/assets/121345759/0ed3c91e-c0de-481e-aadb-4e7522ba06f6)


(사용자) 
- 주문 내역 확인 및 수정 삭제 (RUD) 
- 본인 정보 조회 및 수정/ 회원 탈퇴 (RUD) 

[사용자 마이페이지](https://github.com/gonn-i/ART_CONCIERGE/assets/121345759/77c1466d-4b87-41dd-940a-57931df6cc04)


---

## 프로젝트 팀원

| Backend / Leader | Backend | Backend | Frontend | Frontend | Frontend | Frontend |
| --- | --- | --- | --- | --- | --- | --- |
| 김고은 | 김윤진 | 이다연 | 안진성 | 김민서 | 전다현 | 이유림 |
