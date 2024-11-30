import apiClient from "./apiClient";
import { PostRequestInterface, WrapperResponse } from "@/types/blog";



  
  export const createReport = async (userData: PostRequestInterface & {from:string}): Promise<WrapperResponse> => {
    const response = await apiClient.post<WrapperResponse>('admin/report.php', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };
  
  export const getReports = async (): Promise<WrapperResponse> => {
    const response = await apiClient.get<WrapperResponse>('admin/report.php', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };