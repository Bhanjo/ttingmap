import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 50px;
  background-color: #383838;
  justify-content: space-between;
`;

const NavElement = styled(Link)`
  cursor: pointer;
  color: #fff;
  margin: 0 10px;
`;

const ExternalLink = styled.a`
  cursor: pointer;
  color: #fff;
  margin: 0 10px;
`;

const LogoImg = styled.img`
  width: 85px;
`;

const Navigarion = () => {
  return (
    <NavContainer>
      <NavElement to='/'>
        <LogoImg src='../img/NavLogo.svg' alt='메인페이지' />
      </NavElement>
      <div>
        <NavElement to='/mindmap'>마인드맵</NavElement>
        <ExternalLink
          href='https://github.com/Bhanjo/ttingmap/tree/main/public/guide.md'
          target='_blank'
        >
          사용법
        </ExternalLink>
      </div>
    </NavContainer>
  );
};
export default Navigarion;
