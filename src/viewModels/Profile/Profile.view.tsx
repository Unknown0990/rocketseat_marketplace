import { FC } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useProfileViewModel } from "./useProfile.viewModel"
import { KeyboardContainer } from "@/shared/components/KeyboardContainer"
import { ScrollView } from "react-native-gesture-handler"
import { AuthFormHeader } from "@/shared/components/AuthFormHeader"
import { Ionicons } from "@expo/vector-icons"
import { InputController } from "@/shared/components/InputController"
import { AppButton } from "@/shared/components/AppButton"
import { router } from "expo-router"
import { Header } from "./Components/Header"

export const ProfileView: FC<ReturnType<typeof useProfileViewModel>> = ({
    avatarURI,
    control,
    onSubmit,
    isSubmitting,
    handleLogout,
    handleSelectImage
}) => {
    return(
        <KeyboardContainer>
            <ScrollView className="flex-1 px-[40px]">
                <Header handleLogout={handleLogout} /> 

                <TouchableOpacity
                    className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8 mt-6"
                    onPress={handleSelectImage}
                >
                    {avatarURI ?
                        <Image
                            className="w-full h-full rounded-[12px]"
                            source={{ uri: avatarURI }}
                        />
                        :
                        <Ionicons 
                            name="cloud-upload-outline" 
                            size={32}
                        />
                    }

                </TouchableOpacity>

                <Text className="text-base mt-6 font-bold text-gray-500">Personal Details</Text>

                <InputController
                    control={control}
                    name='name'
                    leftIcon="person-outline"
                    label="NAME"
                    placeholder="Your full name"
                />

                <InputController 
                    control={control}
                    name='phone'
                    leftIcon="call-outline"
                    label="PHONE NUMBER"
                    placeholder="(12) 3456-7899"
                />

                <Text className="text-base mt-6 font-bold text-gray-500">Access</Text>
                
                <InputController 
                    control={control}
                    name='email'
                    leftIcon="mail-outline"
                    label="E-MAIL"
                    placeholder="test@example.com"
                />

                <InputController 
                    control={control}
                    name='password'
                    leftIcon="lock-closed-outline"
                    label="CURRENT PASSWORD"
                    secureTextEntry
                    placeholder="*********"
                />
                
                <InputController 
                    control={control}
                    name='newPassword'
                    leftIcon="lock-closed-outline"
                    label="NEW PASSWORD"
                    secureTextEntry
                    placeholder="*********"
                />

                <AppButton
                    onPress={onSubmit}
                    className="mt-6"
                    isLoading={isSubmitting}
                >Update</AppButton>
            </ScrollView>
        </KeyboardContainer>
    )
}