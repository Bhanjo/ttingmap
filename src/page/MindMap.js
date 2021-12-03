import { useCallback, useState } from 'react';
import styled from 'styled-components';

import Cytoscape from '../components/Cytoscape';
import CytoscapeInsert from '../components/CytoscapeInsert';
import Navigation from '../components/Navigation';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  /* overflow: hidden; */
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 3rem;
    color: #fff;
  }
`;

const InputGraph = styled.input`
  width: 300px;
`;

const MindMap = () => {
  const [elements, setElements] = useState([
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
        id: 'Node 2',
        label: 'Node 2',
      },
      position: {
        x: 540,
        y: 360,
      },
    },
    {
      data: {
        source: 'Node 1',
        target: 'Node 2',
        label: 'edge from node1 to node2',
      },
    },
  ]);

  const [newNode, setNewNode] = useState('');
  const [targetNode, setTargetNode] = useState('');

  const onChangeNewNode = (e) => {
    setNewNode(e.target.value);
  };
  const onChangeTargetNode = (e) => {
    setTargetNode(e.target.value);
  };

  // props로 함수를 전달시 useCallback을 쓰는게 맞는지?
  const onNewGraph = useCallback(
    (e) => {
      const item = {
        data: {
          id: newNode,
          label: newNode,
        },
        position: {
          x: 600,
          y: 600,
        },
      };
      setElements(elements.concat(item));
      e.preventDefault();
    },
    [elements, newNode],
  );

  // const onConnectGraph = useCallback(
  //   (sourceNode, targetNode) => {
  //     const newConnect = {
  //       data: {
  //         souce: sourceNode,
  //         target: targetNode,
  //         label: `edge from ${sourceNode} to ${targetNode}`,
  //       },
  //     };
  //     setElements(elements.concat(newConnect));
  //   },
  //   [elements],
  // );

  // const onInsertGraph = (sourceNode, targetNode) => {
  //   onNewGraph(sourceNode);
  //   onConnectGraph(sourceNode, targetNode);
  // };

  // 노드 연결 기능 구현필요
  return (
    <Container>
      <Navigation />
      <h1>자유롭게 생각을 표현하세요!</h1>
      <Cytoscape
        elements={elements}
        // onNewGraph={onNewGraph}
        // onConnectGraph={onConnectGraph}
      />
      {/* <CytoscapeInsert onNewGraph={onNewGraph} /> */}
      {/* 새로운노드입력 */}
      <p>입력테스트컴포넌트</p>
      <form onSubmit={onNewGraph}>
        <InputGraph
          type='text'
          placeholder='추가할 노드의 이름을 입력하세요'
          value={newNode}
          onChange={onChangeNewNode}
        />
        {/* <InputGraph
          type='text'
          placeholder='연결할 노드를 입력하세요(ex: Node1)'
          value={targetNode}
          onChange={onChangeTargetNode}
        /> */}
        <button type='submit' label='test'>
          생성
        </button>
      </form>
    </Container>
  );
};

export default MindMap;
