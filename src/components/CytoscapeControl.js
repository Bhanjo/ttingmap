import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import {
  nodeInputState,
  targetNodeInputState,
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
  // const [newNode, setNewNode] = useRecoilState(nodeInputState);
  const [targetNode, setTargetNode] = useRecoilState(targetNodeInputState);
  const nodeIdCounter = useRef(5);

  const initTargetNode = () => {
    setTargetNode('');
  };

  const onChangeTargetNode = (e) => {
    setTargetNode(e.target.value);
  };

  const handleMode = (mode) => {
    setCurrentMode(mode);
  };

  const countNodeIdCounter = () => {
    nodeIdCounter.current += 1;
  };

  useEffect(() => {
    // 노드 클릭 이벤트
    cyRef.current.on('tap', 'node', (e) => {
      const node = e.target;
      setTargetNode(node.id());
    });
  }, [cyRef, setTargetNode]);

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
            targetNode={targetNode}
            nodeIdCounter={nodeIdCounter}
            countNodeIdCounter={countNodeIdCounter}
            onChangeTargetNode={onChangeTargetNode}
            initTargetNode={initTargetNode}
          />
        )}
        {currentMode === 'delete' && (
          <NodeDelete cyRef={cyRef} targetNode={targetNode} />
        )}
        {currentMode === 'update' && (
          <NodeUpdate
            cyRef={cyRef}
            targetNode={targetNode}
            onChangeTargetNode={onChangeTargetNode}
            initTargetNode={initTargetNode}
          />
        )}
      </div>
    </ControlContainer>
  );
};

export default CytoscapeControl;
