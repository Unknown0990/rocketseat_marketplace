import { AppButton } from "@/shared/components/AppButton"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Text, View } from "react-native"

export const ListEmptyComponent = () => {
    return(
        <View className="flex-1 items-center px-29 pt-16">
            <Ionicons name="clipboard-outline" size={80} color={colors.gray[200]}/>
            
            <Text className="text-xl font-bold text-gray-700 my-4 text-center">You still have no orders</Text>

            <Text className="text-base text-gray-400 mb-8 text-center">Explore our catalog to make a purchase</Text>

            <View className="w-[70%]">
                <AppButton
                    leftIcon="storefront-outline"
                    onPress={() => router.push("/(private)/(tabs)/home")}
                    variant="outline"
                >Explore Catalog</AppButton>
            </View>
        </View>
    )
}