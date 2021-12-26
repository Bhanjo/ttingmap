/* eslint-disable no-alert */
import { useState } from 'react';
import styled from 'styled-components';

const InputGraph = styled.input`
  /* width: 300px; */
`;

const NodeCreate = ({
  cyRef,
  targetNode,
  onChangeTargetNode,
  initTargetNode,
  nodeIdCounter,
  countNodeIdCounter,
}) => {
  const [insertType, setInsertType] = useState(true);
  const [newNode, setNewNode] = useState('');
  let isExist = true;

  // form 내용 변경 감지
  const onChangeNewNode = (e) => {
    setNewNode(e.target.value);
  };

  // 존재유무판단
  const insertIsExist = (...item) => {
    isExist = true;
    item.forEach((node) => {
      if (cyRef.current.getElementById(node).length === 0) {
        isExist = false;
      }
    });
  };

  // 노드 추가 이벤트
  const onNewGraph = (e) => {
    const item = {
      data: {
        id: nodeIdCounter.current,
        label: newNode,
      },
      position: {
        x: 600,
        y: 600,
      },
    };
    e.preventDefault();
    cyRef.current.add(item);
    countNodeIdCounter();
    setNewNode('');
  };

  // 노드 연결 이벤트
  const onConnectGraph = (e) => {
    const newConnect = {
      data: {
        source: newNode,
        target: targetNode,
        label: `edge from ${newNode} to ${targetNode}`,
      },
    };
    e.preventDefault();
    insertIsExist(newNode, targetNode);
    if (isExist) {
      cyRef.current.add(newConnect);
      setNewNode('');
      initTargetNode();
    } else {
      alert(`입력값을 다시 확인해주세요`);
    }
  };

  // 입력모드 변경 이벤트
  const changeInsertMode = () => {
    setNewNode('');
    initTargetNode();
    setInsertType(!insertType);
  };

  return (
    <div>
      <button type='button' onClick={changeInsertMode}>
        모드변경하기
      </button>
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
            placeholder='시작요소'
            value={newNode}
            onChange={onChangeNewNode}
          />
          <InputGraph
            type='text'
            placeholder='타겟요소'
            value={targetNode}
            onChange={onChangeTargetNode}
          />
          <button type='submit' label='test'>
            연결하기
          </button>
        </form>
      )}
    </div>
  );
};

export default NodeCreate;
