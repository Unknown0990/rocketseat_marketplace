import { BuildImageUrl } from "@/shared/helpers/buildImageUrl"
import { getProducts } from "@/shared/services/product.service"
import { FilterState } from "@/shared/store/use-filter-store"
import { useInfiniteQuery } from "@tanstack/react-query"

interface ProductsInfiniteQueryParams {
    filters?: FilterState;
}

export const useProductInfiniteQuery = ({ filters }: ProductsInfiniteQueryParams) => {
    const { 
        data, 
        error, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage, 
        isLoading, 
        refetch, 
        isRefetching,
    } = useInfiniteQuery({
        queryFn: async ({ pageParam = 1 }) => {
            try {
                const response = await getProducts({
                    pagination: {
                        page: pageParam,
                        perPage: 10
                    },
                    filters: {
                        categoryIds: filters?.selectedCategories ?? [],
                        maxValue: filters?.maxValue ?? undefined,
                        minValue: filters?.minValue ?? undefined,
                        searchText: filters?.searchText ?? undefined,
                    }
                })

                return response
            } 
            catch(error){
                throw Error(error)
            }
        },
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
        },
        initialPageParam: 1,
        queryKey: ["products", filters],
        staleTime: 1000 * 60 * 1
    })

    const products = data?.pages.flatMap(page => page.data).map(product => ({
        ...product,
        photo: BuildImageUrl(product.photo)
    }))

    return{
        products, 
        error, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage, 
        isLoading, 
        refetch, 
        isRefetching
    }
}