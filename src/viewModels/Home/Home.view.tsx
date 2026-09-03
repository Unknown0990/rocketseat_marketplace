import { FlatList, RefreshControl, Text, View } from "react-native"
import { HomeHeader } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { ProductInterface } from "@/shared/interfaces/product"
import { ProductCard } from "./components/ProductCard"
import { FC } from "react"
import { useHomeViewModel } from "./useHome.viewModel"
import { Footer } from "./components/footer"
import { colors } from "@/styles/colors"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({ 
    products,
    handleEndReached,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    handleRefresh,
    isRefetching
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
                ListFooterComponent={<Footer isLoading={Boolean(hasNextPage && isLoading || isFetchingNextPage)} />}
                contentContainerClassName="p-[16px] pb-[120px]"
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                onEndReached={handleEndReached}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefetching}
                        onRefresh={handleRefresh}
                        colors={[colors["purple-base"]]}  
                        tintColor={colors["purple-base"]}
                    />
                }
            />
        </View>
    )
}