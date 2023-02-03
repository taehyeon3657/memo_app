import React from 'react';

import styled from 'styled-components';

//100vh =  브라우저 세로크기의 100%를 의미한다

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
`;

export default function MemoList() {
  return <List></List>;
}
