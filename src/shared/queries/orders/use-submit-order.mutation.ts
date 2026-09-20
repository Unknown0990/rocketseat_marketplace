import { submitOrder } from "@/shared/services/orders.service"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useSubmitOrderMutation = () => {
    const mutation = useMutation({
        mutationFn: submitOrder,
        onSuccess: (response) => {
            console.log(response.message)
        },
        onError: (error) => {
            Toast.error(error.message ?? "Failed to make an order", "top")
        }
    })

    return mutation
}