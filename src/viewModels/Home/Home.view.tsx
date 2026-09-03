import { FlatList, Text, View } from "react-native"
import { HomeHeader } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { ProductInterface } from "@/shared/interfaces/product"
import { ProductCard } from "./components/ProductCard"
import { FC } from "react"
import { useHomeViewModel } from "./useHome.viewModel"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({ 
    products,
    handleEndReached
}) => {
    

    return(
        <View className="flex-1">
            <FlatList
                data={products}
                keyExtractor={({ id }) => `product-list-item-${id}`}
                renderItem={({ item }) => <ProductCard product={item} />}
                ListHeaderComponent={() => (
                    <>
                        <HomeHeader/>
                        <SearchInput/>
                    </>
                )}
                contentContainerClassName="p-[16px] pb-[120px]"
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                onEndReached={handleEndReached}
            />
        </View>
    )
}