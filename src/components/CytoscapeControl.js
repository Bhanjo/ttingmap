import { useState } from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  background-color: #fff;
  /* position: fixed; */
  position: absolute;
  top: 50px;
  right: 0;
`;

const InputGraph = styled.input`
  width: 300px;
`;

const CytoscapeControl = ({ cyRef }) => {
  // 노드 추가,연결 모드, 기본값(true)은 노드 추가 기능
  const [insertType, setInsertType] = useState(true);

  const [newNode, setNewNode] = useState('');
  const [targetNode, setTargetNode] = useState('');

  // form 내용 변경 감지
  const onChangeNewNode = (e) => {
    setNewNode(e.target.value);
  };
  const onChangeTargetNode = (e) => {
    setTargetNode(e.target.value);
  };

  // 노드 추가 이벤트
  const onNewGraph = (e) => {
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
    e.preventDefault();
    cyRef.current.add(item);
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
    cyRef.current.add(newConnect);
    setNewNode('');
    setTargetNode('');
  };

  // 입력모드 변경 이벤트
  const changeInsertMode = () => {
    setNewNode('');
    setTargetNode('');
    setInsertType(!insertType);
  };
  return (
    <ControlContainer>
      <div>
        <h1>생성</h1>
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
    </ControlContainer>
  );
};

export default CytoscapeControl;
