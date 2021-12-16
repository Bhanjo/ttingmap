/* eslint-disable no-console */
import { useState } from 'react';

const NodeDelete = ({ cyRef }) => {
  const [removeNode, setRemoveNode] = useState('');
  const [targetNode, setTargetNode] = useState('');
  const [removeType, setRemoveType] = useState(true);

  const onChangeRemoveNode = (e) => {
    setRemoveNode(e.target.value);
  };
  const onChangeTargetNode = (e) => {
    setTargetNode(e.target.value);
  };

  const changeMode = () => {
    setRemoveNode('');
    setTargetNode('');
    setRemoveType(!removeType);
  };

  // 노드 삭제 이벤트
  const onRemoveNode = (e) => {
    e.preventDefault();
    const findNode = cyRef.current.$(`[id = "${removeNode}"]`);
    cyRef.current.remove(findNode);
    setRemoveNode('');
  };

  // edge삭제 이벤트
  const onRemoveEdge = (e) => {
    e.preventDefault();
    // some Evnet occur
    cyRef.current.remove(
      `edge[source = "${removeNode}"][target= "${targetNode}"]`,
    );
    setRemoveNode('');
    setTargetNode('');
  };

  return (
    <>
      <button type='button' onClick={changeMode}>
        모드변경하기
      </button>
      {removeType ? (
        <form onSubmit={onRemoveNode}>
          <input
            type='text'
            value={removeNode}
            onChange={onChangeRemoveNode}
            placeholder='삭제할 노드를 선택하세요'
          />
          <button type='submit' label='test'>
            삭제하기
          </button>
        </form>
      ) : (
        <form onSubmit={onRemoveEdge}>
          <input
            type='text'
            value={removeNode}
            onChange={onChangeRemoveNode}
            placeholder='From'
          />
          <input
            type='text'
            value={targetNode}
            onChange={onChangeTargetNode}
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
