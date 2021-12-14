/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useState, useRef } from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50px;
  right: 0;
  height: 100vh;
  padding-top: 1rem;
`;

const ControlCategory = styled.ul`
  display: flex;
  justify-content: center;
  text-decoration: none;
  li {
    margin: 0 0.5rem;
  }
`;

const InputGraph = styled.input`
  width: 300px;
`;

const CytoscapeControl = ({ cyRef }) => {
  // 노드 추가: add, 연결: edge, 노드삭제: delNode, 간선삭제: delEdge, 노드 수정: modify
  const [insertType, setInsertType] = useState(true);
  const [newNode, setNewNode] = useState('');
  const [targetNode, setTargetNode] = useState('');
  // const isExist = useRef(true);
  let isExist = false;

  // form 내용 변경 감지
  const onChangeNewNode = (e) => {
    setNewNode(e.target.value);
  };
  const onChangeTargetNode = (e) => {
    setTargetNode(e.target.value);
  };

  // 존재유무판단 구현하기
  const insertIsExist = (...item) => {
    if (item.length === 1) {
      if (cyRef.current.getElementById(item[0].data.id).length === 0) {
        isExist = true;
      } else {
        isExist = false;
      }
    } else if (item.length === 2) {
      isExist = true;
      item.forEach((node) => {
        if (cyRef.current.getElementById(node).length === 0) {
          isExist = false;
        }
      });
    }
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
    insertIsExist(item);
    if (isExist) {
      cyRef.current.add(item);
    } else {
      alert(`${item.data.id}은/는 이미 존재합니다`);
    }
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
      setTargetNode('');
    } else {
      alert(`입력값을 다시 확인해주세요`);
    }
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
        <ControlCategory>
          <li>
            <p>생성</p>
          </li>
          <li>
            <p>수정</p>
          </li>
          <li>
            <p>삭제</p>
          </li>
        </ControlCategory>
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
