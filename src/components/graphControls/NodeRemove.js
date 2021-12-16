/* eslint-disable no-console */
import { useState } from 'react';

const NodeRemove = ({ cyRef }) => {
  const [removeNode, setRemoveNode] = useState('');
  const onChangeEvenet = (e) => {
    setRemoveNode(e.target.value);
  };

  // 노드 삭제 이벤트
  const onRemoveNode = (e) => {
    e.preventDefault();
    const targetNode = cyRef.current.$(`[id = "${removeNode}"]`);
    cyRef.current.remove(targetNode);
    setRemoveNode('');
  };

  return (
    <>
      <p>삭제</p>
      <form onSubmit={onRemoveNode}>
        <input
          type='text'
          value={removeNode}
          onChange={onChangeEvenet}
          placeholder='삭제할 노드를 선택하세요'
        />
        <button type='submit' label='test'>
          삭제하기
        </button>
      </form>
    </>
  );
};

export default NodeRemove;
