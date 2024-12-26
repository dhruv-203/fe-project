import { ReactNode, useState } from "react";
import { useWindowSize } from "../../Context/context";
import "./AdditionalInformationSection.css";
import AdditionalInfoTitle from "./AdditionalInfoTitle";

// a component to be used internally
function AdditionalInformation({
  descriptionImage,
  overview,
}: {
  descriptionImage: string;
  overview: string[];
}) {
  const { isMobile } = useWindowSize();

  return (
    <div
      className={
        "display w-100  gap-3 align-items-start mt-3 " +
        (isMobile ? "justify-items-center " : "justify-items-between")
      }
    >
      <div className="add-info-image-container mx-auto">
        <img
          src={descriptionImage}
          height={"auto"}
          style={{ aspectRatio: isMobile ? "3/4" : "16/9" }}
          alt=""
        />
      </div>
      <div
        className={
          "additional-info-1 container   d-flex flex-column  justify-content-center gap-3 " +
          (isMobile ? "align-items-center" : "align-items-start")
        }
      >
        <AdditionalInfoTitle className={"px-3"}>
          Product Overview
        </AdditionalInfoTitle>
        {<span className="fs-7 text-secondary px-3">{overview.join(".")}</span>}
      </div>
    </div>
  );
}

function ReviewsContainer({ reviews }: { reviews: string[] }) {
  return (
    <div className="d-flex w-60 gap-3 justify-content-center align-items-center flex-wrap ">
      {reviews.map((val, ind) => {
        return (
          <div
            className="d-flex flex-column w-50 p-3 border rounded"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            key={ind}
          >
            {" "}
            <p className="text-secondary">{val}</p>
          </div>
        );
      })}
    </div>
  );
}

function DescriptionContainer({
  keyFeatures,
}: {
  keyFeatures: { [key: string]: string }[];
}) {
  return (
    <div className="w-100 container ">
      <div className="d-flex mx-auto flex-column w-70 justify-content-center align-items-center ">
        {keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="d-flex w-80 justify-content-between border border-1 border-secondary py-2 text-align-start"
          >
            <span className="fw-700 text-align-start p-3 w-40">
              {Object.keys(feature)[0]}
            </span>
            <span className="text-secondary p-3  w-50 text-align-end fw-600">
              {Object.values(feature)[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SectionToDisplayTypes {
  addInfo: ReactNode;
  descrip: ReactNode;
  reviews: ReactNode;
}

export default function AdditionalInformationSection({
  reviews,
  description,
  overview,
  descriptionImage,
  keyFeatures,
}: {
  reviews: string[];
  description: string;
  overview: string[];
  descriptionImage: string;
  keyFeatures: { [key: string]: string }[];
}) {
  // console.log(reviews)

  const items: SectionToDisplayTypes = {
    addInfo: (
      <AdditionalInformation
        overview={overview}
        descriptionImage={descriptionImage}
      />
    ),
    descrip: <DescriptionContainer keyFeatures={keyFeatures} />,
    reviews: <ReviewsContainer reviews={reviews} />,
  };

  const [SectionToDisplay, setSectionToDisplay] =
    useState<keyof SectionToDisplayTypes>("addInfo");
  let isMobile = useWindowSize().isMobile;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3 py-2 mb-2">
      <div
        className={
          " action-tab d-flex justify-content-center align-items-center my-5 px-3 " +
          (isMobile ? " gap-2 " : " gap-5 ")
        }
      >
        <div
          className={
            " tab description-tab fs-7 text-secondary " +
            (SectionToDisplay === "descrip" ? "fw-600" : " ")
          }
          onClick={() => setSectionToDisplay("descrip")}
        >
          Description
        </div>
        <div
          className={
            " tab add-info-tab fs-7 text-secondary " +
            (SectionToDisplay === "addInfo" ? "fw-600" : " ")
          }
          onClick={() => setSectionToDisplay("addInfo")}
        >
          Additional Information
        </div>
        <div
          className={
            " tab reviews-tab fs-7 text-secondary " +
            (SectionToDisplay === "reviews" ? "fw-600" : " ")
          }
          onClick={() => setSectionToDisplay("reviews")}
        >
          Reviews{" "}
          <span className=" text-success fw-700 ">({reviews.length})</span>
        </div>
      </div>
      {items[SectionToDisplay]}
    </div>
  );
}
