import { AppButton } from "@/shared/components/AppButton"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Text, View } from "react-native"

export const ListHeaderComponent  = () => {
    return(
        <View className="py-3 gap-1 mb-4">
            <Text className="text-[20px] font-bold text-gray-900">Orders</Text>
            <Text className="text-gray-900">Check your orders list</Text>
        </View>
    )
}