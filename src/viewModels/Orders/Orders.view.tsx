import { FC } from "react"
import { FlatList, Text, View } from "react-native"
import { useOrdersViewModel } from "./useOrders.viewModel"
import { Order } from "./Components/Order"
import { ListEmptyComponent } from "./Components/ListEmptyComponent"
import { ListHeaderComponent } from "./Components/ListHeaderComponent copy"
import { Error } from "./Components/Error"
import { Loading } from "./Components/Loading"

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({ orders, error, isLoading }) => {
    if(isLoading) return <Loading />
    
    if(error) return <Error />

    return(
        <View className="flex-1">
            <FlatList
                data={orders}
                keyExtractor={({ id }) => `order-${id}`}
                renderItem={({ item: order }) => <Order order={order}/>}
                contentContainerClassName="px-[16px] pb-[120px]"
                ListHeaderComponent={ListHeaderComponent}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>
    )
}