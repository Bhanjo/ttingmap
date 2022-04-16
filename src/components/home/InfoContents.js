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
  div {
    width: 45%;
    margin: 0 20px;
    /* background-color: cornflowerblue; */
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #5d5fef;
    text-align: center;
    margin: 15px 0;
  }
  p {
    font-size: 18px;
    width: 80%;
    word-break: keep-all;
    margin: 15px auto;
    line-height: 25px;
  }

  @media only screen and (max-width: 1190px) {
    justify-content: center;
    div {
      width: 100%;
      text-align: center;
    }
    h1 {
      font-size: 18px;
    }
    p {
      width: 100%;
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
      animation: useScrollAnimation(isFullSize ? 'up' : 'up', 1.5),
      projectImg: '../img/ex.svg',
      introTitle: '자유롭게 생각을 표현하세요',
      introMainDescription: '마인드맵으로 자신의 생각을 간단하게 정리해보세요!',
      introSubDescription:
        '간단한 관계도 부터 복잡한 그래프 처리 까지 간단하게 만들 수 있습니다',
    },
    {
      id: 2,
      animation: useScrollAnimation(isFullSize ? 'up' : 'up', 1.5),
      projectImg: '../img/autoSave.png',
      introTitle: '자동 저장을 지원합니다',
      introMainDescription: '작업 중인 내용은 10초에 한 번씩 자동 저장됩니다!',
      introSubDescription:
        '저장을 깜빡잊거나 에러로 인해 작업물이 없어지는 불상사를 방지할 수 있습니다.',
    },
    {
      id: 3,
      animation: useScrollAnimation(isFullSize ? 'up' : 'up', 1.5),
      projectImg: '../img/exportImg.png',
      introTitle: '이미지로 내보낼 수 있습니다',
      introMainDescription: '내가 만든 마인드맵을 다른 콘텐츠에 쓰고싶나요?',
      introSubDescription: 'Export 버튼을 클릭해 이미지로 내보낼 수 있습니다!',
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
            <div>
              <h1>{introduce.introTitle}</h1>
              <p>{introduce.introMainDescription}</p>
              <p>{introduce.introSubDescription}</p>
            </div>
          </InfoItem>
        ))}
      </InfoList>
    </InfoBox>
  );
};

export default InfoContents;
