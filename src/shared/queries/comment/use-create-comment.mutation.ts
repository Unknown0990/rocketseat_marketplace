import { CreateCommentRequest } from "@/shared/interfaces/http/create-comment"
import { createComment } from "@/shared/services/product.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useCreateCommentMutation = (productId: number) => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (comment: CreateCommentRequest) => createComment(comment),
        onSuccess: (response) => {
            queryClient.invalidateQueries({ queryKey: ["user-comment", productId] })
            queryClient.invalidateQueries({ queryKey: ["product-comments", productId] })

            Toast.success(response.message || "Review sent successfully"), "top"
        },
        onError: (error) => {
            Toast.error(error.message ?? "Failed to send review. Try again later")
        }
    })

    return mutation
}