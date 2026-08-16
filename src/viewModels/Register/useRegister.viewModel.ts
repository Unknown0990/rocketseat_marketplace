import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormData, registerScheme } from './register.scheme';
import { useRegisterMutation } from '@/shared/queries/auth/useRegister.mutation';
import { useUserStore } from '@/shared/store/user-store';

export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation()

    const { setSession, user } = useUserStore()

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: yupResolver(registerScheme),
        defaultValues: {
            name: "devX2",
            email: "devX2@gmail.com",
            password: "12345678",
            confirmPassword: "12345678",
            phone: "999376916"
        }
    })

    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData

        const mutationResponse = await userRegisterMutation.mutateAsync(registerData)

        setSession({
            user: mutationResponse.user,
            token: mutationResponse.token,
            refreshToken: mutationResponse.refreshToken,
        })
    })
    
    console.log(user)

    return {
        control,
        errors,
        onSubmit
    };
}