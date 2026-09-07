import { AppButton } from "@/shared/components/AppButton"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Text } from "react-native"
import { View } from "react-native"

export const Error = () => {
    return(
        <View className="flex-1 bg-background items-center justify-center px-6">
            <Ionicons name='alert-circle' color={colors.danger} size={40}/>
            <Text className="text-xl font-medium text-center text-danger mt-5">Failed to fetch product details</Text>

            <AppButton
                className="mt-4"
                onPress={router.back}
            >Go Back</AppButton>
        </View>
    )
}