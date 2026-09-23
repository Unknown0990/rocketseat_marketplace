import { uploadAvatar } from "@/shared/services/auths.service"
import { useUserStore } from "@/shared/store/user-store"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useUploadAvatarMutation = () => {
    const { updateUser } = useUserStore()

    const mutation = useMutation({
        mutationFn: uploadAvatar,
        onSuccess: (response) => {
            updateUser({ avatarUrl: response.url })
        },
        onError: (error) => {
            console.log(error)
            Toast.error("Error to upload profile picture")
        }
    })

    return mutation
}