import styled from 'styled-components';

// revert
const ButtonBox = styled.button`
  width: 196px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #898bff;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: 0.3s;
  :hover {
    background-color: #5d5fef;
  }
`;

const SubmitButton = ({ type, label, text }) => {
  return (
    <ButtonBox type={type} label={label}>
      {text}
    </ButtonBox>
  );
};

export default SubmitButton;
