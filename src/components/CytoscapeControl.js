/* eslint-disable no-console */
import { useState, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import {
  nodeInputState,
  targetNodeInputState,
  isModeNode,
} from './globalState/nodeControl';
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
  padding-top: 1rem;
`;

const ControlCategory = styled.ul`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const ControlCategoryMode = styled.li`
  margin: 0 0.5rem;
  cursor: pointer;
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

  useEffect(() => {
    const cy = cyRef.current;
    // 노드 클릭 이벤트
    const nodeClickHandler = (e) => {
      const node = e.target;
      setNodeId(node.id());
    };
    if (inputType) {
      cy.on('tap', 'node', nodeClickHandler);
    } else {
      cy.removeListener('tap', nodeClickHandler);
    }
  }, [cyRef, inputType, setNodeId, setTargetNode]);

  return (
    <ControlContainer>
      <div>
        <ControlCategory>
          {controlModes.map((mode) => (
            <ControlCategoryMode
              onClick={() => handleMode(mode.mode)}
              key={mode.mode}
            >
              <p>{mode.name}</p>
            </ControlCategoryMode>
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
    </ControlContainer>
  );
};

export default CytoscapeControl;
