import { HTMLAttributes } from "react";
import { useWindowSize } from "../../../Context/context";
import "./CarouselItem.css";

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  img: string;
  categoryTitle: string;
  numberOfItems: number;
}

function CarouselItem({
  img,
  categoryTitle,
  numberOfItems,
  ...rest
}: CarouselItemProps) {
  let { isMobile } = useWindowSize();

  return (
    <div
      className="product-carousel-item d-flex p-2 align-items-center justify-content-center"
      {...rest}
    >
      <img src={img} alt="" className="item-image" />
      {!isMobile && (
        <div className="item-content d-flex flex-column gap-2 text-align-center align-items-center justify-content-center">
          <div className="fs-6 fw-600 text-light p-2">{categoryTitle}</div>
          <div className="fs-7 text-light fw-500 p-1">{`${numberOfItems} Items`}</div>
        </div>
      )}
    </div>
  );
}

export default CarouselItem;
