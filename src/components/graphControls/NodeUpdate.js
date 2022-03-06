import { useState } from 'react';
import styled from 'styled-components';

import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton';

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NodeUpdate = ({ cyRef, nodeId, onChangeNodeId, saveGraph }) => {
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
    saveGraph();
  };

  return (
    <FormBox onSubmit={onUpdateNode}>
      <InputBox
        type='text'
        value={nodeId}
        onChange={onChangeNode}
        placeholder='수정할 요소를 클릭하세요'
        readOnly
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

export default NodeUpdate;
