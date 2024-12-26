import { ReactNode } from "react";
import { useWindowSize } from "../../../Context/context";
import ContentContainer from "../HeroSection/ContentContainer";
import "./SectionContainer.css";

interface SectionContainerProps {
  className?: string;
  img: string;
  preTitle: string;
  preTitleFontSize: string;
  preTitleOpacity: string;
  title: string;
  titleFontSize: string;
  description: string;
  descriptionOpacity: string;
  bottomChild: ReactNode;
}
function SectionContainer({
  className = " ",
  img,
  preTitle,
  preTitleFontSize,
  preTitleOpacity,
  title,
  titleFontSize,
  description,
  descriptionOpacity,
  bottomChild,
}: SectionContainerProps) {
  let { isMobile } = useWindowSize();

  return (
    <div
      className={
        "d-flex mt-4 w-100 h-100 justify-content-center align-items-center gap-3  " +
        className +
        (isMobile ? " flex-column-reverse " : " ")
      }
    >
      <div className="img-container rounded">
        <img src={img} alt="" className="rounded" />
      </div>

      <div className="contentContainer ">
        <ContentContainer
          className=" gap-5 "
          preTitle={preTitle}
          preTitleFontSize={preTitleFontSize}
          preTitleOpacity={preTitleOpacity}
          title={title}
          titleFontSize={titleFontSize}
          description={description}
          descriptionOpacity={descriptionOpacity}
          bottomChild={bottomChild}
        />
      </div>
    </div>
  );
}

export default SectionContainer;
