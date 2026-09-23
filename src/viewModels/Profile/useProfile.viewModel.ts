import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { ProfileFormData, profileScheme } from "./profile.scheme"
import { useState } from "react"
import { useUserStore } from "@/shared/store/user-store"
import { useUpdateProfileMutation } from "@/shared/queries/profile/use-update-profile.mutation"
import { useAppModal } from "@/shared/hooks/useAppModal"
import { useModalStore } from "@/shared/store/modal-store"
import { useCartStore } from "@/shared/store/cart-store"
import { useImage } from "@/shared/hooks/useImage"
import { CameraType } from "expo-image-picker"
import { useUploadAvatarMutation } from "@/shared/queries/auth/use-upload-avatar.mutation"

export const useProfileViewModel = () => {
    const { user, logout } = useUserStore()

    const { showSelection } = useAppModal()

    const { close } = useModalStore()

    const { clearCart } = useCartStore()

    const { handleSelectImage, loading } = useImage({
        callback: async (uri) => {
            if(!uri) return

            await uploadAvatarMutation.mutateAsync(uri)
        },
        cameraType: CameraType.front
    })

    const uploadAvatarMutation = useUploadAvatarMutation()

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProfileFormData>({
        resolver: yupResolver(profileScheme),
        defaultValues: {
            phone: user?.phone ?? "",
            email: user?.email ?? "",
            name: user?.name ?? "",
            newPassword: undefined,
            password: undefined,
        }
    })
    
    const updateProfileMutation = useUpdateProfileMutation()

    const validatePassword = (userData: ProfileFormData) => {
        if(!userData.password) return true

        if(userData.password === userData.newPassword && userData.password?.length > 0) return false

        return true
    }

    const onSubmit = handleSubmit(async (userData) => {
        if(!validatePassword(userData)) return
        
        await updateProfileMutation.mutateAsync(userData)
    })

    const handleLogout = () => showSelection({
        title: "Log out",
        message: "Are you sure you want to log out?",
        options: [
            { variant: 'primary', onPress: close, text: "Keep logged in" },
            { variant: 'danger', onPress: () => {
                clearCart()
                logout()
                close()
            }, text: "Log out" },
        ]
    })

    return{
        onSubmit,
        control,
        avatarURI: user?.avatarUrl,
        isSubmitting,
        handleLogout,
        handleSelectImage
    }
}