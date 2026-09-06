import { useDebounce } from "@/shared/hooks/useDebounce"
import { useProductInfiniteQuery } from "@/shared/queries/product/use-product-infinite-query"
import { useFilterStore } from "@/shared/store/use-filter-store"
import { useState } from "react"

export const useHomeViewModel = () => {
    const { appliedFilterState } = useFilterStore()

    const [searchInputText, setSearchInputText] = useState("")

    const currentSearchText = useDebounce(searchInputText)

    const {
        products, 
        error, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage, 
        isLoading, 
        refetch, 
        isRefetching,
    } = useProductInfiniteQuery({ filters: { ...appliedFilterState, searchText: currentSearchText }})


    // console.log(JSON.stringify(data, null, 2))

    const handleLoadMore = () => {
        if(hasNextPage && !isFetchingNextPage && !isLoading){
            fetchNextPage()
        }
    }

    const handleRefresh = async () => {
        await refetch()
    }

    const handleEndReached = () => {
        handleLoadMore()
    }

    return{
        handleLoadMore,
        handleRefresh,
        products,
        handleEndReached,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        refetch,
        isRefetching,
        searchInputText,
        setSearchInputText
    }
}