import { RegisterHTTPParams } from "../interfaces/http/register";

import { baseURL, marketplaceAPIClient } from '../api/marketplace'
import { AuthResponse } from "../interfaces/http/auth-response";
import { LoginHTTPParams } from "../interfaces/http/login";
import { UpdloadAvatarResponse } from "../interfaces/http/upload-avatar";

export const register = async(userData: RegisterHTTPParams) => {
    const { data } = await marketplaceAPIClient.post<AuthResponse>("/auth/register", userData)

    return data
}

export const login = async (userData: LoginHTTPParams) => {
    const { data } = await marketplaceAPIClient.post<AuthResponse>("/auth/login", userData)

    return data
}

export const updloadAvatar = async (avatarURI: string) => {
    const formData = new FormData();

    formData.append("avatar", {
        uri: avatarURI,
        type: "image/jpeg",
        name: "avatar.jpeg"
    } as unknown as Blob)

    const { data } = await marketplaceAPIClient.post<UpdloadAvatarResponse>("/user/avatar", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    data.url = `${baseURL}${data.url}`

    return data
}