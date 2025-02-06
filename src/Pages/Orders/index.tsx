import { useSelector } from "react-redux";
import OrderCard from "../../Components/Orders/OrderCard";
import { RootState } from "../../Store";
import { Order } from "../../Store/Types";
import "./Orders.css";
function Orders() {
  const orders = useSelector<RootState, Order[]>(
    (state) => state.auth.user!.orders
  );
  // console.log(orders);
  return (
    <div className=" orders-main d-flex flex-column gap-4 h-100 w-100 ">
      <div className="fs-3 fw-700 text-dark p-2">Order Details</div>
      <div className="p-2 orders-container d-flex flex-column gap-4 align-items-center justify-content-center">
        {orders.map((val) => (
          <OrderCard key={val.id} data={val} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
