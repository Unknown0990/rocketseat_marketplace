import { useUserStore } from "@/shared/store/user-store"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface HeaderParams{
    handleLogout: () => void;
}

export const Header: FC<HeaderParams> = ({ handleLogout }) => {
    return(
        <View className="flex-row justify-between items-center py-3 border-shape">
            <TouchableOpacity className="flex-row items-center gap-1" onPress={router.back}>
                <Ionicons name="arrow-back" color={colors["purple-base"]} size={24}/>
                <Text className="text-base text-purple-base">Go back</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center gap-1" onPress={handleLogout}>
                <Ionicons name="log-out-outline" color={colors.danger} size={20}/>
                <Text className="text-danger text-base">Log out</Text>
            </TouchableOpacity>
        </View>
    )
}