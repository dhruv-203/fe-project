import { useState } from "react";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoMdEye } from "react-icons/io";
import { RxStar, RxStarFilled } from "react-icons/rx";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { useCart, useWindowSize } from "../../Context/context";
import { RootState } from "../../Store";
import {
  useAddToCartMutation,
  useRemoveFromCartMutation,
} from "../../Store/Slices/cartApi";
import { useAddToWishlistMutation } from "../../Store/Slices/userApi";
import { CartItem } from "../../Store/Types";
import { toastify } from "../../utils";
import PreTitle from "../HomePage/EditorPick/PreTitle";
import SectionDescription from "../HomePage/EditorPick/SectionDescription";
import LogoContainer from "../HomePage/Header/LogoContainer";
import CircleBtn from "./CircleBtn";
import "./TextualData.css";

interface TextualDataType {
  img: string;
  id: string;
  title: string;
  price: number;
  reviewCount: number;
  rating: number;
  productDescription: string;
  colors: string[];
}

function TextualDataCard({ data }: { data: TextualDataType }) {
  let { isMobile } = useWindowSize();
  let { productExists } = useCart();
  let [selectedColor, setSelectedColor] = useState(data.colors[0]);
  let cartID = useSelector<RootState, string>(
    (state) => state.auth.user!.cart.id
  );
  const [addTrigger, { isLoading: isAddLoading }] = useAddToCartMutation();
  const [removeTrigger, { isLoading: isRemoveLoading }] =
    useRemoveFromCartMutation();
  const [addWishlistTrigger, { isLoading: isAddWishlistLoading }] =
    useAddToWishlistMutation();
  const inWishlist = useSelector<RootState, boolean>((state) =>
    state.auth.user ? state.auth.user.wishlist.includes(data.id) : false
  );
  const [isWishlisted, setIsWishlisted] = useState(inWishlist);
  async function addToCartHandler(cartItem: CartItem) {
    try {
      const res = await addTrigger({ cartID, cartItem }).unwrap();
      toastify(res.message, "info");
    } catch (err: any) {
      console.error(err);
      toastify(err?.data?.message ?? "Unexpected Error Occurred", "error");
    }
  }

  async function addToWishlistHandler(prodID: string, isExists: boolean) {
    try {
      const res = await addWishlistTrigger({
        prodID,
        isExists,
      }).unwrap();
      toastify(res.message, "info");
    } catch (err: any) {
      console.error(err);
      toastify(err?.data?.message ?? "Unexpected Error Occurred", "error");
    }
  }

  async function removeFromCartHandler(prodID: string, prodColor: string) {
    try {
      const res = await removeTrigger({ cartID, prodID, prodColor }).unwrap();
      toastify(res.message, "info");
    } catch (err: any) {
      console.error(err);
      toastify(err?.data?.message ?? "Unexpected Error Occurred", "error");
    }
  }
  return (
    <div className="d-flex flex-column text-data-card p-3 gap-2 justify-content-start mb-auto align-items-start">
      <PreTitle className="p-2 fw-600">{data.title}</PreTitle>
      <div className="reviews-ratings-container p-2 d-flex justify-content-center align-items-center gap-3">
        <LogoContainer className="gap-1 ">
          {Array.from({ length: 5 }, (v, i) =>
            i + 1 <= data.rating ? (
              <RxStarFilled key={i} className="text-warning" />
            ) : (
              <RxStar key={i} className="text-warning" />
            )
          )}
        </LogoContainer>
        <SectionDescription>{data.reviewCount} Reviews</SectionDescription>
      </div>
      <div className="fs-4 p-2 fw-700 text-dark">${data.price}</div>
      <div className="fw-400 opacity-06 fs-7 p-2">
        {data.productDescription}
      </div>
      <div className="line w-90 "></div>
      <div className="d-flex align-items-center justify-content-between gap-2 p-2 ">
        {data.colors.map((val) => {
          return (
            <CircleBtn
              className={
                selectedColor === val
                  ? " border border-3 border-secondary  "
                  : " "
              }
              onClick={() => setSelectedColor(val)}
              key={val}
              width={"30px"}
              height={"30px"}
              bgColor={val}
            />
          );
        })}
      </div>
      <div className="action-btns-container mt-4 p-2  d-flex justify-content-center align-items-center gap-2">
        <CircleBtn
          className={
            "d-flex p-1 align-items-center justify-content-center option-btn"
          }
          width={" 30px "}
          height={" 30px "}
          onClick={() => {
            if (!isAddWishlistLoading) {
              setIsWishlisted(!isWishlisted);
              addToWishlistHandler(data.id, isWishlisted);
            }
          }}
        >
          {isAddWishlistLoading ? (
            <ReactLoading
              type={"spin"}
              color={"#007bff"}
              height={30}
              width={30}
            />
          ) : isWishlisted ? (
            <FaHeart className="fs-6 text-danger" />
          ) : (
            <HiOutlineHeart className="fs-6" />
          )}
        </CircleBtn>
        {isAddLoading || isRemoveLoading ? (
          <ReactLoading
            type={"spin"}
            color={"#007bff"}
            height={30}
            width={30}
          />
        ) : productExists(data.id, selectedColor) ? (
          <CircleBtn
            className={
              " d-flex p-1 justify-content-center align-items-center option-btn "
            }
            width={" 30px "}
            height={" 30px "}
          >
            {" "}
            <BsCartCheck
              className="fs-6"
              onClick={() => {
                removeFromCartHandler(data.id, selectedColor);
              }}
            />{" "}
          </CircleBtn>
        ) : (
          <CircleBtn
            className={
              " d-flex p-1 justify-content-center align-items-center option-btn "
            }
            width={" 30px "}
            height={" 30px "}
            onClick={() => {
              addToCartHandler({
                img: data.img,
                prodID: data.id,
                prodName: data.title,
                prodPrice: data.price,
                prodQuant: 1,
                prodColor: selectedColor,
              });
            }}
          >
            {" "}
            <BsCart className="fs-6" />{" "}
          </CircleBtn>
        )}

        <CircleBtn
          className={
            " d-flex p-1 justify-content-center align-items-center option-btn"
          }
          width={" 30px "}
          height={" 30px "}
        >
          <IoMdEye className="fs-6" />
        </CircleBtn>
      </div>
    </div>
  );
}

export default TextualDataCard;
