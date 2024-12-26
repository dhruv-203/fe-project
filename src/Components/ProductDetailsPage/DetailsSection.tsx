import { useSelector } from "react-redux";
import { useWindowSize } from "../../Context/context";
import { RootState } from "../../Store";
import { Product, User } from "../../Store/Types";
import Carousel from "../ProductPage/TopSection/Carousel";
import "./DetailsSection.css";
import TextualDataCard from "./TextualDataCard";

interface DetailsSectionProps {
  className?: string;
  data: Product;
}

interface BottomIndicatorsProps {
  handleIndicatorClick: (ind: number) => void;
  head: number;
}

function DetailsSection({ className = " ", data }: DetailsSectionProps) {
  let { isMobile } = useWindowSize();
  const user = useSelector<RootState, User | null>((state) => state.auth.user);
  const imagesArray = data.additionalImages.map((val) => {
    return (
      <img
        src={val}
        width={"100%"}
        height={"auto"}
        style={{ aspectRatio: "1/1" }}
        alt=""
      />
    );
  });

  function BottomIndicators({
    handleIndicatorClick,
    head,
  }: BottomIndicatorsProps) {
    return (
      <div className="carousel-indicators d-flex justify-content-center align-items-center gap-3 p-2">
        {imagesArray.map((val, ind) => {
          return (
            <div
              className={
                " indicator " + (head === ind ? "indicator-active" : " ")
              }
              key={ind}
              onClick={() => handleIndicatorClick(ind)}
            >
              {val}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={
        " d-flex align-items-center justify-content-between details-section"
      }
    >
      <Carousel
        className={
          " carousel-margin-bottom " + (isMobile ? " w-70 " : " w-40 ")
        }
        numberOfItemsToShowInDesktop={1}
        DataItems={imagesArray}
        numberOfItemsToShowInMobile={1}
        BottomIndicators={BottomIndicators}
      />
      <TextualDataCard
        data={{
          img: data.displayImage,
          id: data.id,
          title: data.title,
          rating: data.ratings,
          reviewCount: data.reviews.length,
          productDescription: data.longDescription,
          colors: data.colors,
          price: data.discountedPrice,
        }}
        key={data.id}
      />
    </div>
  );
}

export default DetailsSection;
