import { dodamAxios } from "src/libs/Axios/customAxios";
import { BannersResponse } from "src/types/Banner/banner.type";

class BannerRepository {
  public async getBanners(): Promise<BannersResponse> {
    const { data } = await dodamAxios.get("/banner/active");
    return data;
  }
}

export default new BannerRepository();
