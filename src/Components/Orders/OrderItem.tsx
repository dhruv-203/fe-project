import { CartItem } from "../../Store/Types";
import CircleBtn from "../ProductDetailsPage/CircleBtn";
import "./OrderItem.css";

function OrderItem({ data }: { data: CartItem }) {
  return (
    <div className="order-item-card d-flex gap-3 p-2">
      <div
        className="order-item-image"
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div className="order-item-detail d-flex flex-column gap-2 align-items-start">
        <div className="fs-5 fw-600 text-dark">{data.prodName}</div>
        <div className="d-flex gap-3 p-2">
          <div className="fs-5 fw-500 text-dark">Color: </div>
          <CircleBtn height={"30px"} width={"30px"} bgColor={data.prodColor} />
        </div>
        <div className="d-flex gap-3 p-2">
          <div className="fs-5 fw-500 text-dark">Price: </div>
          <div className="fs-5 fw-400 text-dark">${data.prodPrice}</div>
        </div>
        <div className="d-flex gap-3 p-2">
          <div className="fs-5 fw-500 text-dark">Quantity: </div>
          <div className="fs-5 fw-400 text-dark">{data.prodQuant}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
