import { create } from 'zustand';

interface AuthState {
  user: string | null;
  token: string | null;
  login: (user: string, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;
