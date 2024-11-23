export interface UserData {
    username: string;
    password: string;
}
  
export interface AuthResponse {
    message?: string; // For registration response
    token?: string;   // For login response
}




// Page 


export interface LoginPageProps {
    type_of_user: 'citizen' | 'admin' | 'service'
}