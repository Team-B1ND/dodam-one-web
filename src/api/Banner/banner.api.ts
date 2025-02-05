import { dodamAxios } from "src/libs/axios/customAxios";
import { BannersResponse } from "src/types/banner/banner.type";

class BannerApi {
  public async getBanners(): Promise<BannersResponse> {
    const { data } = await dodamAxios.get("/banner/active");
    return data;
  }
}

export default new BannerApi();
