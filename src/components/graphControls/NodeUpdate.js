/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import nodeInputState from '../globalState/nodeControl';

const NodeDelete = ({ cyRef }) => {
  const [updateNode, setUpdateNode] = useRecoilState(nodeInputState);
  const [updateName, setUpdateName] = useState('');
  const [updateType, setUpdateType] = useState(true);

  const onChangeUpdateName = (e) => {
    setUpdateName(e.target.value);
  };

  useEffect(() => {
    // 노드 클릭 이벤트
    cyRef.current.on('tap', 'node', (e) => {
      const node = e.target;
      setUpdateNode(node.id());
      console.log(node.data().label);
    });
  }, [cyRef, setUpdateNode]);

  const onChangeUpdateNode = (e) => {
    setUpdateNode(e.target.value);
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
    findNode.data('label', updateName);
    setUpdateNode('');
    setUpdateName('');
    // console.log(cyRef.current.$('*'));
  };

  return (
    <>
      <button type='button' onClick={changeMode}>
        모드변경하기
      </button>
      {updateType ? (
        <form onSubmit={onUpdateNode}>
          <p>바꿀 노드 id: {updateNode} </p>
          <input
            type='text'
            value={updateNode}
            onChange={onChangeUpdateNode}
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

export default NodeDelete;
