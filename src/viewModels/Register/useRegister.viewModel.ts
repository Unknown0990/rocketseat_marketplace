import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormData, registerScheme } from './register.scheme';
import { useRegisterMutation } from '@/shared/queries/auth/useRegister.mutation';
import { useUserStore } from '@/shared/store/user-store';
import { useAppModal } from '@/shared/hooks/useAppModal';
import { useCamera } from '@/shared/hooks/useCamera';
import { useGallery } from '@/shared/hooks/useGallery';
import { useImage } from '@/shared/hooks/useImage';
import { Alert } from 'react-native';
import { useState } from 'react';
import { CameraType } from 'expo-image-picker';
import { useUploadAvatarMutation } from '@/shared/queries/auth/use-upload-avatar.mutation';

export const useRegisterViewModel = () => {
    const [avatarURI, setAvatarURI] = useState<string | null>(null)

    const { updateUser } = useUserStore()

    const { handleSelectImage } = useImage({
        callback: setAvatarURI,
        cameraType: CameraType.front,
    })

    const handleSelectAvatar = async () => {
        await handleSelectImage()
    }

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: yupResolver(registerScheme),
        defaultValues: {
            name: "devX2",
            email: "devX2@gmail.com",
            password: "12345678",
            confirmPassword: "12345678",
            phone: "999376916",
        }
    })

    const uploadAvatarMutation = useUploadAvatarMutation()

    const userRegisterMutation = useRegisterMutation({
        onSuccess: async () => {
            if(avatarURI){
                const { url } = await uploadAvatarMutation.mutateAsync(avatarURI)

                console.log({ url })

                updateUser({ avatarUrl: url })
            }
        }
    })

    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData

        await userRegisterMutation.mutateAsync(registerData)
    })
    
    return {
        control,
        errors,
        onSubmit,
        handleSelectAvatar,
        avatarURI
    };
}