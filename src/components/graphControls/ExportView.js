import styled from 'styled-components';

import SubmitButton from '../SubmitButton';

const ExportContainer = styled.div`
  margin: 52px auto 0 auto;
  border-top: 1px solid #c9c9c9;
  width: 196px;
`;

const ExportTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 11px 0;
  h1 {
    color: #5d5fef;
  }
  select {
    border: 1px solid white;
    border-radius: 3px;
    font-size: 13px;
    font-weight: bold;
    color: #383838;
    padding: 3px;
    cursor: pointer;
    :focus {
      outline: none;
    }
    :hover {
      border: 1px solid #c9c9c9;
    }
  }
  option {
    color: #383838;
    font-weight: bold;
    border: 1px solid red;
  }
`;

const ExportView = () => {
  return (
    <ExportContainer>
      <ExportTitleBox>
        <h1>Export</h1>
        <select name='exportType'>
          <option value=''>저장타입</option>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPEG</option>
          <option value='json'>JSON</option>
        </select>
      </ExportTitleBox>
      <SubmitButton type='button' label='export' text='내보내기' />
    </ExportContainer>
  );
};

export default ExportView;
