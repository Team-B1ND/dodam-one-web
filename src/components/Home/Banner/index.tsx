import { useMemo } from "react";
import * as S from "./style";
import Slider from "react-slick";
import BannerItem from "./BannerItem";
import { useGetBannersQuery } from "src/queries/Banner/banner.query";
import BannerFallbackLoader from "src/components/Common/Skeleton/Banner";

interface BannerProps {
  bannerWidth : number;
}

const Banner = ({bannerWidth}:BannerProps) => {
  const { data: bannersData, isLoading } = useGetBannersQuery({
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 30,
  });

  // `bannersData`가 undefined일 경우 빈 배열을 반환
  const banners = bannersData?.data ?? [];

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

  const hasBanners = banners.length > 0;

  return (
    <S.BannerContainer nullBanner={hasBanners}>
      {isLoading ? (
        <BannerFallbackLoader />
      ) : hasBanners ? (
        <Slider {...bannerSetting}>
          {banners.map((banner) => (
            <BannerItem
              title={banner.title}
              imgSrc={banner.imageUrl}
              width={bannerWidth}
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
