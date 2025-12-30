import { useEffect, useState } from "react";
import { useGetBannersQuery } from "queries/Banner/banner.query";
import { Banner } from "types/Banner/banner.type";
import { useGetMyMemberQuery } from "queries/Member/member.query";

const useBanner = () => {
  const bannersData = useGetBannersQuery().data?.data;

  const memberData = useGetMyMemberQuery().data?.data;

  const [approveBanners, setApproveBanners] = useState<Banner[]>([]);
  const [isBannerAuthority, setIsBanneerAuthority] = useState<boolean>(false);

  useEffect(() => {
    if (memberData) {
      if (memberData.role === "ADMIN") {
        setIsBanneerAuthority(true);
      } else {
        setIsBanneerAuthority(false);
      }
    }
  }, [memberData]);

  useEffect(() => {
    if (bannersData) {
      const validApprovedBanners = bannersData.filter(
        (banner) => banner.status !== "DEACTIVETED"
      );

      setApproveBanners(validApprovedBanners);
    }
  }, [bannersData]);

  return { approveBanners, isBannerAuthority };
};

export default useBanner;
