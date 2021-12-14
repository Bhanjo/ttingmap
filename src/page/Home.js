import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import useScrollAnimation from '../hooks/useScrollAnimation';

// 첫 로딩시 보여줄 화면
const WelcomContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url('../svg/gradation.svg');
  background-size: cover;
`;

// 브랜드 로고, 시작버튼 박스
const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; // 자식 노드의 기준점
  width: 293px;
  height: 226px;
`;

const Brand = styled.img`
  width: 100%;
  height: 162px;
`;

const StartButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 192px;
  height: 46px;
  margin-top: 18px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  font-size: 30px;
  color: #ffffff;
  border: 3px #fff solid;
  border-radius: 24px;
  text-decoration-line: none;

  /* Button animaition */
  box-shadow: inset 0 0 0 0 #80ffd3;
  transition: all 0.7s cubic-bezier(0.9, 0.24, 0.4, 1);
  background: url('../svg/gradation.svg');
  background-size: cover;
  :hover {
    box-shadow: inset 0 0 500px 0 #38399e00;
  }
`;

const fadeDown = keyframes`
  0%{
    opacity: 0;
    bottom: 20px;
  }
  100% {
    opacity: 1;
    bottom: 15px;
  }`;

const Scroll = styled.img`
  /* animation: ${fadeDown} 1s infinite linear alternate; */
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 15px;
`;

// 설명파트
const InfoBox = styled.div`
  /* min-width: 100%; */
  background-color: #fff;
`;

const InfoTitle = styled.div`
  margin: 115px auto;
  width: 410px;
  text-align: center;
  p:first-child {
    font-size: 36px;
    font-weight: bold;
    color: #5d5fef;
  }
  p:last-child {
    font-size: 18px;
    font-weight: bold;
    margin-top: 28px;
  }
`;

const InfoImg = styled.img`
  width: 594px;
  height: 362px;
  border-radius: 18px;
`;

const InfoList = styled.div`
  width: 1190px;
  margin: auto auto 240px;
  div:nth-child(2n) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const InfoItem = styled.div`
  display: flex;
  margin: 83px 0;
  overflow: hidden;
  :first-child,
  :last-child {
    margin: 0;
  }
`;

// 마인드맵 이동 파트
const MoveBox = styled.div`
  background-image: url('../svg/gradation.svg');
  background-size: cover;
  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 19px;
  }
`;

const MoveBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
`;

// 연락정보 파트
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 299px;
  background-color: #383838;
  p {
    color: #fff;
    font-size: 24px;
    margin: 5px auto;
    /* font-weight: bold; */
  }
  p:nth-child(1) {
    font-size: 36px;
    font-weight: bold;
    margin: 0;
  }
`;

const ContactGithub = styled.img`
  width: 44px;
  height: 44px;
  margin: 34px auto 11px;
  cursor: pointer;
`;

// 각 파트별 컴포넌트를 분리시킬 필요가 있음
const Home = () => {
  // 애니메이션 요소 하나당 hooks 하나를 써야됨 => 개선방안 고민필요
  const animation = {
    0: useScrollAnimation('up', 1.5),
    1: useScrollAnimation('up', 1, 0.2),
  };

  const projectIntroduce = [
    {
      animation: useScrollAnimation('left', 1.5, 0.2),
      projectImg: 'https://via.placeholder.com/594x362',
      introduceText: '대충설명1',
    },
    {
      animation: useScrollAnimation('right', 1.5, 0.2),
      projectImg: 'https://via.placeholder.com/594x362',
      introduceText: '대충설명2',
    },
    {
      animation: useScrollAnimation('left', 1.5, 0.2),
      projectImg: 'https://via.placeholder.com/594x362',
      introduceText: '대충설명3',
    },
    {
      animation: useScrollAnimation('right', 1.5, 0.2),
      projectImg: 'https://via.placeholder.com/594x362',
      introduceText: '대충설명4',
    },
  ];

  return (
    <>
      {/* 로딩시 보여줄 컴포넌트 */}
      <WelcomContainer>
        <BrandBox>
          <Brand src='../svg/welcomLogo.svg' />
          <StartButton to='/mindmap'>start</StartButton>
        </BrandBox>
        <Scroll src='../svg/scroll.svg' />
      </WelcomContainer>
      {/* 마인드맵 설명 컴포넌트 */}
      <InfoBox>
        <InfoTitle {...animation[0]}>
          <p>생각을 펼치고 싶다면?</p>
          <p>띵맵으로 쉽고 간편하게!</p>
        </InfoTitle>
        <InfoList>
          {projectIntroduce.map((introduce) => (
            <InfoItem {...introduce.animation}>
              <InfoImg src={introduce.projectImg} />
              <p>{introduce.introduceText}</p>
            </InfoItem>
          ))}
        </InfoList>
      </InfoBox>
      {/* 마인드맵 이동 컴포넌트 */}
      <MoveBox>
        <MoveBoxInner {...animation[1]}>
          <p>지금 바로 시작하기</p>
          <StartButton to='/mindmap'>start</StartButton>
        </MoveBoxInner>
      </MoveBox>
      {/* 컨택트 컴포넌트 */}
      <Contact>
        <p>Contact</p>
        <ContactGithub src='../svg//github.svg' alt='깃허브링크' />
        <p>배한조</p>
        <p>hanjo1515@naver.com</p>
      </Contact>
    </>
  );
};

export default Home;
