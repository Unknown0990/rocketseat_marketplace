import { useForm } from "react-hook-form"
import { LoginFormData, loginScheme } from "./login.scheme"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLoginMutation } from "@/shared/queries/auth/useLogin.mutation"
import { useUserStore } from "@/shared/store/user-store"
import { useOneSignal } from "@/shared/hooks/useOneSignal"

export const useLoginViewModel = () => {
    const { user } = useUserStore()

    const { playerId } = useOneSignal()

    const loginMutation = useLoginMutation()
    
    const { control, handleSubmit } = useForm<LoginFormData>({
        resolver: yupResolver(loginScheme),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = handleSubmit(async (userFormData) => {
        await loginMutation.mutateAsync({
            ...userFormData,
            notificationToken: playerId,
        })
    })

    return {
        control,
        handleSubmit,
        onSubmit
    }
}