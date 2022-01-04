/* eslint-disable indent */
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Contact from '../components/home/Contact';
import InfoContents from '../components/home/InfoContents';

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

const Home = () => {
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
      <InfoContents />
      {/* 마인드맵 이동 */}
      <MoveBox>
        <MoveBoxInner>
          <p>지금 바로 시작하기</p>
          <StartButton to='/mindmap'>start</StartButton>
        </MoveBoxInner>
      </MoveBox>
      {/* 컨택트 컴포넌트 */}
      <Contact />
    </>
  );
};

export default Home;
