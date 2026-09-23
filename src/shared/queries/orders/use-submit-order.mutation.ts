import { submitOrder } from "@/shared/services/orders.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useSubmitOrderMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: submitOrder,
        onSuccess: (response) => {
            queryClient.invalidateQueries({
                queryKey: ['user-orders']
            })
        },
        onError: (error) => {
            Toast.error(error.message ?? "Failed to make an order", "top")
        }
    })

    return mutation
}