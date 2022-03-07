/* eslint-disable no-alert */
import styled from 'styled-components';

const SaveControl = ({ cyRef }) => {
  const saveGraph = () => {
    localStorage.setItem('graphs', JSON.stringify(cyRef.current.json()));
  };

  // const loadGraph = () => {
  //   const graph = JSON.parse(localStorage.getItem('graphs'));
  //   cyRef.current.json(graph);
  // };

  const initGraph = () => {
    // eslint-disable-next-line no-restricted-globals
    const checkInit = confirm(
      '정말 초기화 하겠습니까? \n (초기화 후 되돌릴 수 없습니다)',
    );
    if (checkInit) {
      cyRef.current.remove(cyRef.current.elements());
      localStorage.removeItem('graphs');
    }
  };

  return (
    <Container>
      <ControlButton onClick={saveGraph}>
        <img src='../svg/save.png' alt='저장' />
      </ControlButton>
      {/* 로드 기능의 경우 그래프 그룹화 구현 후 만들기 */}
      {/* <ControlButton onClick={loadGraph}>
        <img src='../svg/save.png' alt='로드' />
      </ControlButton> */}
      <ControlButton onClick={initGraph}>
        <img src='../svg/init.png' alt='초기화' />
      </ControlButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 auto 12px auto;
  width: 132px;
  height: 27px;
`;

const ControlButton = styled.span`
  width: 23px;
  height: 23px;
  margin: 0 3px;
  transition: 0.3s;
  border-radius: 12px;
  padding: 4px;
  :hover {
    border-radius: 3px;
    background-color: #dfdfdf;
  }
  img {
    width: inherit;
    height: inherit;
  }
`;

export default SaveControl;