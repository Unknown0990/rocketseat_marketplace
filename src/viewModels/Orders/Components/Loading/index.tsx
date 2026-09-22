import { colors } from "@/styles/colors"
import { ActivityIndicator, Text, View } from "react-native"

export const Loading = () => {
    return(
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color={colors["purple-base"]}/>
            <Text className="text-gray-600 mt-4">Loading Orders...</Text>
        </View>
    )
}