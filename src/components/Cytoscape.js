import CytoscapeComponent from 'react-cytoscapejs';
import styled from 'styled-components';

// Cytoscape에 대한 스타일
const GraphBox = styled(CytoscapeComponent)`
  width: 1000px;
  height: 500px;
  border: 1px solid #000;
`;

const Cytoscape = () => {
  const elements = [
    {
      data: {
        id: 'one',
        label: 'Node 1',
      },
    },
    {
      data: {
        id: 'two',
        label: 'Node 2',
      },
    },
    {
      data: {
        source: 'one',
        target: 'two',
        label: 'edge from node1 to node2',
      },
    },
  ];
  return <GraphBox elements={elements} />;
};

export default Cytoscape;
