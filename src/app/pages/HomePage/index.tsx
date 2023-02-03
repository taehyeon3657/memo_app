import MemoEditor from 'app/components/Editor';
import MemoList from 'app/components/List';
import MemoToolBar from 'app/components/Toolbar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function HomePage() {
  return (
    <>
      <div>
        <MemoToolBar />
        <FlexRow>
          <MemoList />
          <MemoEditor />
        </FlexRow>
      </div>
    </>
  );
}
