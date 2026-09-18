import { FC } from "react"
import { FlatList, Text, View } from "react-native"
import { useCartViewModel } from "./useCart.viewModel"
import { ProductCartCard } from "./Components/ProductCartCard"
import { ListEmptyComponent } from "./Components/ListEmptyComponent"
import { CartHeader } from "./Components/CartHeader"
import { CartFooter } from "./Components/CartFooter"

export const CartView: FC<ReturnType<typeof useCartViewModel>> = ({
    products,
    openCartBottomSheet,
    creditCards,
    loadingCreditCards
}) => {
    return(
        <View>
            <FlatList
                contentContainerClassName="px-6"
                className="py-2"

                data={products}
                renderItem={({ item }) => <ProductCartCard product={item} />}
                keyExtractor={({ id }) => `product-card-id${id}`}
                ListHeaderComponent={CartHeader}
                ListEmptyComponent={ListEmptyComponent}
                ListFooterComponent={products.length > 0 ? <CartFooter openCartBottomSheet={openCartBottomSheet} creditCards={creditCards} loadingCreditCards={loadingCreditCards} /> : null}
            />
        </View>
    )
}