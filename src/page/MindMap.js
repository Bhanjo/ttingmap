import { useCallback, useState, useRef } from 'react';
import cy from 'react-cytoscapejs';
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

  // 노드 추가일지 연결일지 판단, 기본값(true)은 노드 추가 기능
  const [insertType, setInsertType] = useState(true);

  const [newNode, setNewNode] = useState('');
  const [targetNode, setTargetNode] = useState('');

  const onChangeNewNode = (e) => {
    setNewNode(e.target.value);
  };
  const onChangeTargetNode = (e) => {
    setTargetNode(e.target.value);
  };

  // props로 함수를 전달시 useCallback을 쓰는게 맞는가
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
      setNewNode('');
    },
    [elements, newNode],
  );

  const onConnectGraph = useCallback(
    (e) => {
      const newConnect = {
        data: {
          source: newNode,
          target: targetNode,
          label: `edge from ${newNode} to ${targetNode}`,
        },
      };
      setElements(elements.concat(newConnect));
      e.preventDefault();
      setNewNode('');
      setTargetNode('');
      // eslint-disable-next-line no-console
      console.log('노드추가됨');
    },
    [elements, newNode, targetNode],
  );

  // 입력모드 변경 이벤트
  const changeInsertMode = () => {
    setNewNode('');
    setTargetNode('');
    setInsertType(!insertType);
  };

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
      <div>
        <h1>입력 타입 선택</h1>
        <button type='button' onClick={changeInsertMode}>
          모드변경하기
        </button>
      </div>
      {insertType ? (
        // 신규노드추가
        <form onSubmit={onNewGraph}>
          <InputGraph
            type='text'
            placeholder='추가할 노드의 이름을 입력하세요'
            value={newNode}
            onChange={onChangeNewNode}
          />
          <button type='submit' label='test'>
            추가하기
          </button>
        </form>
      ) : (
        // 노드연결하기
        <form onSubmit={onConnectGraph}>
          <InputGraph
            type='text'
            placeholder='시작노드'
            value={newNode}
            onChange={onChangeNewNode}
          />
          <InputGraph
            type='text'
            placeholder='타겟노드'
            value={targetNode}
            onChange={onChangeTargetNode}
          />
          <button type='submit' label='test'>
            연결하기
          </button>
        </form>
      )}
    </Container>
  );
};

export default MindMap;
