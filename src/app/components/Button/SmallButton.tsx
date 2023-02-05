import React from 'react';
import styled from 'styled-components';

const RoundBox = styled.button`
  width: 36px;
  min-width: 32px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 5px;
  border: none;
  outline: 0;
  background: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  & svg {
    fill: #646464;
  }
`;

export default function SmallButton({
  className,
  value,
  onClick,
  Icon,
}: {
  className?: string;
  value?: string;
  onClick?: () => void;
  //onclick은 들어가는 인자도 없고 리턴도 void로 설정해준다.
  Icon: () => JSX.Element;
  // JSX => HTML형식의 타입
}) {
  return (
    <RoundBox onClick={onClick} className={className} value={value}>
      <Icon />
    </RoundBox>
  );
}
