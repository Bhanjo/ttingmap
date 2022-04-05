import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import InputBox from '../InputBox';
import NodeEdgeChange from '../NodeEdgeChange';
import NodeIdCheck from '../NodeIdCheck';
import SubmitButton from '../SubmitButton';
import { isModeNode, currentNodeId } from '../globalState/nodeControl';

const NodeDelete = ({
  cyRef,
  nodeId,
  onChangeNodeId,
  initNodeId,
  targetNode,
  onChangeTargetNode,
  initTargetNode,
  nodeClickHandler,
  saveGraph,
}) => {
  const [removeType, setRemoveType] = useRecoilState(isModeNode);
  const [updateNodeId, setUpdateNodeId] = useRecoilState(currentNodeId);
  const [startNodeName, setStartNodeName] = useState('');
  const [endNodeName, setEndNodeName] = useState('');

  const onChangeRemoveNode = (e) => {
    onChangeNodeId(e.target.value);
  };
  const initNode = () => {
    initNodeId();
  };

  const onChangeConnectNode = (e) => {
    onChangeTargetNode(e.target.value);
  };

  const changeMode = () => {
    initNode();
    setRemoveType(!removeType);
  };

  // 노드 삭제 이벤트
  const onRemoveNode = (e) => {
    e.preventDefault();
    const findNode = cyRef.current.$(`[id = "${nodeId}"]`);
    cyRef.current.remove(findNode);
    NodeIdCheck(cyRef, setUpdateNodeId);

    initNode();
    saveGraph();
  };

  // edge삭제 이벤트
  const onRemoveEdge = (e) => {
    e.preventDefault();
    cyRef.current.remove(`edge[source = "${nodeId}"][target= "${targetNode}"]`);

    initNode();
    initTargetNode();
    saveGraph();
  };

  // 표시될 라벨 이름 업데이트
  useEffect(() => {
    const startNode = cyRef.current.$(`[id = "${nodeId}"]`);
    setStartNodeName(startNode.data('label'));
    const endNode = cyRef.current.$(`[id="${targetNode}"]`);
    setEndNodeName(endNode.data('label'));
  }, [cyRef, nodeId, targetNode]);

  useEffect(() => {
    const cy = cyRef.current;
    // 간선 삭제 컨트롤
    if (removeType === false) {
      cy.removeListener('tap', 'node');
      cy.on('tap', 'edge', (e) => {
        const edge = e.target;
        onChangeNodeId(edge.data().source);
        onChangeTargetNode(edge.data().target);
      });
    }
    return () => {
      cy.removeListener('tap', 'edge');
      cy.on('tap', 'node', nodeClickHandler);
    };
  }, [cyRef, removeType, onChangeNodeId, onChangeTargetNode, nodeClickHandler]);

  return (
    <>
      <NodeEdgeChange type='button' onClick={changeMode} />
      {removeType ? (
        <FormBox onSubmit={onRemoveNode}>
          <p>{startNodeName}</p>
          <InputBox
            type='text'
            value={nodeId || ''}
            onChange={onChangeRemoveNode}
            placeholder='삭제할 요소를 선택하세요'
            readOnly
            hidden
          />
          <SubmitButton type='submit' label='test' text='삭제' />
        </FormBox>
      ) : (
        <FormBox onSubmit={onRemoveEdge}>
          <p>{startNodeName}</p>
          <p>{endNodeName}</p>
          <InputBox
            type='text'
            value={nodeId || ''}
            onChange={onChangeRemoveNode}
            placeholder='선을 선택하세요'
            readOnly
            hidden
          />
          <InputBox
            type='text'
            value={targetNode || ''}
            onChange={onChangeConnectNode}
            placeholder='선을 선택하세요'
            readOnly
            hidden
          />
          <SubmitButton type='submit' label='test' text='삭제' />
        </FormBox>
      )}
    </>
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

export default NodeDelete;
