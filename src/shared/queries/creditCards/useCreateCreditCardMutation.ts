import { CreateCreditCardRequest } from "@/shared/interfaces/http/create-credit-card"
import { createCreditCard } from "@/shared/services/credit-card.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useCreateCreditCardMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (cardData: CreateCreditCardRequest) => createCreditCard(cardData),
        onSuccess: (response) => {
            Toast.success(response.message ?? "Card created successfully")

            queryClient.cancelQueries({
                queryKey: ["credit-cards"],
            })
        }
    })

    return mutation;
}