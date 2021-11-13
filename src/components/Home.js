import styled from 'styled-components'

const WelcomContainer = styled.div`
  width: 100%;
  height: 1024px;
  background-image: url('../svg/gradation.svg');
  background-size: cover;
`;

const Home = () => {
  return (
    <>
      {/* 메인페이지 디자인 완성하기 */}
      <WelcomContainer>
        <p>hello world</p>
      </WelcomContainer>
    </>
  );
}

export default Home;
