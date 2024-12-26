import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";
import AdditionalInformationSection from "../../Components/ProductDetailsPage/AdditionalInformationSection";
import BestsellerProductsSection from "../../Components/ProductDetailsPage/BestsellerProductsSection";
import DetailsSection from "../../Components/ProductDetailsPage/DetailsSection";
import BrandLogosContainer from "../../Components/ProductPage/BrandLogosContainer";
import BreadCrumb from "../../Components/ProductPage/TopSection/BreadCrumb";
import { useGetProductDetailsQuery } from "../../Store/Slices/productsApi";
function ProductDetails() {
  const { productId } = useParams();

  let {
    data: response,
    isFetching,
    isError,
    error,
  } = useGetProductDetailsQuery(productId as string);

  // Optional: Add loading state handling
  if (isFetching) {
    return (
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <ReactLoading type="spin" color="#007bff" height={100} width={100} />
      </div>
    );
  }
  if (isError && error) {
    const apiError = (error as FetchBaseQueryError).data as Object;
    const errorMessage = Object.values(apiError).join(" ");
    return (
      <div className="container d-flex align-items-center justify-content-center">
        {<h1>{errorMessage}</h1>}
      </div>
    );
  }

  let data = response!.data.product;

  return (
    <div className="container">
      <BreadCrumb title={""} />

      <DetailsSection data={data} />

      <AdditionalInformationSection
        reviews={data.reviews}
        description={data.longDescription}
        descriptionImage={data.descriptionImage}
        overview={data.overview}
        keyFeatures={data.keyFeatures}
      />
      <BestsellerProductsSection
        category={data ? data.category : ""}
        id={data ? data.id : ""}
      />
      <BrandLogosContainer />
    </div>
  );
}

export default ProductDetails;
