import { AppPriceText } from "@/shared/components/AppPriceText"
import { BuildImageUrl } from "@/shared/helpers/buildImageUrl"
import { OrderInterface } from "@/shared/interfaces/http/order"
import { format } from "date-fns"
import { FC } from "react"
import { Image, Text, View } from "react-native"

interface OrderParams{
    order: OrderInterface
}

export const Order: FC<OrderParams> = ({ order }) => {
    return(
        <View className="flex-row items-center bg-white p-3 pl-0 mb-3 rounded-lg h-[89px]">
            <View className="p-1">
                <Image
                    className="w-[88px] h-[80px] rounded-lg mr-4"
                    source={{
                        uri: BuildImageUrl(order.productPhoto)
                    }}
                    resizeMode="cover"
                /> 
            </View>

            <View className="flex-1 justify-between py-4">
                <View className="flex-row justify-between items-start mb-2">
                    <Text 
                        className="text-base font-semibold text-gray-900 flex-1 mr-2"
                        numberOfLines={1}
                    >{order.productName}</Text>

                    <Text className="text-sm text-gray-600">{format(order.createdAt, "dd/MM/yyyy")}</Text>
                </View>
                
                <View className="flex-row">
                    <Text className="text-sm text-gray-600 mb-1">{order.quantity} {order.quantity > 1 ? "Units" : "Unit"} • </Text>
                    <AppPriceText value={order.totalPrice} classNameCurrency="text-sm text-gray-600" classNameValue="text-sm text-gray-600"/>
                </View>

                <Text className="text-sm text-gray-600">Final Numbers {order.creditCard.maskedNumber.slice(-4)}</Text>
            </View>
        </View>
    )
}