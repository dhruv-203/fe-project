import { ReactNode, useEffect } from "react";
import { useWindowSize } from "../../../Context/context";
import ContentContainer from "./ContentContainer";
let initial = true;

interface CarouselItemProps {
  className?: string;
  content: {
    preTitle: string;
    title: string;
    description: string;
    bottomChild: ReactNode;
    heroImg?: string;
    imgHeight?: string;
    imgWidth?: string;
  };
}

function CarouselItem({ className = " ", content }: CarouselItemProps) {
  let { isMobile } = useWindowSize();

  useEffect(() => {
    initial = false;
  }, []);
  let {
    preTitle,
    title,
    description,
    bottomChild,
    heroImg,
    
  } = content;
  return (
    <div
      className={
        "carousel-item " + className + (initial ? " " : " carousel-animation")
      }
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div
        className={
          "container  d-flex " +
          (isMobile
            ? " text-align-center flex-column align-items-center justify-content-end"
            : " align-items-end ")
        }
      >
        <ContentContainer
          preTitle={preTitle}
          title={title}
          description={description}
          bottomChild={bottomChild}
          className=" text-light content-container "
        />
      </div>
    </div>
  );
}

export default CarouselItem;
