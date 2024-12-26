import { ReactNode } from "react";
import "./AddressCard.css";
interface AddressCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
function AddressCard({ children, ...rest }: AddressCardProps) {
  return (
    <div
      className="Address-Card p-3 fs-6 fw-600 text-secondary rounded"
      {...rest}
    >
      {children}
    </div>
  );
}

export default AddressCard;
