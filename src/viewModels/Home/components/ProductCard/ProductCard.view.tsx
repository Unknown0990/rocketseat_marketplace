import { FC } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useProductCardViewModel } from "./useProductCard.viewModel"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { AppPriceText } from "@/shared/components/AppPriceText"
import { router } from "expo-router"

export const ProductCardView: FC<ReturnType<typeof useProductCardViewModel>> = ({ product, formatRating }) => {
    return(
        <TouchableOpacity 
            className="w-[48%] my-1 rounded-xl shadow-sm overflow-hidden height-[157px] p-[4px] bg-white mb-2"
            onPress={() => router.push(`/product/${product.id}`)}
        >
            <View>
                <Image
                    source={{ uri: `${product.photo}` }}
                    className="w-full h-[96px] rounded-[6px]"
                    resizeMode="cover"
                    alt="product photo"
                />

                <View className="absolute top-0 right-0 flex-row items-center px-2 py-1 rounded-b-lg rounded-r-none bg-white">
                    <Ionicons name='star' size={12} color={colors["blue-base"]} />

                    <Text className="text-sm font-semibold ml-1">{formatRating}</Text>
                </View>
            </View>

            <View className="p-3">
                <Text className="text-xl font-semibold mb-1" numberOfLines={2}>{product.name}</Text>

                <View>
                    <AppPriceText
                        classNameCurrency="text-sm text-purple-base"
                        classNameValue="text-lg flex-1 text-purple-base font-bold"
                        value={Number(product.value)}
                    />
                </View>
            </View>

        </TouchableOpacity>
    )
}