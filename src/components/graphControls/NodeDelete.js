/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { isModeNode } from '../globalState/nodeControl';

const NodeDelete = ({
  cyRef,
  nodeId,
  onChangeNodeId,
  initNodeId,
  targetNode,
  onChangeTargetNode,
  initTargetNode,
}) => {
  const [removeType, setRemoveType] = useRecoilState(isModeNode);

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
    initNode();
  };

  // edge삭제 이벤트
  const onRemoveEdge = (e) => {
    e.preventDefault();
    cyRef.current.remove(`edge[source = "${nodeId}"][target= "${targetNode}"]`);
    initNode();
    initTargetNode();
  };

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
    };
  }, [cyRef, removeType, onChangeNodeId, onChangeTargetNode]);

  return (
    <>
      <button type='button' onClick={changeMode}>
        모드변경하기
      </button>
      {removeType ? (
        <form onSubmit={onRemoveNode}>
          <p>선택된 id : {nodeId}</p>
          <input
            type='text'
            value={nodeId || ''}
            onChange={onChangeRemoveNode}
            placeholder='삭제할 노드를 선택하세요'
            hidden
          />
          <button type='submit' label='test'>
            삭제하기
          </button>
        </form>
      ) : (
        <form onSubmit={onRemoveEdge}>
          <input
            type='text'
            value={nodeId || ''}
            onChange={onChangeRemoveNode}
            placeholder='From'
          />
          <input
            type='text'
            value={targetNode || ''}
            onChange={onChangeConnectNode}
            placeholder='To'
          />
          <button type='submit' label='test'>
            삭제하기
          </button>
        </form>
      )}
    </>
  );
};

export default NodeDelete;
