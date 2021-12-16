import { useState } from 'react';
import styled from 'styled-components';

import NodeCreate from './graphControls/NodeCreate';
import NodeRemove from './graphControls/NodeRemove';

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
`;

const ControlCategoryMode = styled.li`
  margin: 0 0.5rem;
  cursor: pointer;
`;

const CytoscapeControl = ({ cyRef }) => {
  // 전체 컨트롤 모드
  const [controlModes, setControlModes] = useState([
    { name: '생성', mode: 'create' },
    { name: '수정', mode: 'modify' },
    { name: '삭제', mode: 'remove' },
  ]);
  const [currentMode, setCurrentMode] = useState('create');

  const handleMode = (mode) => {
    setCurrentMode(mode);
  };

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
        {currentMode === 'create' && <NodeCreate cyRef={cyRef} />}
        {currentMode === 'remove' && <NodeRemove cyRef={cyRef} />}
      </div>
    </ControlContainer>
  );
};

export default CytoscapeControl;
