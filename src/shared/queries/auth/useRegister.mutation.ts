import { useMutation } from "@tanstack/react-query"
import * as authService from '../../services/auths.service'
import { RegisterHTTPParams } from "@/shared/interfaces/http/register"

export const useRegisterMutation = () => {
    const mutation = useMutation({
        mutationFn
        : (userData: RegisterHTTPParams) => authService.register(userData),
        onSuccess: (response) => console.log(),
        onError: (error) => console.log(error),
    })

    return mutation
}