import styled from 'styled-components';

const NodeInputBox = styled.input`
  width: 180px;
  height: 27px;
  background-color: #f6f6f6;
  box-shadow: inset 0 0 2px #00000040;
  margin: 0 auto 12px auto;
  border: none;
  border-radius: 3px;
  :focus {
    box-shadow: inset 0 0 2px #383838;
  }
`;

const InputBox = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  onFocus,
  readOnly,
}) => {
  return (
    <NodeInputBox
      type={type}
      placeholder={placeholder}
      name={name || ''}
      value={value || ''}
      onChange={onChange}
      onFocus={onFocus || null}
      readOnly={readOnly}
    />
  );
};

export default InputBox;
