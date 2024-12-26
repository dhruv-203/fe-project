import { useMemo, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useCart } from "../../Context/context";
import { RootState } from "../../Store";
import {
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} from "../../Store/Slices/cartApi";
import { debounce, toastify } from "../../utils";
import "./CustomNumberInput.css";

interface CustomNumberInputProps {
  id: string;
  color: string;
}

export default function CustomNumberInput({
  id,
  color,
}: CustomNumberInputProps) {
  const { getQuantity } = useCart();

  const [count, setCount] = useState(getQuantity(id, color));

  const [removeFromCart, { isLoading: isRemoveLoading }] =
    useRemoveFromCartMutation();

  const [updateFromCart, { isLoading: isUpdateLoading }] =
    useUpdateCartMutation();

  const cartID = useSelector<RootState, string>(
    (state) => state.auth.user!.cart.id
  );

  const removeCartHandler = async (prodID: string, prodColor: string) => {
    try {
      const res = await removeFromCart({ cartID, prodID, prodColor }).unwrap();
      toastify(res.message, "info");
    } catch (err: any) {
      console.error(err);
      toastify(err?.data?.message ?? "Unexpected Error Occurred", "error");
      setCount(getQuantity(id, color));
    }
  };

  const updateCartHandler = async (
    prodID: string,
    prodColor: string,
    prodQuant: number
  ) => {
    try {
      const res = await updateFromCart({
        cartID,
        prodID,
        prodColor,
        prodQuant,
      }).unwrap();
      toast(res.message, { type: "info" });
    } catch (err: any) {
      console.error(err);
      toast(err?.data?.message ?? "Unexpected Error Occurred", {
        type: "error",
      });
      setCount(getQuantity(id, color));
    }
  };

  const debouncedRemovedTrigger = useMemo(
    () =>
      debounce((params: [string, string]) => removeCartHandler(...params), 500),
    [removeFromCart]
  );

  const debouncedUpdateTrigger = useMemo(
    () =>
      debounce(
        (params: [string, string, number]) => updateCartHandler(...params),
        1000
      ),
    [updateFromCart]
  );

  return (
    <div className="quantity-container p-2">
      <input
        disabled={isRemoveLoading || isUpdateLoading}
        className="rounded"
        onChange={(e) => {
          if (!isNaN(+e.target.value)) {
            if (+e.target.value === 0) {
              setCount(0);
              debouncedUpdateTrigger([id, color, 0]);
              return;
            }
            setCount(+e.target.value);
            debouncedUpdateTrigger([id, color, +e.target.value]);
            return;
          } else {
            return;
          }
        }}
        type="number"
        name="quantity"
        value={count}
      />
      <BiChevronUp
        className="up-arrow fs-5"
        onClick={() => {
          setCount(count + 1);
          debouncedUpdateTrigger([id, color, count + 1]);
        }}
      />
      <BiChevronDown
        className="down-arrow fs-5"
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
            debouncedUpdateTrigger([id, color, count - 1]);
          } else {
            setCount(0);
            debouncedRemovedTrigger([id, color]);
          }
        }}
      />
    </div>
  );
}
