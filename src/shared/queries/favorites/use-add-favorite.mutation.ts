import { addFavorites, getFavorites } from "@/shared/services/favorites.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native";

export const useAddFavoritesMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: addFavorites,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["favorites"] })
            
            Toast.success("Product added to favorites", "bottom")
        },
        onError: (error) => {
            Toast.error(error?.message ?? "Failed to add favorites", "bottom")
        },
    })

    return mutation;
}