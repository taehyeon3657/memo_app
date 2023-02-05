import SmallButton from 'app/components/Button/SmallButton';
import { TitleText } from 'app/components/Text';
import React from 'react';
import styled from 'styled-components';

//JSX타입의 컴포넌트를 import하는 방식
import { ReactComponent as PostDeleteIcon } from './assets/delete.svg';
import { ReactComponent as MakeImageIcon } from './assets/add_to_photos.svg';
import { ReactComponent as MakeTodoIcon } from './assets/check_circle.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields.svg';
import { Block } from 'app/components/Block';
import SearchInput from 'app/components/Input/SearchInput';

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

//styled괄호안에 변수를 넣어줘서 styled태그를 상속받을 수 있다.

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
  }
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolBar() {
  return (
    <Box>
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>MEMO</TitleText>
        <SmallButton onClick={() => {}} Icon={() => <PostDeleteIcon />} />
      </LeftMenu>
      <RightMenu>
        <SmallButton onClick={() => {}} Icon={() => <PostAddIcon />} />
        <div>
          <SmallButton onClick={() => {}} Icon={() => <MakeSizeIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeBoldIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeTodoIcon />} />
        </div>
        <div>
          <SmallButton onClick={() => {}} Icon={() => <MakeImageIcon />} />
          <Block marginRight="5px" />
          <SearchInput />
        </div>
      </RightMenu>
    </Box>
  );
}
