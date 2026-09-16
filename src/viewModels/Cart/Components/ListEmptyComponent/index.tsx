import { AppButton } from "@/shared/components/AppButton"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Text, View } from "react-native"

export const ListEmptyComponent = () => {
    return(
        <View className="flex-1">
            <View className="flex-1 items-center px-20 pt-16">
                <Ionicons name='cart-outline' size={80} color={colors.gray[200]} />

                <Text className="text-xl font-bold text-gray-700 mt-4 mb-4">Your cart is empty</Text>

                <Text className="text-base text-gray-400 text-center mb-8">Explore our product catalog and make your first purchase</Text>
            </View>

            <AppButton
                leftIcon="storefront-outline"
                variant="outline"
                className="w-[197px] self-center"
                onPress={() => router.push('/(private)/(tabs)/home')}
            >Explore products</AppButton>
        </View>
    )
}