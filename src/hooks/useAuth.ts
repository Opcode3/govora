// import { useMutation, UseMutationOptions } from '@tanstack/react-query';
// import { registerUser, loginUser } from '../services/authService';
// import { AuthResponse, UserData } from '@/types/auth';





// // UseMutation hook for registration
// export const useRegister = (options?: UseMutationOptions<AuthResponse, Error, UserData>) => {
//     return useMutation<AuthResponse, Error, UserData>(
//       (userData: UserData) =>  registerUser(userData), // Mutation function
//       options                                        // Optional config (callbacks, etc.)
//     );
//   };
  
//   // UseMutation hook for login
//   export const useLogin = (options?: UseMutationOptions<AuthResponse, Error, UserData>) => {
//     return useMutation<AuthResponse, Error, UserData>(
//       (userData: UserData) => loginUser(userData),
//       options
//     );
//   };


// import { useMutation } from '@tanstack/react-query';
// import {  loginAdmin } from '../services/authService';

// // Define types for user data and authentication response
// interface UserData {
//   username: string;
//   password: string;
// }

// interface AuthResponse {
//   message?: string; // For registration success response
//   token: string;   // For login success response
// }

// Registration Mutation Hook
// export const useRegister = () => {
//   return useMutation<AuthResponse, Error, UserData>((userData: UserData) => registerUser(userData));
// };

// Login Mutation Hook

// export const useLogin = () => {
//     return useMutation<AuthResponse, Error, UserData>(
//       (userData: UserData) => loginUser(userData)
//     );
//   };


// export const useLogin = () => {
//     return useMutation({
//         mutationFn: async ({_payload}: {_payload: UserData}) => loginAdmin(_payload)
//     });
//   };

// export const useRegister = () => {
//     return useMutation({ mutationFn: async ({userData} :{userData: UserData}) => loginUser(userData)});
// };


// export const useRegister = () => {
//     return useMutation<AuthResponse, Error, UserData>({ mutationFn: async (userData: UserData) => loginUser(userData)}, {
//       onSuccess: (data: AuthResponse) => {
//         console.log('Registration successful:', data.message);
//       },
//       onError: (error: Error) => {
//         console.error('Registration failed:', error.message);
//       },
//     });
//   };
  
