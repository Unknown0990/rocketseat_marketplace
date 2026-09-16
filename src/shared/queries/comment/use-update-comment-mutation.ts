import { UpdateCommentRequest } from "@/shared/interfaces/http/update-comment"
import { updateUserComment } from "@/shared/services/product.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useUpdateCommentMutation = (productId: number) => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (comment: UpdateCommentRequest) => updateUserComment(comment),
        onSuccess: (response) => {
            queryClient.invalidateQueries({ queryKey: ["user-comment", productId] })
            queryClient.invalidateQueries({ queryKey: ["product-comments", productId] })

            Toast.success(response.message || "Review updated successfully"), "top"
        },
        onError: (error) => {
            Toast.error(error.message ?? "Failed to update review. Try again later")
        }
    })
    
    return mutation
}