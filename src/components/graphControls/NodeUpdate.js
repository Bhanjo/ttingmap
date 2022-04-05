import { useEffect, useState } from 'react';
import styled from 'styled-components';

import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton';

const NodeUpdate = ({ cyRef, nodeId, onChangeNodeId, saveGraph }) => {
  const [updateName, setUpdateName] = useState('');
  const [selectedNodeName, setSelectedNodeName] = useState('');

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

    setSelectedNodeName('');
    setUpdateName('');
    saveGraph();
  };

  // 업데이트할 노드 라벨명 표시
  useEffect(() => {
    const selectedNode = cyRef.current.$(`[id = "${nodeId}"]`);
    setSelectedNodeName(selectedNode.data('label'));
  }, [cyRef, nodeId]);

  return (
    <FormBox onSubmit={onUpdateNode}>
      <p>노드 이름: {selectedNodeName}</p>
      <InputBox
        type='text'
        value={nodeId}
        onChange={onChangeNode}
        placeholder='수정할 요소를 클릭하세요'
        readOnly
        hidden
      />
      <InputBox
        type='text'
        value={updateName}
        onChange={onChangeUpdateName}
        placeholder='ex: 새로운 이름'
      />
      <SubmitButton type='submit' label='test' text='변경' />
    </FormBox>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: bold;
    margin: 10px 0;
    width: 194px;
    text-align: left;
  }
`;

export default NodeUpdate;
