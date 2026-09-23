import { useMutation } from "@tanstack/react-query"
import * as authService from '../../services/auths.service'
import { LoginHTTPParams } from "@/shared/interfaces/http/login"
import { useUserStore } from "@/shared/store/user-store"
import { Toast } from "toastify-react-native"

export const useLoginMutation = () => {
    const { setSession } = useUserStore()

    const mutation = useMutation({
        mutationFn
        : (userData: LoginHTTPParams) => authService.login(userData),
        onSuccess: (response) => {
            setSession(response)
        },
        onError: (error) => {
            Toast.error(error?.message ?? "Not possible to log in. Try again later")
            console.log(error)
        },
    })

    return mutation
}