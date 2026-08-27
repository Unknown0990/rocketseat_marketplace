import { FC, useState } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { AppInput } from "@/shared/components/AppInput"
import { Controller } from "react-hook-form"
import { InputController } from "@/shared/components/InputController"
import { AuthFormHeader } from "@/shared/components/AuthFormHeader"
import { KeyboardContainer } from "@/shared/components/KeyboardContainer"
import { AppButton } from "@/shared/components/AppButton"
import { router } from "expo-router"
import { useAppModal } from "@/shared/hooks/useAppModal"
import { Ionicons } from "@expo/vector-icons"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
    onSubmit,
    control,
    handleSelectAvatar,
    avatarURI
}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <KeyboardContainer>
            <ScrollView className="flex-1 px-[40px]">
                <AuthFormHeader
                    title="Create your account"
                    subtitle="Inform your personal data to register"
                />

                <TouchableOpacity
                    className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8"
                    onPress={handleSelectAvatar}
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
                    label="PASSWORD"
                    secureTextEntry
                    placeholder="*********"
                />
                
                <InputController 
                    control={control}
                    name='confirmPassword'
                    leftIcon="lock-closed-outline"
                    label="CONFIRM PASSWORD"
                    secureTextEntry
                    placeholder="*********"
                />

                <AppButton
                    onPress={onSubmit}
                    className="mt-6"
                >Register</AppButton>
                
                <View className="mt-16">
                    <Text
                        className="text-base mb-2 text-gray-300"
                    >Already have an account?</Text>

                    <AppButton
                        rightIcon="arrow-forward"
                        variant="outline"
                        onPress={() => router.push("/login")}
                    >Login</AppButton>
                </View>
            </ScrollView>
        </KeyboardContainer>
    )
}