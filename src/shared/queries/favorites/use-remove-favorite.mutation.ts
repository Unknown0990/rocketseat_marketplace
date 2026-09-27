import { addFavorites, getFavorites, removeFavorites } from "@/shared/services/favorites.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native";

export const useRemoveFavoriteMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: removeFavorites,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["favorites"] })
            
            Toast.success("Product removed from favorites", "bottom")
        },
        onError: (error) => {
            Toast.error(error?.message ?? "Failed to remove favorites", "bottom")
        },
    })

    return mutation;
}