import { useCreateCommentMutation } from "@/shared/queries/comment/use-create-comment.mutation";
import { useGetUserCommentQuery } from "@/shared/queries/comment/use-get-user-comment.query"
import { useUpdateCommentMutation } from "@/shared/queries/comment/use-update-comment-mutation";
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store";
import { useEffect, useState } from "react"
import { Toast } from "toastify-react-native";

interface RatingFormInterface{
    content: string;
    rating: number;
    isEditing: boolean;
    commentId?: number;
}

const initialFormValue: RatingFormInterface = {
    content: '',
    isEditing: false,
    rating: 0,
    commentId: undefined
}

export const useReviewBottomSheetViewModel = (productId: number) => {
    const [ratingForm, setRatingForm] = useState(initialFormValue)

    const { data: userComment, isLoading: loadingUserComment } = useGetUserCommentQuery(productId)

    const createCommentMutation = useCreateCommentMutation(productId)

    const updateCommentMutation = useUpdateCommentMutation(productId)

    const { close: closeBottomSheet } = useBottomSheetStore()

    const handleRatingChange = (rating: number) => {
        setRatingForm((prev) => ({ ...prev, rating}))
    }

    const handleContentChange = (content: string) => {
        setRatingForm((prev) => ({ ...prev, content}))
    }

    const handleFormSubmit = async () => {
        if(!ratingForm.rating){
            Toast.warn("Please, select a rating", "top")

            return
        }

        if(!ratingForm.content.trim()){
            Toast.warn("Please, write a comment", "top")

            return
        }


        const { isEditing, ...formData } = ratingForm

        if(isEditing){
            updateCommentMutation.mutate({
                ...formData,
                commentId: formData.commentId!,
            })
        }
        else{
            createCommentMutation.mutate({
                content: formData.content,
                productId,
                rating: formData.rating
            })
        }

        closeBottomSheet()
    }

    useEffect(() => {
        if(userComment && userComment.comment){
            setRatingForm({
                content: userComment.comment.content,
                rating: userComment.rating,
                isEditing: true,
                commentId: userComment.comment.id
            })
        }
        else{
            setRatingForm(initialFormValue)
        }
    }, [userComment])

    const isLoading = createCommentMutation.isPending || updateCommentMutation.isPending

    return{
        handleRatingChange,
        handleContentChange,
        ratingForm,
        handleFormSubmit,
        isLoading
    }
}