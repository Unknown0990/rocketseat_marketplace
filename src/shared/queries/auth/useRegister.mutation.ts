import { useMutation } from "@tanstack/react-query"
import * as authService from '../../services/auths.service'
import { RegisterHTTPParams } from "@/shared/interfaces/http/register"
import { useUserStore } from "@/shared/store/user-store";

interface UserRegisterMutationParams{
    onSuccess?: () => void;
}

export const useRegisterMutation = ({ onSuccess }: UserRegisterMutationParams = {}) => {
    const { setSession } = useUserStore()

    const mutation = useMutation({
        mutationFn
        : (userData: RegisterHTTPParams) => authService.register(userData),
        onSuccess: (response) => {
            console.log(response)

            setSession({
                user: response.user,
                token: response.token,
                refreshToken: response.refreshToken,
            })

            onSuccess?.()
        },
        onError: (error) => console.log(error),
    })

    return mutation
}