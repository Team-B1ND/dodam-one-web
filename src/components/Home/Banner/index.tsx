import { useMemo } from "react";
import useBanner from "src/hooks/Banner/useBanner";
import * as S from "./style";
import Slider from "react-slick";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { approveBanners } = useBanner();

  const bannerSetting = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      adaptiveHeight: true,
      appendDots: (dots: any) => (
        <div
          style={{
            position: "relative",
            top: "-2rem",
          }}
        >
          {dots}
        </div>
      ),
    }),
    []
  );
  const  nullBanner = approveBanners.length > 0
  return (
    <S.BannerContainer nullBanner={nullBanner}>
      {nullBanner ? (
        <Slider {...bannerSetting}>
          {approveBanners.map((banner) => (
            <BannerItem
              title={banner.title}
              imgSrc={banner.imageUrl}
              redirectURL={banner.redirectUrl}
              key={banner.id}
            />
          ))}
        </Slider>
      ) : (
        <span>배너가 없습니다.</span>
      )}
    </S.BannerContainer>
  );
};

export default Banner;
