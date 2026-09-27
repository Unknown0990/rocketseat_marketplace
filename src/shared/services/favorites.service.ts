import { marketplaceAPIClient } from "../api/marketplace"
import { AddFavoriteResponse, FavoriteInterface } from "../interfaces/http/favorite"

export const getFavorites = async (): Promise<FavoriteInterface[]> => {
    const { data } = await marketplaceAPIClient.get<FavoriteInterface[]>("/favorites")

    return data
}

export const addFavorites = async (productId: number) => {
    const { data } = await marketplaceAPIClient.post<AddFavoriteResponse>("/favorites", { productId })

    return data
}

export const removeFavorites = async (productId: number) => {
    await marketplaceAPIClient.delete(`/favorites/${productId}`)
}