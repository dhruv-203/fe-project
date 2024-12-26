import { RxCross2 } from "react-icons/rx";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { useRemoveFromCartMutation } from "../../Store/Slices/cartApi";
import { CartItem } from "../../Store/Types";
import { toastify } from "../../utils";
import CircleBtn from "../ProductDetailsPage/CircleBtn";
import CartText from "./CartText";
import CustomNumberInput from "./CustomNumberInput";
function CartProdCard({ data }: { data: CartItem }) {
  const cartID = useSelector<RootState, string>(
    (state) => state.auth.user!.cart.id
  );
  const [removeFromCart, { isLoading: isRemoveLoading }] =
    useRemoveFromCartMutation();

  const removeCartHandler = async (prodID: string, prodColor: string) => {
    try {
      const res = await removeFromCart({ cartID, prodID, prodColor }).unwrap();
      toastify(res.message, "info");
    } catch (err: any) {
      console.error(err);
      toastify(err?.data?.message ?? "Unexpected Error Occurred", "error");
    }
  };

  return (
    <div className="d-flex cart-product-card justify-content-between p-3">
      <div className="cart-product-detail d-flex gap-3 align-items-center">
        <div
          style={{ backgroundImage: `url(${data.img})` }}
          className="cart-product-image rounded px-2"
        >
          <CircleBtn
            width={"18px"}
            className={"cross-btn"}
            onClick={() => {
              if (!isRemoveLoading)
                removeCartHandler(data.prodID, data.prodColor);
            }}
            bgColor={isRemoveLoading ? "#007bff" : "#db4444"}
            height={"18px"}
          >
            {isRemoveLoading ? (
              <ReactLoading
                type="spin"
                className="mx-auto my-auto"
                color="#fff"
                height={12}
                width={12}
              />
            ) : (
              <RxCross2 className="text-light mx-auto my-auto cross fs-6" />
            )}
          </CircleBtn>
        </div>
        <div className=" cart-product-content flex-column gap-3 align-items-start px-2 ">
          <CartText className={" product-title fw-600 p-2"}>
            {data.prodName}
          </CartText>
          <span className="d-flex gap-3 p-2">
            <CartText className={" product-title fw-600 "}>Color: </CartText>{" "}
            <CircleBtn
              height={"30px"}
              width={"30px"}
              bgColor={data.prodColor}
            />
          </span>
          <span className="d-flex gap-3 p-2 ">
            <CartText className={" product-title fw-600 "}>Price: </CartText>{" "}
            <CartText className={" fw-400 "}>${data.prodPrice}</CartText>
          </span>
        </div>
      </div>
      <div className="sub-total p-2 fw-600 fs-6">
        {parseFloat((+data.prodQuant * +data.prodPrice).toString()).toFixed(2)}
      </div>
      <CustomNumberInput id={data.prodID} color={data.prodColor} />
    </div>
  );
}

export default CartProdCard;
