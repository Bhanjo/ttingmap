import styled from 'styled-components';

const ContactContainer = styled.div`
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

const Contact = () => {
  return (
    <ContactContainer>
      <p>Contact</p>
      <a href='https://github.com/Bhanjo' target='_blank' rel='noreferrer'>
        <ContactGithub src='../svg//github.svg' alt='깃허브링크' />
      </a>
      <p>배한조</p>
      <p>hanjo1515@naver.com</p>
    </ContactContainer>
  );
};

export default Contact;
