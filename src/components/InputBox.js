import styled from 'styled-components';

const NodeInputBox = styled.input`
  width: 180px;
  height: 27px;
  background-color: #f6f6f6;
  box-shadow: inset 10px 10px #ffffff40;
  margin: 0 auto;
  border-radius: 3px;
`;

const InputBox = ({ type, placeholder, value, onChange, name, onFocus }) => {
  return (
    <NodeInputBox
      type={type}
      placeholder={placeholder}
      name={name || ''}
      value={value || ''}
      onChange={onChange}
      onFocus={onFocus || null}
    />
  );
};

export default InputBox;
