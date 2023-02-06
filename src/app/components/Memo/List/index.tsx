import React from 'react';

import styled from 'styled-components';
import MemoItem from '../Item';

//100vh =  브라우저 세로크기의 100%를 의미한다

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
    //transition ==> 해당 컴포넌트가 설정한 시간만큼의 변환 애니메이션이 생성
    transition: 0.2s;
    &:hover {
      //모바일에서는 컴포넌트를 터치하면  해당 컴포넌트가 hover상태로 변하기 때문에
      //터치하면 margin-left를 0으로 변환하여  메모를 선택하게 하기 위해서
      margin-left: 0;
    }
  }
`;

export default function MemoList() {
  return (
    <List>
      <MemoItem
        id={'1'}
        preview={'나는 메모입니다.'}
        // content={'나는 메모입니다.'}
        created_at={new Date().toString()}
        selected={true}
      />
      <MemoItem
        id={'2'}
        preview={'나는 메모입니다.'}
        // content={'나는 메모입니다.'}
        created_at={new Date().toString()}
        selected={false}
      />
      <MemoItem
        id={'3'}
        preview={'나는 메모입니다.'}
        // content={'나는 메모입니다.'}
        created_at={new Date().toString()}
        selected={false}
      />
    </List>
  );
}
