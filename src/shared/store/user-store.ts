import { create } from 'zustand'
import { UserInterface } from '../interfaces/user'

interface SetSessionParams{
    user: UserInterface;
    token: string; 
    refreshToken: string;
}

interface UpdateTokensParams{
    token: string; 
    refreshToken: string;
}

export interface UserStore{
    user: UserInterface | null;
    token: string | null;
    refreshToken: string | null;

    setSession: (sessionData: SetSessionParams) => void;
    logout: () => void;
    updateTokens: (updateTokensData: UpdateTokensParams) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
    user: null,
    token: null,
    refreshToken: null,

    setSession: (sessionData) => {set({ ...sessionData })},
    logout: () => {},
    updateTokens: (updateTokensData) => {set({ ...updateTokensData })},
}))