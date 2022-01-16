import { useEffect, useRef, useState } from 'react';
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

const ExportDownLoad = styled.a`
  img {
    display: none;
  }
`;

const ExportView = ({ cyRef }) => {
  const [exportLink, setExportLink] = useState(false);
  const downloadRef = useRef();

  // 다운로드 설정
  const imgOption = { bg: '#ddd' };
  const [exportType, setExportType] = useState('');

  const handleExportType = (e) => {
    if (e.target.value === 'png') setExportType(cyRef.current.png(imgOption));
    else if (e.target.value === 'jpg')
      setExportType(cyRef.current.jpg(imgOption));
    else if (e.target.value === 'json') setExportType(cyRef.current.json());
  };

  const exporToFile = (e) => {
    e.preventDefault();
    setExportLink(!exportLink);
  };

  useEffect(() => {
    if (exportLink) {
      downloadRef.current.click();
      setExportLink(!exportLink);
    }
  }, [exportLink]);

  return (
    <ExportContainer>
      <form onSubmit={exporToFile}>
        <ExportTitleBox>
          <h1>Export</h1>
          <select onChange={handleExportType}>
            <option value='png'>PNG</option>
            <option value='jpg'>JPG</option>
            {/* <option value='json'>JSON</option> */}
          </select>
        </ExportTitleBox>
        <SubmitButton type='submit' label='export' text='내보내기' />
      </form>
      <ExportDownLoad
        ref={downloadRef}
        href={exportLink ? exportType : null}
        download='ttingmap'
      />
    </ExportContainer>
  );
};

export default ExportView;
