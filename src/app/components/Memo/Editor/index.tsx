import { Block } from 'app/components/Block';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 0 0 10px;
  overflow: auto;

  // & * --> Box컴포넌트안에 있는 모든 태그의 스타일을 지정
  & * {
    font-family: 'Noto San KR' !important;
    letter-spacing: -0.2px;
  }
  // Box컴포넌트안에 ql-container/ql-snow클래스를 가지는 태그들 스타일 지정
  & .ql-container.ql-snow {
    border: 0 !important;
  }
`;

const MemoDate = styled.div`
  font-size: 0.85em;
  letter-spacing: -0.3px;
  color: #8b8b8b;
  text-align: center;
`;

export default function MemoEditor() {
  const [value, setValue] = React.useState('');
  return (
    <Box>
      <Block marginTop="5px" />
      <MemoDate>{new Date().toLocaleString()}</MemoDate>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ border: 'none' }}
        //ReactQuill 가장 중요한 modules props에 오브젝트 넣어주기
        modules={{
          //toolbar넝어주기
          toolbar: {
            //Memo폴더안에 있는 toolbar를 toolbar로 사용할거니까 container안에 넣엊준다.
            container: '#toolbar',
          },
        }}
        //에디터에서 사용할 기능들 formats props에 리스트 형식으로 넣어주기
        formats={['bold', 'size', 'header', 'image', 'list', 'link']}
      />
    </Box>
  );
}
