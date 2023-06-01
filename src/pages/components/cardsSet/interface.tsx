import { ReactNode } from "react";

export default interface CardProps {
  status?: number;
  id: number;
  content: ReactNode;
}
