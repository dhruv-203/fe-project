import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import postImg1 from "../../Assets/home-page/posts-images/post-1.jpg";
import postImg2 from "../../Assets/home-page/posts-images/post-2.jpg";
import postImg3 from "../../Assets/home-page/posts-images/post-3.jpg";
import BestSellerGrid from "../../Components/HomePage/BestSeller/BestSellerGrid";
import CategoryGrid from "../../Components/HomePage/EditorPick/CategoryGrid";
import PreTitle from "../../Components/HomePage/EditorPick/PreTitle";
import SectionDescription from "../../Components/HomePage/EditorPick/SectionDescription";
import SectionTitle from "../../Components/HomePage/EditorPick/SectionTitle";
import SectionTitleContainer from "../../Components/HomePage/EditorPick/SectionTitleContainer";
import Btn from "../../Components/HomePage/HeroSection/Btn";
import BtnContainer from "../../Components/HomePage/HeroSection/BtnContainer";
import Carousel from "../../Components/HomePage/HeroSection/Carousel";
import SectionContainer from "../../Components/HomePage/ImageContent/SectionContainer";
import Layout from "../../Components/HomePage/Layout";
import Post from "../../Components/HomePage/Posts/Post";
import PostGrid from "../../Components/HomePage/Posts/PostGrid";
import { useWindowSize } from "../../Context/context";
import { RootState } from "../../Store";
import { Product } from "../../Store/Types";
function HomePage() {
  const { isMobile } = useWindowSize();
  const bestSellerProducts = useSelector<RootState, Product[]>(
    (state) => state.products.bestsellerProducts
  );

  console.log(process.env.REACT_APP_API_URL);

  return bestSellerProducts.length > 0 ? (
    <div>
      {bestSellerProducts.length > 0 && (
        <Carousel
          className=" "
          data={[
            {
              preTitle: bestSellerProducts[1].shortDescription,
              title: bestSellerProducts[1].title,
              description: bestSellerProducts[1].longDescription,
              bottomChild: (
                <NavLink to={"/home/products/" + bestSellerProducts[1].id}>
                  <Btn className={"fs-6 text-light bg-success fw-700 rounded"}>
                    SHOP NOW
                  </Btn>
                </NavLink>
              ),
              heroImg: bestSellerProducts[1].displayImage,
            },
            {
              preTitle: bestSellerProducts[5].shortDescription,
              title: bestSellerProducts[5].title,
              description: bestSellerProducts[5].longDescription,
              bottomChild: (
                <NavLink to={"/home/products/" + bestSellerProducts[5].id}>
                  <Btn className={"fs-6 text-light bg-success fw-700 rounded"}>
                    SHOP NOW
                  </Btn>
                </NavLink>
              ),
              heroImg: bestSellerProducts[5].displayImage,
            },
          ]}
        />
      )}
      <Layout className="editorsPick">
        <SectionTitleContainer className={" p-4 "}>
          <SectionTitle
            fontColor={" text-dark "}
            className={" p-2 fw-700 "}
            fontSize={"fs-3"}
          >
            Editor's Pick
          </SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={"p-2"}>
            Problems trying to resolve the conflict between
          </SectionDescription>
        </SectionTitleContainer>
        <CategoryGrid />
      </Layout>
      <Layout className="bestSeller">
        <SectionTitleContainer className={" p-4 "}>
          <PreTitle
            fontColor="text-dark"
            fontSize="fs-5"
            className={"opacity-06 fw-600"}
          >
            Featured Products
          </PreTitle>
          <SectionTitle
            fontColor={" text-dark "}
            className={" p-2 fw-700 "}
            fontSize={"fs-3"}
          >
            BESTSELLER PRODUCTS
          </SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={"p-2"}>
            Problems trying to resolve the conflict between
          </SectionDescription>
        </SectionTitleContainer>
        <BestSellerGrid />
      </Layout>
      {bestSellerProducts.length > 0 && (
        <Carousel
          className=" mt-5 "
          data={[
            {
              preTitle: bestSellerProducts[6].shortDescription,
              title: bestSellerProducts[6].title,
              description: bestSellerProducts[6].longDescription,
              bottomChild: (
                <NavLink to={"/home/products/" + bestSellerProducts[6].id}>
                  <Btn className={"fs-6 text-light bg-success fw-700 rounded"}>
                    SHOP NOW
                  </Btn>
                </NavLink>
              ),
              heroImg: bestSellerProducts[6].displayImage,
            },
            {
              preTitle: bestSellerProducts[7].shortDescription,
              title: bestSellerProducts[7].title,
              description: bestSellerProducts[7].longDescription,
              bottomChild: (
                <NavLink to={"/home/products/" + bestSellerProducts[7].id}>
                  <Btn className={"fs-6 text-light bg-success fw-700 rounded"}>
                    SHOP NOW
                  </Btn>
                </NavLink>
              ),
              heroImg: bestSellerProducts[7].displayImage,
            },
          ]}
        />
      )}
      <div className="container image-content-section h-100">
        <SectionContainer
          className="asian-lady-container"
          img={bestSellerProducts[5].displayImage}
          preTitle={bestSellerProducts[5].shortDescription}
          preTitleFontSize=" fs-7 "
          preTitleOpacity=" opacity-05 "
          title={bestSellerProducts[5].title}
          titleFontSize=" fs-1 "
          description={bestSellerProducts[5].longDescription}
          descriptionOpacity=" opacity-06"
          bottomChild={
            <BtnContainer className={" gap-3 "}>
              <NavLink to={"/home/products/" + bestSellerProducts[5].id}>
                <Btn
                  className={
                    (isMobile ? "fs-7" : "fs-6") +
                    " text-light bg-success rounded fw-700"
                  }
                >
                  Shop Now
                </Btn>
              </NavLink>
              <NavLink to={"/home/products/" + bestSellerProducts[5].id}>
                <Btn
                  className={
                    (isMobile ? "fs-7" : "fs-6") +
                    " rounded fw-700 text-success border border-success"
                  }
                >
                  Read More
                </Btn>
              </NavLink>
            </BtnContainer>
          }
        />
      </div>
      <Layout className="posts">
        <SectionTitleContainer className={" p-4 "}>
          <PreTitle
            fontColor="text-primary"
            fontSize="fs-7"
            className={" fw-600 "}
          >
            Practice Advice
          </PreTitle>
          <SectionTitle
            fontColor={" text-dark "}
            className={" p-2 fw-700 "}
            fontSize={"fs-3"}
          >
            Featured Posts
          </SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={" p-2"}>
            Problems trying to resolve the conflict between
            <br /> the two major realms of Classical physics: Newtonian
            mechanics{" "}
          </SectionDescription>
        </SectionTitleContainer>
        <PostGrid>
          <Post img={postImg1} />
          <Post img={postImg2} />
          <Post img={postImg3} />
        </PostGrid>
      </Layout>
    </div>
  ) : (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ height: "70vh" }}
    >
      <ReactLoading type="spin" color="#007bff" height={100} width={100} />
    </div>
  );
}

export default HomePage;
