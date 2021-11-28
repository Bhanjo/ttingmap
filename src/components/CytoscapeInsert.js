import { useState } from 'react';
import styled from 'styled-components';

const InputGraph = styled.input`
  width: 300px;
`;

const CytoscapeInsert = (onNewGraph, onConnectGraph) => {
  const [newNode, setNewNode] = useState('');
  const [targetNode, setTargetNode] = useState('');

  const onChangeNewNode = (e) => {
    setNewNode(e.target.value);
  };
  const onChangeTargetNode = (e) => {
    setTargetNode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onNewGraph();
  };

  return (
    <>
      <p>입력컴포넌트</p>
      <form onSubmit={onSubmit}>
        <InputGraph
          type='text'
          placeholder='추가할 노드의 이름을 입력하세요'
          value={newNode}
          onChange={onChangeNewNode}
        />
        <InputGraph
          type='text'
          placeholder='연결할 노드를 입력하세요(ex: Node1)'
          value={targetNode}
          onChange={onChangeTargetNode}
        />
        <button type='submit' label='새로운 노드 생성'>
          생성
        </button>
      </form>
    </>
  );
};

export default CytoscapeInsert;
