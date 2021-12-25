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

### 🧪 구현 현황

- [X] 메인 페이지 디자인, 구현
- [ ] 그래프 CRUD 기능(추가 기능 완성)
- [ ] Local Storage에 데이터 저장
- [ ] 마인드 맵 export 기능 구현

## 🛠 사용기술

- React
- JavaScript
- Styled-Component
- Styled-reset
- React-Router-Dom
- Cytoscape(Cytoscape / react-cytoscape)

## 💎 핵심 기능

- 그래프 표현(cytoscape)
  - [cytoscape](https://js.cytoscape.org/)
  - [react-cytoscape](https://github.com/plotly/react-cytoscapejs)

- 그래프 저장
  - [LocalStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

## 🚀 동작 시연
### 21.12.29 기준

### Read
![exRead](https://user-images.githubusercontent.com/63037629/147388362-94afa79a-a21e-4311-993e-838e7154968a.gif)

### Create
![exCreate](https://user-images.githubusercontent.com/63037629/147388368-3bf56eec-4dae-4e64-9b6d-ba5eb8de33ec.gif)

### Delete
![exDelete](https://user-images.githubusercontent.com/63037629/147388372-a5a916fa-b829-4adc-9e0c-0b4adf082a09.gif)

### Update
![exUpdate](https://user-images.githubusercontent.com/63037629/147388376-7c257fc4-3191-4c84-8188-2ea3d863172e.gif)

## ⚙ 기타 사항

### 글꼴, 이미지 소스

- [글꼴 [나눔고딕]](https://hangeul.naver.com/2021/fonts/nanum)
- [개발과정](https://blog.naver.com/PostList.naver?blogId=hanjo1515&from=postList&categoryNo=24#)
