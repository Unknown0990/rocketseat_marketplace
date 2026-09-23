import { useAppModal } from "@/shared/hooks/useAppModal"
import { updateUserProfile } from "@/shared/services/profile.service"
import { useUserStore } from "@/shared/store/user-store"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useUpdateProfileMutation = () => {
    const { updateUser } = useUserStore()

    const { showSuccess } = useAppModal()

    const mutation = useMutation({
        mutationFn: updateUserProfile,
        onSuccess: (response) => {
            updateUser({
                ...response.user
            })

            showSuccess({
                title: "Success!",
                message: "Personal details updated successfully"
            })
        },
        onError: (error) => {
            Toast.error(error.message ?? "Failed to update user data", "top")
        },
    })

    return mutation
}