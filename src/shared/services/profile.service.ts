import { marketplaceAPIClient } from "../api/marketplace";
import { UpdateProfileParams, UpdateProfileResponse } from "../interfaces/http/update-profile";

export const updateUserProfile = async (userData: UpdateProfileParams) => {
    const { data } = await marketplaceAPIClient.put<UpdateProfileResponse>("/user", userData)

    return data
}