import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Order } from "../../Store/Types";
import "./OrderCard.css";
import OrderItem from "./OrderItem";

function OrderCard({ data }: { data: Order }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="order-card container  d-flex flex-column gap-2 align-items-start justify-content-center">
      <div className="two-in-one-row">
        <div className="fs-5  fw-700 text-dark">Order ID</div>
        <div className="fs-6 fw-500 text-secondary">{data.id}</div>
      </div>
      <div className="two-in-one-row">
        <div className="fs-5  fw-700 text-dark">Order Date</div>
        <div className="fs-6 fw-500 text-secondary">
          {new Date(data.orderDate).toLocaleDateString()}
        </div>
      </div>
      <div className="two-in-one-row">
        <div className="fs-5  fw-700 text-dark">Order Total</div>
        <div className="fs-6 fw-500 text-secondary">${data.orderTotal}</div>
      </div>
      <div className="two-in-one-row">
        <div className="fs-5  fw-700 text-dark">Shipping Address</div>
        <div className="fs-6 fw-500 text-secondary">{data.shippingAddress}</div>
      </div>
      <div className="order-items-parent  position-relative d-flex gap-2 align-items-center justify-content-between">
        <div className="fs-5  fw-700 text-dark">Ordered Items</div>
        <div className="p-2 text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <BiChevronUp className="text-dark fs-5" />
          ) : (
            <BiChevronDown className="text-dark fs-5" />
          )}
        </div>
        {isOpen && (
          <div className="order-items-child p-2 d-flex flex-column gap-2 position-absolute align-items-center">
            {data.orderItems.map((val) => (
              <OrderItem key={val.prodID + val.prodColor} data={val} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
