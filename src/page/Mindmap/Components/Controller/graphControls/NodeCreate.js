/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
import { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import InputBox from '../../../../../components/InputBox';
import SubmitButton from '../../../../../components/SubmitButton';
import {
  isModeNode,
  currentNodeId,
} from '../../../../../components/globalState/nodeControl';
import NodeEdgeChange from '../../NodeEdgeChange';

const NodeCreate = ({
  cyRef,
  nodeId,
  onChangeNodeId,
  targetNode,
  onChangeTargetNode,
  initTargetNode,
  nodeClickHandler,
  saveGraph,
}) => {
  const [insertType, setInsertType] = useRecoilState(isModeNode);
  const [newNode, setNewNode] = useState('');
  const [newNodeId, setNewNodeId] = useRecoilState(currentNodeId);
  const [startNodeName, setStartNodeName] = useState('시작노드');
  const [endNodeName, setEndNodeName] = useState('끝노드');
  const startRef = useRef();
  const endRef = useRef();
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
      if (cyRef.current.getElementById(node).length === 0) isExist = false;
    });
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

  // 연결할 노드의 라벨 표시
  useEffect(() => {
    const startNode = cyRef.current.$(`[id="${nodeId}"]`);
    const endNode = cyRef.current.$(`[id="${targetNode}"]`);
    setStartNodeName(startNode.data('label'));
    setEndNodeName(endNode.data('label'));
  }, [cyRef, nodeId, targetNode]);

  // 노드 추가 이벤트
  const onNewGraph = (e) => {
    const item = {
      data: {
        id: newNodeId,
        label: newNode,
      },
      position: {
        x: 50,
        y: 600,
      },
    };
    e.preventDefault();
    cyRef.current.add(item);
    setNewNodeId(newNodeId + 1);
    setNewNode('');
    saveGraph();
  };

  // p태그 클릭시 input 포커스
  const handleStartInput = () => {
    startRef.current.focus();
  };
  const handleEndInput = () => {
    endRef.current.focus();
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
    } else alert(`입력값을 다시 확인해주세요`);
    saveGraph();
  };

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
          <p onClick={handleStartInput}>{startNodeName}</p>
          <p onClick={handleEndInput}>{endNodeName}</p>
          <InputBox
            type='text'
            placeholder='시작요소'
            value={nodeId}
            onChange={onChangeToNode}
            onFocus={onFocusToNode}
            name='startNode'
            refs={startRef}
            readOnly
            height='0'
          />
          <InputBox
            type='text'
            placeholder='타겟요소'
            value={targetNode}
            onChange={onChangeFromNode}
            onFocus={onFocusToNode}
            name='endNode'
            refs={endRef}
            readOnly
            height='0'
          />
          <SubmitButton type='submit' label='connect' text='연결' />
        </FormBox>
      )}
    </div>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    border-radius: 3px;
    background-color: #f6f6f6;
    box-shadow: inset 0 0 2px #00000040;
    padding: 6px;
    margin: 5px 0;
    width: 180px;
    min-height: 15px;
    text-align: left;
    cursor: pointer;
  }
`;

export default NodeCreate;
