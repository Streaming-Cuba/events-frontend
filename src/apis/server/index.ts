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

  createSubscriber(): Promise<AxiosResponse>{
    const url = `/event/vote`;
    return this.apiAxios.post(url, {
      
    });
  }

  voteByItem(
    itemId: number,
    voteType = "default"
  ): Promise<AxiosResponse<{ groupItemId: number; name: string; groupId: number }>> {
    const url = `/event/vote`;
    return this.apiAxios.post(url, {
      groupItemId: itemId,
      type: voteType
    });
  }
}

export default ServerManager;
