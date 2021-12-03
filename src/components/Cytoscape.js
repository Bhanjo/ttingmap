import CytoscapeComponent from 'react-cytoscapejs';
import styled from 'styled-components';

// Cytoscape에 대한 스타일
const GraphBox = styled(CytoscapeComponent)`
  width: inherit;
  height: 80vh;
  border: 1px solid #000;
  background-color: #fff;
`;

const Cytoscape = ({ elements }) => {
  // normalizeElements를 통해 쉽게 elements를 JSON 형태로 보내줄 수 있다
  return (
    <GraphBox
      elements={CytoscapeComponent.normalizeElements(elements)}
      maxZoom={2}
      minZoom={0.3}
    />
  );
};

export default Cytoscape;
