import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinity.query"
import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details"

export const useProductViewModel = (productId: number) => {
    const { data: productDetails, isLoading, error } = useGetProductDetailsQuery(productId)

    const { 
        comments, 
        isLoading: getCommentsLoading, 
        hasNextPage, 
        fetchNextPage, 
        refetch, 
        error: getCommentsError, 
        isRefetching,
        isFetchingNextPage
    } = useGetProductCommentsInfiniteQuery(productId)

    const handleLoadMore = () => {
        if(hasNextPage && !isFetchingNextPage) fetchNextPage()
    }

    const handleRefetch = () => {
        if(!isRefetching) refetch()
    }

    const handleEndReached = () => handleLoadMore()

    return{
        productDetails,
        isLoading,
        error,
        comments,
        getCommentsLoading,
        getCommentsError,
        isRefetching,
        handleLoadMore,
        handleRefetch,
        handleEndReached,
        isFetchingNextPage
    }
}