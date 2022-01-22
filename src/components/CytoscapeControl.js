/* eslint-disable no-console */
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import {
  nodeInputState,
  targetNodeInputState,
  isModeNode,
} from './globalState/nodeControl';
import ExportView from './graphControls/ExportView';
import NodeCreate from './graphControls/NodeCreate';
import NodeDelete from './graphControls/NodeDelete';
import NodeUpdate from './graphControls/NodeUpdate';

const ControlContainer = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50px;
  right: 0;
  width: 250px;
  height: 100vh;
  padding: 1rem 0;
  border-left: 1px solid #eee;
  @media screen and (max-width: 768px) {
    /* position: static; */
    top: auto;
    bottom: 0;
    width: 100%;
    height: auto;
    /* overflow-y: scroll; */
  }
`;

const ControlCategory = styled.ul`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 25px;
`;

const ControlCategoryMode = styled.input`
  margin: 0 0.5rem;
  cursor: pointer;
`;

const ControlCategryModeLabel = styled.label`
  margin: 0 0.5rem;
  cursor: pointer;
  ${ControlCategoryMode}:checked ~ & {
    border-bottom: 3px solid #5d5fef;
    font-weight: bold;
  }
`;

const CytoscapeControl = ({ cyRef }) => {
  // 전체 컨트롤 모드
  const [controlModes, setControlModes] = useState([
    { name: '생성', mode: 'create' },
    { name: '수정', mode: 'update' },
    { name: '삭제', mode: 'delete' },
  ]);
  const [currentMode, setCurrentMode] = useState('create');
  const inputType = useRecoilValue(isModeNode);
  const [nodeId, setNodeId] = useRecoilState(nodeInputState);
  const [targetNode, setTargetNode] = useRecoilState(targetNodeInputState);
  const nodeIdCounter = useRef(5);

  // CRUD 타입 결정
  const handleMode = (mode) => {
    setNodeId('');
    setTargetNode('');
    setCurrentMode(mode);
  };

  // 싱글 노드 이벤트
  const initNodeId = () => {
    setNodeId();
  };
  const onChangeNodeId = (value) => {
    setNodeId(value);
  };

  // edge 타겟 노드 이벤트
  const initTargetNode = () => {
    setTargetNode('');
  };
  const onChangeTargetNode = (value) => {
    setTargetNode(value);
  };

  const countNodeIdCounter = () => {
    nodeIdCounter.current += 1;
  };

  // 노드 클릭 이벤트
  const nodeClickHandler = useCallback(
    (e) => {
      const node = e.target;
      setNodeId(node.id());
    },
    [setNodeId],
  );

  useEffect(() => {
    const cy = cyRef.current;
    if (inputType) {
      cy.on('tap', 'node', nodeClickHandler);
    } else {
      cy.removeListener('tap', nodeClickHandler);
    }
  }, [cyRef, inputType, nodeClickHandler]);

  return (
    <ControlContainer>
      <div>
        {/* 컨트롤 카테고리 컴포넌트화 시키기 */}
        <ControlCategory>
          {controlModes.map((mode) => (
            <div key={mode.mode}>
              <ControlCategoryMode
                onClick={() => handleMode(mode.mode)}
                id={mode.mode}
                type='radio'
                value={mode.mode}
                name='modes'
                hidden
                defaultChecked={mode.mode === 'create'}
              />
              <ControlCategryModeLabel htmlFor={mode.mode}>
                {mode.name}
              </ControlCategryModeLabel>
            </div>
          ))}
        </ControlCategory>
      </div>
      <div>
        {currentMode === 'create' && (
          <NodeCreate
            cyRef={cyRef}
            inputType={inputType}
            nodeId={nodeId}
            onChangeNodeId={onChangeNodeId}
            targetNode={targetNode}
            nodeIdCounter={nodeIdCounter}
            countNodeIdCounter={countNodeIdCounter}
            onChangeTargetNode={onChangeTargetNode}
            initTargetNode={initTargetNode}
            nodeClickHandler={nodeClickHandler}
          />
        )}
        {currentMode === 'delete' && (
          <NodeDelete
            cyRef={cyRef}
            nodeId={nodeId}
            onChangeNodeId={onChangeNodeId}
            initNodeId={initNodeId}
            targetNode={targetNode}
            onChangeTargetNode={onChangeTargetNode}
            initTargetNode={initTargetNode}
            nodeClickHandler={nodeClickHandler}
          />
        )}
        {currentMode === 'update' && (
          <NodeUpdate
            cyRef={cyRef}
            nodeId={nodeId}
            onChangeNodeId={onChangeNodeId}
          />
        )}
      </div>
      <ExportView cyRef={cyRef} />
    </ControlContainer>
  );
};

export default CytoscapeControl;
