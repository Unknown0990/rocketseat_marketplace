import { RegisterHTTPParams } from "../interfaces/http/register";

import { marketplaceAPIClient } from '../api/marketplace'
import { AuthResponse } from "../interfaces/http/auth-response";
import { LoginHTTPParams } from "../interfaces/http/login";

export const register = async(userData: RegisterHTTPParams) => {
    const { data } = await marketplaceAPIClient.post<AuthResponse>("/auth/register", userData)

    return data
}

export const login = async (userData: LoginHTTPParams) => {
    const { data } = await marketplaceAPIClient.post<AuthResponse>("/auth/login", userData)

    return data
}