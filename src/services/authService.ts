import { UserData } from "@/types/auth";
import apiClient from "./apiClient";



// export const registerUser = async (userData: UserData) => {
//   const response = await apiClient.post('/auth/register', userData);
//   return response.data;
// };

// export const loginUser = async (userData: UserData) => {
//   const response = await apiClient.post('/auth/login', userData);
//   return response.data;
// };


interface AuthResponse {
    message?: string;
    token?: string;
  }
  
  export const registerUser = async (userData: UserData): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/api/auth/register', userData);
    return response.data;
  };
  
  export const loginUser = async (userData: UserData): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/api/auth/login', userData);
    return response.data;
  };