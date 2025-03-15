import { useState, useEffect, useRef } from "react";

export const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};


export const useBannerWidth = () => {
  const bannerBoxRef = useRef<HTMLDivElement>(null);
  const [bannerWidth, setBannerWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (bannerBoxRef.current) {
        setBannerWidth(bannerBoxRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return { bannerBoxRef, bannerWidth };
};
