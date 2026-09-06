import { FlatList, RefreshControl, Text, View } from "react-native"
import { ProductCard } from "./components/ProductCard"
import { FC } from "react"
import { useHomeViewModel } from "./useHome.viewModel"
import { Footer } from "./components/Footer"
import { colors } from "@/styles/colors"
import { RenderHeader } from "./components/RenderHeader"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({ 
    products,
    handleEndReached,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    handleRefresh,
    isRefetching,
    searchInputText,
    setSearchInputText
}) => {
    
    return(
        <View className="flex-1">
            <FlatList
                data={products}
                keyExtractor={({ id }) => `product-list-item-${id}`}
                renderItem={({ item }) => <ProductCard product={item} />}
                ListHeaderComponent={
                    <RenderHeader
                        searchInputText={searchInputText} 
                        setSearchInputText={setSearchInputText} 
                    />
                }
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