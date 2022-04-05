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
        <p>저장</p>
      </ControlButton>
      {/* 로드 기능의 경우 그래프 그룹화 구현 후 만들기 */}
      {/* <ControlButton onClick={loadGraph}>
        <img src='../svg/save.png' alt='로드' />
      </ControlButton> */}
      <ControlButton onClick={initGraph}>
        <p>리셋</p>
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
  width: 40px;
  margin: 0 6px;
  padding: 6px 0;
  transition: 0.3s;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: #898bff;
    font-weight: bold;
    color: #fff;
  }
`;

export default SaveControl;
