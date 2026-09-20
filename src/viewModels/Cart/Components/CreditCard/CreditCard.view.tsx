import { Text, TouchableOpacity, View } from "react-native"
import { useCreditCardViewModel } from "./useCreditCard.viewModel"
import { FC } from "react"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"

export const CreditCardView: FC<ReturnType<typeof useCreditCardViewModel>> = ({ creditCard, formattedExpirationDate, formattedCardNumber }) => {
    return(
        <TouchableOpacity className="p-4 rounded-lg border-[1px] bg-white border-gray-100">
            <View className="flex-row justify-between">
                <View className="mr-4">
                    <Ionicons name="cart-outline" size={24} color={colors["purple-base"]} />
                </View>

                <View className="flex-1">
                    <Text className="text-base">FINAL NUMBERS: {formattedCardNumber}</Text>
                    <Text className="text-sm text-gray-500 mt-1">Expiration date: {formattedExpirationDate}</Text>
                </View>

                <TouchableOpacity>
                    <Ionicons name="pencil" color={colors["purple-base"]} size={18} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}