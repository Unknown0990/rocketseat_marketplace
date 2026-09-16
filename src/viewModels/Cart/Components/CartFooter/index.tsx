import { AppButton } from "@/shared/components/AppButton"
import { AppPriceText } from "@/shared/components/AppPriceText"
import { useCartStore } from "@/shared/store/cart-store"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface CartFooterParams{
    openCartBottomSheet: () => void;
}

export const CartFooter: FC<CartFooterParams> = ({ openCartBottomSheet }) => {
    const { total } = useCartStore()

    return(
        <View className="bg-white p-4 rounded-lg mt-6">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-sm font-semibold text-gray-600">TOTAL VALUE</Text>

                <AppPriceText
                    value={total}
                    classNameCurrency="text-base text-gray-900 font-bold"
                    classNameValue="text-base text-gray-900 font-bold"
                />
            </View>

            <View className="mb-4">
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-sm font-[10px] text-gray-600">CREDIT CARDS</Text>
                    
                    <TouchableOpacity className="flex-row items-center" onPress={openCartBottomSheet}>
                        <Ionicons name='card-outline' color={colors["purple-base"]} size={20}/>
                        <Text className="text-purple-base ml-2 text-sm font-bold">Add card</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <AppButton
                className="mt-4"
            >Confirm Purchase</AppButton>
        </View>
    )
}