import { ReactNode } from "react";

function ErrorText({ children }: { children: ReactNode }) {
  return <div className="text-danger p-2 fs-7">{children}</div>;
}

export default ErrorText;
