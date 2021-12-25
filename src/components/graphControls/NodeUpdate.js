/* eslint-disable no-console */
import { useState } from 'react';

const NodeDelete = ({ cyRef }) => {
  const [updateNode, setUpdateNode] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateType, setUpdateType] = useState(true);

  const onChangeUpdateNode = (e) => {
    setUpdateNode(e.target.value);
  };
  const onChangeUpdateName = (e) => {
    setUpdateName(e.target.value);
  };

  const changeMode = () => {
    setUpdateNode('');
    setUpdateName('');
    setUpdateType(!updateType);
  };

  // 노드 수정 이벤트
  const onUpdateNode = (e) => {
    e.preventDefault();
    const findNode = cyRef.current.$(`[id = "${updateNode}"]`);
    findNode.data('id', updateName);
    findNode.data('label', updateName);
    setUpdateNode('');
    setUpdateName('');
    console.log(cyRef.current.$('*'));
  };

  return (
    <>
      <button type='button' onClick={changeMode}>
        모드변경하기
      </button>
      {updateType ? (
        <form onSubmit={onUpdateNode}>
          <input
            type='text'
            value={updateNode}
            onChange={onChangeUpdateNode}
            placeholder='수정할 노드 이름'
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

export default NodeDelete;
