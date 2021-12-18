import { useRef } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import styled from 'styled-components';

import CytoscapeControl from '../components/CytoscapeControl';
import Navigation from '../components/Navigation';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

// Cytoscape에 대한 스타일
const GraphBox = styled(CytoscapeComponent)`
  width: 100%;
  height: 100vh;
  /* border: 1px solid #000; */
  background-color: #ddd;
`;

const MindMap = () => {
  // 초기값
  const elements = {
    nodes: [
      {
        data: {
          id: 'Node 1',
          label: 'Node 1',
        },
        position: {
          x: 640,
          y: 360,
        },
      },
      {
        data: {
          id: 'Node 3',
          label: 'Node 3',
        },
        position: {
          x: 540,
          y: 360,
        },
      },
      {
        data: {
          id: '1',
          label: '1',
        },
        position: {
          x: 340,
          y: 250,
        },
      },
      {
        data: {
          id: '2',
          label: '2',
        },
        position: {
          x: 440,
          y: 360,
        },
      },
      {
        data: {
          id: '3',
          label: '3',
        },
        position: {
          x: 140,
          y: 360,
        },
      },
      {
        data: {
          id: '4',
          label: '4',
        },
        position: {
          x: 240,
          y: 360,
        },
      },
    ],
    edges: [
      {
        data: {
          source: 'Node 1',
          target: 'Node 3',
          label: 'edge from node1 to node3',
        },
      },
      {
        data: {
          source: '1',
          target: '2',
          label: 'edge from node1 to node3',
        },
      },
      {
        data: {
          source: '1',
          target: '3',
          label: 'edge from node1 to node3',
        },
      },
      {
        data: {
          source: '1',
          target: '4',
          label: 'edge from node1 to node3',
        },
      },
    ],
  };
  // cytoscape DOM을 다루기 위한 ref
  const cyRef = useRef();

  // 노드 연결 기능 구현필요
  return (
    <Container>
      <Navigation />
      <GraphBox
        elements={CytoscapeComponent.normalizeElements(elements)}
        maxZoom={2}
        minZoom={0.3}
        // eslint-disable-next-line no-return-assign
        cy={(cy) => (cyRef.current = cy)}
      />
      {/* 그래프 컨트롤 컴포넌트 */}
      <CytoscapeControl cyRef={cyRef} />
    </Container>
  );
};

export default MindMap;
