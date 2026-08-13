import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormData, registerScheme } from './register.scheme';
import { useRegisterMutation } from '@/shared/queries/auth/useRegister.mutation';
import { useEffect } from 'react';

export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation()

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: yupResolver(registerScheme),
        defaultValues: {
            name: "tests",
            email: "test@gmail.com",
            password: "12345678",
            confirmPassword: "12345678",
            phone: "999376916"
        }
    })

    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData

        await userRegisterMutation.mutateAsync(registerData)
    })

    return {
        control,
        errors,
        onSubmit
    };
}