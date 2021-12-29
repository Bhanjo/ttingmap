import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { isModeNode } from '../globalState/nodeControl';

const NodeUpdate = ({
  cyRef,
  nodeId,
  onChangeNodeId,
  targetNode,
  onChangeTargetNode,
  initTargetNode,
}) => {
  const [updateName, setUpdateName] = useState('');
  const [updateType, setUpdateType] = useRecoilState(isModeNode);

  const onChangeNode = (e) => {
    onChangeNodeId(e.target.value);
  };

  const onChangeUpdateName = (e) => {
    setUpdateName(e.target.value);
  };

  const changeMode = () => {
    setUpdateName('');
    setUpdateType(!updateType);
  };

  // 노드 수정 이벤트
  const onUpdateNode = (e) => {
    e.preventDefault();
    const findNode = cyRef.current.$(`[id = "${nodeId}"]`);
    findNode.data('label', updateName);
    setUpdateName('');
  };

  return (
    <>
      <button type='button' onClick={changeMode}>
        모드변경하기
      </button>
      {updateType ? (
        <form onSubmit={onUpdateNode}>
          <p>바꿀 노드 id: {nodeId} </p>
          <input
            type='text'
            value={nodeId}
            onChange={onChangeNode}
            placeholder='수정할 노드 이름'
            hidden='hidden'
          />
          <input
            type='text'
            value={updateName}
            onChange={onChangeUpdateName}
            placeholder='새로운 이름'
          />
          <button type='submit' label='test'>
            수정하기
          </button>
        </form>
      ) : (
        <p>다른모드</p>
      )}
    </>
  );
};

export default NodeUpdate;
