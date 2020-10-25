import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
type StyledProps = { active: boolean };
const Styled = styled.div<StyledProps>`
  padding: 10px;
  font-size: 1.25em;
  display: flex;
  justify-content: space-between;
  overflow-wrap: anywhere;
  background: ${({ active, theme }) =>
    active ? theme.colors.backgroundHighlight : "inherit"};
  cursor: ${({ active }) => (active ? "inherit" : "pointer")};
`;

interface FunctionWithChannel {
  (channel: string): void;
}

export type Props = {
  name: string;
  active: boolean;
  onClose: FunctionWithChannel;
  onClick: FunctionWithChannel;
};
const Component: React.FC<Props> = ({ name, active, onClose, onClick }) => {
  return (
    <Styled active={active} onClick={() => onClick(name)}>
      {name}
      <IoIosClose
        style={{ cursor: "pointer", flex: "0 0 auto" }}
        onClick={(e) => {
          e.stopPropagation();
          onClose(name);
        }}
      />
    </Styled>
  );
};
export default Component;
