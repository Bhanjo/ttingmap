import styled from 'styled-components';

import useScrollAnimation from '../../hooks/useScrollAnimation';

const InfoBox = styled.div`
  background-color: #fff;
  /* overflow: hidden; */
`;

const InfoTitle = styled.div`
  margin: 115px auto;
  width: 410px;
  text-align: center;
`;

const InfoTitleMain = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #5d5fef;
`;

const InfoTitleSub = styled.p`
  font-size: 23px;
  font-weight: bold;
  margin-top: 28px;
`;

const InfoList = styled.div`
  @media only screen and (max-width: 1190px) {
    width: 594px;
  }
  @media only screen and (max-width: 610px) {
    /* width: 450px; */
    width: 380px;
  }
  max-width: 1190px;
  transition: 1s ease-out;
  margin: auto auto 240px;
  div:nth-child(2n) {
    flex-direction: row-reverse;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 83px auto;
  overflow: hidden;
  // 카드가 3장 이상일 때 사용
  :first-child,
  :last-child {
    margin: 0;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #5d5fef;
    width: 594px;
    text-align: center;
    margin-top: 15px;
  }

  @media only screen and (max-width: 1190px) {
    justify-content: center;
    h1 {
      font-size: 18px;
    }
  }
`;

const InfoImg = styled.img`
  width: 594px;
  /* height: 362px; */
  @media only screen and (max-width: 610px) {
    width: 380px;
  }
  /* height: 362px; */
  border-radius: 18px;
`;

const InfoContents = () => {
  const isFullSize = window.innerWidth >= 1210;

  const animation = {
    0: useScrollAnimation('up', 1.5),
    1: useScrollAnimation('up', 1.5, 0.6),
  };

  const projectIntroduce = [
    {
      id: 1,
      animation: useScrollAnimation(isFullSize ? 'up' : 'up', 1.5, 0.5),
      projectImg: '../img/ex.svg',
      introTitle: '자유롭게 생각을 표현하세요',
    },
    {
      id: 2,
      animation: useScrollAnimation(isFullSize ? 'up' : 'up', 1.5, 0.5),
      projectImg: 'https://via.placeholder.com/594x362',
      introTitle: '작업 중인 내용은 자동으로 저장됩니다',
    },
    {
      id: 3,
      animation: useScrollAnimation(isFullSize ? 'up' : 'up', 1.5, 0.5),
      projectImg: 'https://via.placeholder.com/594x362',
      introTitle: '마인드맵을 이미지로 내보낼 수 있습니다',
    },
    // {
    //   id: 4,
    //   animation: useScrollAnimation(isFullSize ? 'right' : 'up', 1.5, 0.5),
    //   projectImg: 'https://via.placeholder.com/594x362',
    //   introTitle: '간편한 사용',
    // },
  ];

  return (
    <InfoBox>
      <InfoTitle>
        <InfoTitleMain {...animation[0]}>생각을 펼치고 싶다면?</InfoTitleMain>
        <InfoTitleSub {...animation[1]}>띵맵으로 쉽고 간편하게!</InfoTitleSub>
      </InfoTitle>
      <InfoList>
        {projectIntroduce.map((introduce) => (
          <InfoItem {...introduce.animation} key={introduce.id}>
            <InfoImg src={introduce.projectImg} />
            <h1>{introduce.introTitle}</h1>
          </InfoItem>
        ))}
      </InfoList>
    </InfoBox>
  );
};

export default InfoContents;
