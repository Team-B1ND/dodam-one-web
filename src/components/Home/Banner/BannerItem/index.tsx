
import { BannerItemContainer } from "./style";

interface Props {
  title: string;
  imgSrc: string;
  redirectURL: string;
  width:number;
}


const BannerItem = ({ imgSrc, redirectURL, title, width}: Props) => {
  
  
  

  const redirect = () => {
    window.open(redirectURL);
  };

  return (
    <BannerItemContainer
      src={imgSrc}
      width={width}
      alt={`bannerItem/${title} banner`}
      onClick={redirect}
    />
  );
};

export default BannerItem;
