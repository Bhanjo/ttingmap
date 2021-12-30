import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { isModeNode } from './globalState/nodeControl';

const Container = styled.div`
  justify-content: center;
  display: flex;
  margin: 12px 0;
`;

const NodeButton = styled.button`
  justify-content: center;
  align-items: center;
  border: 1px solid #898bff;
  width: 82px;
  height: 25px;
  border-radius: 12px 0 0 12px;
  background-color: ${(props) => (props.checkNodeMode ? '#898bff' : '#fff')};
  color: ${(props) => (props.checkNodeMode ? '#fff' : '#898bff')};
`;
const EdgeButton = styled.button`
  justify-content: center;
  align-items: center;
  border: 1px solid #898bff;
  width: 82px;
  height: 25px;
  border-radius: 0 12px 12px 0;
  background-color: ${(props) => (props.checkNodeMode ? '#fff' : '#898bff')};
  color: ${(props) => (props.checkNodeMode ? '#898bff' : '#fff')};
`;

const NodeEdgeChange = ({ type, onClick }) => {
  const checkNodeMode = useRecoilValue(isModeNode);

  return (
    <Container>
      <NodeButton type={type} onClick={onClick} checkNodeMode={checkNodeMode}>
        Node
      </NodeButton>
      <EdgeButton type={type} onClick={onClick} checkNodeMode={checkNodeMode}>
        Edge
      </EdgeButton>
    </Container>
  );
};

export default NodeEdgeChange;
