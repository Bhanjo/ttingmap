import styled from 'styled-components';

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

const StartButton = styled.img`
  width: 192px;
  height: 46px;
  margin-top: 18px;
  cursor: pointer;
`;

const Scroll = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
`;

// 설명파트
const InfoBox = styled.div`
  min-width: 100%;
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
  margin: auto 46px 240px;
`;

const InfoItem = styled.div`
  display: flex;
  margin: 83px 0;
  :first-child,
  :last-child {
    margin: 0;
  }
`;

// 마인드맵 이동 파트
const MoveBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-image: url('../svg/gradation.svg');
  background-size: cover;
  p {
    color: #fff;
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 19px;
  }
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

const Home = () => {
  return (
    <>
      {/* 로딩시 보여줄 컴포넌트 */}
      <WelcomContainer>
        <BrandBox>
          <Brand src='../svg/welcomLogo.svg' />
          <StartButton src='../svg/startButton.svg' />
        </BrandBox>
        <Scroll src='../svg/scroll.svg' />
      </WelcomContainer>
      {/* 마인드맵 설명 컴포넌트 */}
      <InfoBox>
        <InfoTitle>
          <p>생각을 펼치고 싶다면?</p>
          <p>띵맵으로 쉽고 간편하게!</p>
        </InfoTitle>
        <InfoList>
          <InfoItem>
            <InfoImg src='https://via.placeholder.com/594x362' />
            <p>대충 설명1</p>
          </InfoItem>
          <InfoItem>
            <InfoImg src='https://via.placeholder.com/594x362' />
            <p>대충 설명1</p>
          </InfoItem>
          <InfoItem>
            <InfoImg src='https://via.placeholder.com/594x362' />
            <p>대충 설명1</p>
          </InfoItem>
        </InfoList>
      </InfoBox>
      {/* 마인드맵 이동 컴포넌트 */}
      <MoveBox>
        <p>지금 바로 시작하기</p>
        <StartButton src='../svg/startButton.svg' />
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
