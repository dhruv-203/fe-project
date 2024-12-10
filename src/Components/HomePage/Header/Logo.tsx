import { HTMLAttributes, ReactNode } from "react";
import "../../../utility.css";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

function Logo({ children, className = "fs-5 ", ...rest }: LogoProps) {
  return (
    <div className={"cursor-pointer " + className} {...rest}>
      {children}
    </div>
  );
}
export default Logo;
