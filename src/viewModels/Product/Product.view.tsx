import { FC } from "react"
import { FlatList, Text, View } from "react-native"
import { useProductViewModel } from "./useProduct.viewModel"
import { Header } from "./components/Header"
import { Comment } from "./components/Comment"
import { ListFooterComponent } from "./components/ListFooterComponent"
import { ListEmptyListComponent } from "./components/ListEmptyListComponent"
import { Loading } from "./components/Loading"
import { Error } from "./components/Error"
import { GetProductDetailsRequest } from "@/shared/interfaces/http/product-details"
import { SafeAreaView } from "react-native-safe-area-context"
import { AddToCartFooter } from "./components/AddToCartFooter"

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
    isLoading,
    error,
    productDetails,
    getCommentsError,
    getCommentsLoading,
    handleEndReached,
    handleRefetch,
    comments,
    isRefetching,
    isFetchingNextPage
}) => {
    if(error) return <Error />

    if(isLoading || !productDetails) return <Loading />

    return(
        <View className="bg-background flex-1 py-3">
            <FlatList
                className="px-6 flex-1"
                data={comments}
                renderItem={({ item }) => <Comment comment={item} />}
                ListHeaderComponent={<Header productDetails={productDetails}/>}
                ListFooterComponent={<ListFooterComponent isLoadingMore={isFetchingNextPage} />}
                ListEmptyComponent={<ListEmptyListComponent isLoadingComments={getCommentsLoading} />}
                onEndReached={handleEndReached}
                onRefresh={handleRefetch}
                refreshing={isRefetching}
                contentContainerClassName="pb-6"
            />

            <AddToCartFooter product={productDetails} />
        </View>
    )
}