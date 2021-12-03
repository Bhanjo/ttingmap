import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 10px 50px;
  border: 1px black solid;
  width: 100%;
  background-color: #383838;
`;

const NavElement = styled(Link)`
  cursor: pointer;
  color: #fff;
`;

const LogoImg = styled.img`
  width: 85px;
`;

const Navigarion = () => {
  return (
    <NavContainer>
      <NavElement to='/'>
        <LogoImg src='../svg/NavLogo.svg' alt='메인페이지' />
      </NavElement>
      <NavElement to='/mindmap'>테스트</NavElement>
    </NavContainer>
  );
};
export default Navigarion;
