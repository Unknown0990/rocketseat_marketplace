import { AppButton } from "@/shared/components/AppButton"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export const Error = () => {
    return(
        <View className="flex-1 items-center justify-center px-6">
            <View className="w-10 h-10 bg-red-300 items-center justify-center rounded-full mb-3">
                <Ionicons name="alert" color={colors.danger} size={23} />
            </View>
            
            <View className="flex-row items-center justify-center">
                <Text className="text-xl text-danger font-bold">Failed to load orders</Text>
            </View>

            <AppButton
                className="mt-6"
            >Back to Catalog</AppButton>
        </View>
    )
}