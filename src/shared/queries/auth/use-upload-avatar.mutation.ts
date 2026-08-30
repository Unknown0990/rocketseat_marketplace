import { uploadAvatar } from "@/shared/services/auths.service"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"

export const useUploadAvatarMutation = () => {
    const mutation = useMutation({
        mutationFn: uploadAvatar,
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
            Toast.error("Error to upload profile picture")
        }
    })

    return mutation
}