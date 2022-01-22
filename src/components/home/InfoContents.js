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
  @media only screen and (max-width: 1190px) {
    justify-content: center;
  }
  display: flex;
  flex-wrap: wrap;
  margin: 83px auto;
  overflow: hidden;
  :first-child,
  :last-child {
    margin: 0;
  }
`;

const InfoImg = styled.img`
  width: 594px;
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
      animation: useScrollAnimation(isFullSize ? 'left' : 'up', 1.5, 0.5),
      projectImg: '../svg/ex.svg',
      introduceText: '자신의 생각을 표현해보세요',
    },
    {
      id: 2,
      animation: useScrollAnimation(isFullSize ? 'right' : 'up', 1.5, 0.5),
      projectImg: 'https://via.placeholder.com/594x362',
      introduceText: '다양한 스타일링',
    },
    {
      id: 3,
      animation: useScrollAnimation(isFullSize ? 'left' : 'up', 1.5, 0.5),
      projectImg: 'https://via.placeholder.com/594x362',
      introduceText: '마인드맵을 저장해 공유',
    },
    {
      id: 4,
      animation: useScrollAnimation(isFullSize ? 'right' : 'up', 1.5, 0.5),
      projectImg: 'https://via.placeholder.com/594x362',
      introduceText: '간편한 사용',
    },
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
            <p>{introduce.introduceText}</p>
          </InfoItem>
        ))}
      </InfoList>
    </InfoBox>
  );
};

export default InfoContents;
