import { useState } from 'react';

const NodeUpdate = ({ cyRef, nodeId, onChangeNodeId }) => {
  const [updateName, setUpdateName] = useState('');

  const onChangeNode = (e) => {
    onChangeNodeId(e.target.value);
  };

  const onChangeUpdateName = (e) => {
    setUpdateName(e.target.value);
  };

  // 노드 수정 이벤트
  const onUpdateNode = (e) => {
    e.preventDefault();
    const findNode = cyRef.current.$(`[id = "${nodeId}"]`);
    findNode.data('label', updateName);
    setUpdateName('');
  };

  return (
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
  );
};

export default NodeUpdate;
