/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import InputBox from '../InputBox';
import NodeEdgeChange from '../NodeEdgeChange';
import SubmitButton from '../SubmitButton';
import { isModeNode } from '../globalState/nodeControl';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NodeCreate = ({
  cyRef,
  nodeId,
  onChangeNodeId,
  targetNode,
  onChangeTargetNode,
  initTargetNode,
  nodeIdCounter,
  countNodeIdCounter,
  nodeClickHandler,
}) => {
  const [insertType, setInsertType] = useRecoilState(isModeNode);
  const [newNode, setNewNode] = useState('');
  let isExist = true;

  // form 내용 변경 감지
  const onChangeNewNode = (e) => {
    setNewNode(e.target.value);
  };

  const onChangeToNode = (value) => {
    onChangeNodeId(value);
  };
  const onChangeFromNode = (value) => {
    onChangeTargetNode(value);
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
        source: nodeId,
        target: targetNode,
        label: `edge from ${nodeId} to ${targetNode}`,
      },
    };
    e.preventDefault();
    insertIsExist(nodeId, targetNode);
    if (isExist) {
      cyRef.current.add(newConnect);
      onChangeToNode('');
      initTargetNode();
    } else {
      alert(`입력값을 다시 확인해주세요`);
    }
  };

  // 입력모드 변경 이벤트
  const changeInsertMode = () => {
    setNewNode('');
    setInsertType(!insertType);
  };

  // edge 추가 포커스 이벤트
  const onFocusToNode = (h) => {
    if (insertType === false) {
      cyRef.current.on('tap', 'node', (e) => {
        const node = e.target;
        if (h.target.name === 'startNode') {
          cyRef.current.removeListener('tap', 'node');
          onChangeToNode(node.id());
        } else if (h.target.name === 'endNode') {
          cyRef.current.removeListener('tap', 'node');
          onChangeFromNode(node.id());
        }
      });
    }
  };

  // edge 연결시 nodeClickHandler가 계속 활성화 되는 상태를 막음
  useEffect(() => {
    const cy = cyRef.current;
    cy.removeListener('tap', nodeClickHandler);
    return () => {
      cy.on('tap', 'node', nodeClickHandler);
    };
  }, [cyRef, nodeClickHandler]);

  return (
    <div>
      <NodeEdgeChange type='button' onClick={changeInsertMode} />

      {insertType ? (
        // 신규노드추가
        <FormBox onSubmit={onNewGraph}>
          <InputBox
            type='text'
            placeholder='새로운 노드 만들기'
            value={newNode}
            onChange={onChangeNewNode}
          />
          <SubmitButton type='submit' label='add' text='추가' />
        </FormBox>
      ) : (
        // 노드연결하기
        <FormBox onSubmit={onConnectGraph}>
          <InputBox
            type='text'
            placeholder='시작요소'
            value={nodeId}
            onChange={onChangeToNode}
            onFocus={onFocusToNode}
            name='startNode'
            readOnly
          />
          <InputBox
            type='text'
            placeholder='타겟요소'
            value={targetNode}
            onChange={onChangeFromNode}
            onFocus={onFocusToNode}
            name='endNode'
            readOnly
          />
          <SubmitButton type='submit' label='connect' text='연결' />
        </FormBox>
      )}
    </div>
  );
};

export default NodeCreate;
