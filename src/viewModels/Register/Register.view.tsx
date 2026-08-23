import { FC, useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { AppInput } from "@/shared/components/AppInput"
import { Controller } from "react-hook-form"
import { InputController } from "@/shared/components/InputController"
import { AuthFormHeader } from "@/shared/components/AuthFormHeader"
import { KeyboardContainer } from "@/shared/components/KeyboardContainer"
import { AppButton } from "@/shared/components/AppButton"
import { router } from "expo-router"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
    onSubmit,
    control
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