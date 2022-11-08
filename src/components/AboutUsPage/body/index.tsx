import { ReactNode } from "react";
import { DivBody } from "./style";

interface IProps {
  children: ReactNode;
}

export const Body = ({ children }: IProps) => {
  return (
    <>
      <DivBody>{children}</DivBody>
    </>
  );
};
