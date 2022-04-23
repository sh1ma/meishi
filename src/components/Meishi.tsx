import { ReactNode } from "react";
import styled from "styled-components";

export const Border = styled.div`
  width: 4px;
  height: 60%;
  background-color: #36393f;
`;

type Props = {
  className?: string;
  children?: ReactNode;
};

const MeishiBase: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Meishi = styled(MeishiBase)`
  height: 756px;
  width: 1253px;
  background-color: #2f3136;
  color: #f4f2ff;
  border-radius: 5mm;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Meishi;
