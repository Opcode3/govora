import { UserData } from "@/types/auth";
import apiClient from "./apiClient";


interface LoginResponse{
  name: string, token: string, email: string
}

interface AuthResponse {
    message: string;
    data: LoginResponse;
    status_code: number
  }
  
  export const registerAdmin = async (userData: UserData & {type: string}): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('admin/auth.php', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };
  
  export const loginAdmin = async (userData: UserData & {type: string}): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('admin/auth.php', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };