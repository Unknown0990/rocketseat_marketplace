import { RegisterHTTPParams, RegisterHTTPResponse } from "../interfaces/http/register";

import { marketplaceAPIClient } from '../api/marketplace'

export const register = async(userData: RegisterHTTPParams) => {
    const { data } = await marketplaceAPIClient.post<RegisterHTTPResponse>("/auth/register", userData)

    return data
}