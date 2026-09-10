import { AppButton } from "@/shared/components/AppButton";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native"

interface AddToCartSuccessModalParams{
    productName: string;
    onGoToCart: () => void;
    onClose: () => void;
    onContinueShopping: () => void;
}

export const AddToCartSuccessModal: FC<AddToCartSuccessModalParams> = ({ onClose, onContinueShopping, onGoToCart, productName }) => {
    return(
        <View className="bg-white rounded-xl p-6 w-full max-w-sm">
            <View className="items-center mb-4">
                <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-3">
                    <Ionicons name="checkmark" size={32} color={colors.success}/>
                </View>

                <Text className="text-xl font-bold text-gray-900 text-center" >Product added!</Text>
            </View>

            <Text className="text-gray-600 text-center mb-6">
                <Text className="font-semibold">{productName}</Text> was added to your cart successfully
            </Text>

            <View className="gap-3">
                <AppButton
                    leftIcon="cart"
                    onPress={onGoToCart}
                >Go to Cart</AppButton>

                <AppButton
                    onPress={onContinueShopping}
                    variant="outline"
                >Continue shopping</AppButton>
            </View>
        </View>
    )
}