/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import CytoscapeControl from '../components/CytoscapeControl';
import Navigation from '../components/Navigation';
import { currentNodeId } from '../components/globalState/nodeControl';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

// Cytoscape에 대한 스타일
const GraphBox = styled(CytoscapeComponent)`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const MindMap = () => {
  // 초기값
  const elements = {
    nodes: [
      // {
      //   data: {
      //     id: '1',
      //     label: '노드1',
      //   },
      //   position: {
      //     x: 340,
      //     y: 250,
      //   },
      // },
      // {
      //   data: {
      //     id: '2',
      //     label: '노드2',
      //   },
      //   position: {
      //     x: 440,
      //     y: 360,
      //   },
      // },
      // {
      //   data: {
      //     id: '3',
      //     label: '노드3',
      //   },
      //   position: {
      //     x: 140,
      //     y: 360,
      //   },
      // },
      // {
      //   data: {
      //     id: '4',
      //     label: '노드4',
      //   },
      //   position: {
      //     x: 240,
      //     y: 360,
      //   },
      // },
    ],
    edges: [
      // {
      //   data: {
      //     source: '1',
      //     target: '2',
      //     label: 'edge from node1 to node3',
      //   },
      // },
      // {
      //   data: {
      //     source: '1',
      //     target: '3',
      //     label: 'edge from node1 to node3',
      //   },
      // },
      // {
      //   data: {
      //     source: '1',
      //     target: '4',
      //     label: 'edge from node1 to node3',
      //   },
      // },
    ],
  };

  // cytoscape DOM을 다루기 위한 ref
  const cyRef = useRef();
  const stylesheet = [
    {
      selector: 'node',
      style: {
        'background-color': '#5D5FEF',
        label: 'data(label)',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        'line-color': '#A3A4FF',
      },
    },
    // {
    //   selector: 'label',
    //   style: {
    //     'font-size': '20px',
    //     'text-justification': 'center',
    //     // 'text-outline-width': '1px',
    //     // 'text-outline-color': '#fff',
    //   },
    // },
  ];

  // 페이지 로드시 그래프 불러오기
  const [nodeCnt, setNodeCnt] = useRecoilState(currentNodeId);
  useEffect(() => {
    const graph = JSON.parse(localStorage.getItem('graphs'));
    if (graph) {
      cyRef.current.json(graph);
      // 노드 id 업데이트
      const lastNodeIndex = cyRef.current.elements().length - 1;
      const lastNode = cyRef.current.elements()[lastNodeIndex];
      setNodeCnt(Number(lastNode.data('id')) + 1);
    }
  }, [setNodeCnt]);

  return (
    <Container>
      <Navigation />
      <GraphBox
        elements={CytoscapeComponent.normalizeElements(elements)}
        maxZoom={2}
        minZoom={0.3}
        // eslint-disable-next-line no-return-assign
        cy={(cy) => (cyRef.current = cy)}
        stylesheet={stylesheet}
      />
      {/* 그래프 컨트롤 컴포넌트 */}
      <CytoscapeControl cyRef={cyRef} />
    </Container>
  );
};

export default MindMap;
