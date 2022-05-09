import axios, { AxiosInstance, AxiosResponse } from "axios";

class ServerManager {
  apiAxios: AxiosInstance;

  constructor() {
    this.apiAxios = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  refreshInstance() {
    /*this.axios.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.response?.status === 401) {
        window.clearAuthData();
      }
      return error;
    })*/
  }

  createSubscriber(
    name: string,
    institution: string,
    email: string
  ): Promise<AxiosResponse> {
    const url = "/subscriber";
    return this.apiAxios.post(url, {
      name,
      institution,
      email
    });
  }

  voteByItem(
    itemId: number,
    voteType = "default",
    token: string
  ): Promise<
    AxiosResponse<{ groupItemId: number; name: string; groupId: number }>
  > {
    const url = `/event/vote?recaptchaResponse=${token}`;
    return this.apiAxios.post(url, {
      groupItemId: itemId,
      type: voteType,
    });
  }
}

export default ServerManager;
