import { AuthFormHeader } from "@/shared/components/AuthFormHeader"
import { KeyboardContainer } from "@/shared/components/KeyboardContainer"
import { router } from "expo-router"
import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useLoginViewModel } from "./useLogin.viewModel"
import { InputController } from "@/shared/components/InputController"
import { AppButton } from "@/shared/components/AppButton"

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
    control,
    onSubmit
}) => {
    return(
        <KeyboardContainer>
            <View className="flex-1 items-center justify-center px-[40px]">
                <View className="flex-1 w-full items-center justify-center">
                    <AuthFormHeader 
                        title="Access your account"
                        subtitle="Inform your email and password to log in"
                    />

                    <InputController
                        control={control}
                        name='email'
                        leftIcon="mail-outline"
                        label="EMAIL"
                        placeholder="test@example.com"
                    />

                    <InputController
                        control={control}
                        name='password'
                        leftIcon="lock-closed-outline"
                        label="PASSWORD"
                        placeholder="*********"
                        secureTextEntry
                    />

                    <AppButton
                        onPress={onSubmit}
                        className="mt-6"
                    >Login</AppButton>
                </View>
                
                <View className="flex-2 pb-16">
                    <Text
                        className="text-base mb-6 text-gray-300"
                    >Don't have an account?</Text>

                    <AppButton
                        rightIcon="arrow-forward"
                        variant="outline"
                        onPress={() => router.push("/register")}
                    >Register</AppButton>
                </View>
            </View>
        </KeyboardContainer>
    )
}