import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import { TRANSFER_PRICE, URL_IMAGE } from "../../constants";
import AxiosClient from "../../networks/AxiosClient";
import { useNavigate } from "react-router-dom";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="hidden md:flex absolute z-10 right-4 bottom-4 w-10 h-10 cursor-pointer justify-center items-center rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
    >
      <CaretRightOutlined className="text-lg text-primaryText" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="hidden md:flex absolute z-10 right-16 bottom-4 w-10 h-10 cursor-pointer justify-center items-center rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
    >
      <CaretLeftOutlined className="text-lg text-primaryText" />
    </div>
  );
}

const Home = () => {
  const navigation = useNavigate();
  const [lstProducts, setLstProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const products = await AxiosClient.post("/products/lst-products");
        setLstProducts(products?.data || []);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const goToProductDetails = (products) => {
    navigation(`/product/${products?.code}`);
  };

  // Responsive settings for sliders
  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="bg-primaryBg">
      {/* Hero Slider */}
      <div className="mb-10">
        <Slider
          arrows={true}
          slidesToShow={1}
          autoplay={true}
          autoplaySpeed={3000}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          <div className="w-full aspect-[3/1.2] md:aspect-[3/1]">
            <img
              className="w-full h-full object-cover"
              src="https://file.hstatic.net/200000642007/file/1920x640_f3fc87c077684b3782a0a793403bbf65.jpg"
              alt="Banner 1"
            />
          </div>
          <div className="w-full aspect-[3/1.2] md:aspect-[3/1]">
            <img
              className="w-full h-full object-cover"
              src="https://file.hstatic.net/200000642007/file/desktop-1920x640_690adfdae05f4db8a2b7ca47d95f236d.jpg"
              alt="Banner 2"
            />
          </div>
          <div className="w-full aspect-[3/1.2] md:aspect-[3/1]">
            <img
              className="w-full h-full object-cover"
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1444,c_limit/097d1ab5-aed3-4a3e-a87a-2bc7941a3e37/nike-just-do-it.jpg"
              alt="Banner 3"
            />
          </div>
        </Slider>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-2xl md:text-3xl font-bold text-primaryText">HÀNG MỚI VỀ</h1>
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="product-card">
                <div className="w-full aspect-square mb-2 box-skeleton"></div>
                <div className="p-3">
                  <div className="mb-2 h-6 box-skeleton rounded-md"></div>
                  <div className="mb-1 h-4 w-1/2 box-skeleton rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Slider
            className="custom-slider"
            arrows={false}
            slidesToShow={5}
            autoplay={true}
            autoplaySpeed={3000}
            responsive={responsiveSettings}
          >
            {lstProducts?.map((product, index) => (
              <div
                key={index}
                className="cursor-pointer px-2"
                onClick={() => goToProductDetails(product)}
              >
                <div className="product-card">
                  <div className="w-full aspect-square mb-2">
                    <img
                      className="w-full h-full object-cover"
                      src={URL_IMAGE(product?.gallery?.[0]?.path)}
                      alt={product?.name}
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-primaryText mb-2 text-sm md:text-base min-h-[2.5rem] md:min-h-[3rem] line-clamp-2">
                      {product?.name}
                    </h3>
                    <h3 className="text-accentColor font-bold">
                      {TRANSFER_PRICE(product?.price)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Best Sellers Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <div className="w-full aspect-[3/2] md:aspect-[807/410]">
            <img
              className="w-full h-full object-cover"
              src="https://file.hstatic.net/200000642007/file/1614x820_76ccb179b274411685d3d1fbeab117ed.jpg"
              alt="Best Sellers"
            />
          </div>
          
          <div className="absolute inset-0 bg-black/30 md:bg-white/80 md:inset-auto md:w-[58%] md:right-0 md:top-0 md:bottom-0 flex flex-col justify-center p-4 md:p-8">
            <h1 className="mb-4 text-xl md:text-3xl font-bold text-white md:text-primaryText">HÀNG BÁN CHẠY</h1>
            
            {!isLoading && (
              <>
                <div className="hidden md:block">
                  <Slider
                    className="custom-slider"
                    arrows={false}
                    slidesToShow={3}
                    autoplay={true}
                    autoplaySpeed={3000}
                    responsive={[
                      {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 1,
                        },
                      },
                    ]}
                  >
                    {lstProducts?.map((product, idx) => (
                      <div
                        key={idx}
                        className="cursor-pointer px-2"
                        onClick={() => goToProductDetails(product)}
                      >
                        <div className="bg-white text-primaryText relative rounded-lg overflow-hidden shadow-cardShadow">
                          <div className="w-full aspect-square">
                            <img
                              className="w-full h-full object-cover"
                              src={URL_IMAGE(product?.gallery?.[0]?.path)}
                              alt={product?.name}
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="mb-2 text-base line-clamp-2 min-h-[3rem]">
                              {product?.name}
                            </h3>
                            <h3 className="font-bold text-accentColor">
                              {TRANSFER_PRICE(product?.price)}
                            </h3>
                          </div>
                          <div className="absolute w-8 top-0 left-0">
                            <img
                              className="w-full"
                              src="https://file.hstatic.net/200000642007/file/bg_rank_c21e90ddb3c74242970a777d424a1ae5.png"
                              alt="Rank"
                            />
                            <h1 className="text-center absolute top-[10%] right-1/2 text-white font-bold translate-x-1/2">
                              {idx + 1}
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                
                {/* Mobile - Best Sellers Grid */}
                <div className="grid grid-cols-2 gap-2 md:hidden">
                  {lstProducts?.slice(0, 4).map((product, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer"
                      onClick={() => goToProductDetails(product)}
                    >
                      <div className="bg-white text-primaryText relative rounded-lg overflow-hidden shadow-cardShadow">
                        <div className="w-full aspect-square">
                          <img
                            className="w-full h-full object-cover"
                            src={URL_IMAGE(product?.gallery?.[0]?.path)}
                            alt={product?.name}
                          />
                        </div>
                        <div className="p-2">
                          <h3 className="text-sm font-medium line-clamp-1">
                            {product?.name}
                          </h3>
                          <h3 className="text-sm font-bold text-accentColor">
                            {TRANSFER_PRICE(product?.price)}
                          </h3>
                        </div>
                        <div className="absolute w-6 top-0 left-0">
                          <img
                            className="w-full"
                            src="https://file.hstatic.net/200000642007/file/bg_rank_c21e90ddb3c74242970a777d424a1ae5.png"
                            alt="Rank"
                          />
                          <h1 className="text-center absolute top-[10%] right-1/2 text-white font-bold translate-x-1/2 text-xs">
                            {idx + 1}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
