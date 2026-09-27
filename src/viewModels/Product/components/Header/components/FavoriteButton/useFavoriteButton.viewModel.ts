import { useAddFavoritesMutation } from "@/shared/queries/favorites/use-add-favorite.mutation"
import { useGetFavoritesQuery } from "@/shared/queries/favorites/use-get-favorites.query"
import { useRemoveFavoriteMutation } from "@/shared/queries/favorites/use-remove-favorite.mutation"
import { useMemo } from "react"

export const useFavoriteButtonViewModel = (productId: number) => {
    const { data: favorites = [], isLoading: isFavoriteLoading } = useGetFavoritesQuery()

    const addFavoriteMutation = useAddFavoritesMutation()

    const removeFavoriteMutation = useRemoveFavoriteMutation()

    const isFavorite: boolean = useMemo(() => {
        return favorites.some(({ productId: id }) => id === productId)
    }, [favorites, productId])

    const handleToggleFavorite = async () => {
        if(isFavoriteLoading) return

        if(isFavorite){
            await removeFavoriteMutation.mutateAsync(productId)
        }
        else{
            await addFavoriteMutation.mutateAsync(productId)
        }
    }

    const loading = addFavoriteMutation.isPending || removeFavoriteMutation.isPending || isFavoriteLoading

    return{
        loading,
        isFavorite,
        handleToggleFavorite
    }
}