# 띵맵

|     | 목차        |
| --- | ----------- |
| 1   | 서비스 소개 |
| 2   | 사용기술    |
| 3   | 핵심 기능   |
| 4   | 기술 스택   |
| 5   | 기타 사항   |

<img src='./public/logo.svg' width='1000px' height='500px'/>

## 🎨 서비스 소개

띵맵은 마인드 맵을 만들 수 있는 웹사이트입니다

[페이지 디자인](https://www.figma.com/file/pfrQPY21Q3AMi2Tev4OylE/Untitled?node-id=0%3A1)

## ✨ 데모

[데모 실행](https://ttingmap.vercel.app/)

### 🧪 구현 현황

- [x] 메인 페이지 디자인, 구현
- [x] 그래프 Create, Update, Delete 기능
- [ ] Local Storage에 데이터 저장
- [ ] 마인드 맵 export 기능 구현

## 🛠 사용기술

- React
- JavaScript
- Cytoscape(Cytoscape / react-cytoscape)
- recoil
- Styled-Component, Styled-reset
- React-Router-Dom

## 💎 핵심 기능

- 그래프 표현(cytoscape)

  - [cytoscape](https://js.cytoscape.org/)
  - [react-cytoscape](https://github.com/plotly/react-cytoscapejs)

- 그래프 저장
  - [LocalStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

## 🚀 동작 시연
### 21.12.31 기준

### Interection
![interection](https://user-images.githubusercontent.com/63037629/147819448-804c8a67-f1e9-4ec5-b8cd-500b8ffe2a1d.gif)

### Create
#### Node Create
![createNode](https://user-images.githubusercontent.com/63037629/147819471-2221bb82-d6ac-4b5b-8fe6-16a9f6a48f6f.gif)

#### Edge Create
![createEdge](https://user-images.githubusercontent.com/63037629/147819493-40e44973-a831-49c0-9ce7-3cb8083f4e9b.gif)

### Delete
![delete](https://user-images.githubusercontent.com/63037629/147819539-1167f09b-4114-4e13-a7fe-03ab7bc3528d.gif)

### Update
![update](https://user-images.githubusercontent.com/63037629/147819521-f218b375-60e2-49ef-a9d6-6a841c4ede8e.gif)

## ⚙ 기타 사항

### 글꼴, 이미지 소스

- [글꼴 [나눔고딕]](https://hangeul.naver.com/2021/fonts/nanum)
- [개발과정](https://blog.naver.com/PostList.naver?blogId=hanjo1515&from=postList&categoryNo=24#)
