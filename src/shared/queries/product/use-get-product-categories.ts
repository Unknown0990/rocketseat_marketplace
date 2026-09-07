import { getProductsCategories } from "@/shared/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useGetProductCategoriesQuery = () => {
    const query = useQuery({
        queryFn: getProductsCategories,
        queryKey: ["products-categories"],
        staleTime: 1000 * 60 * 60
    })

    return query
}