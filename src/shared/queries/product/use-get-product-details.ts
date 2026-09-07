import { getProductDetails } from "@/shared/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useGetProductDetailsQuery = (id: number) => {
    const query = useQuery({
        queryFn: async () => getProductDetails(id),
        queryKey: ["product-detail", id]
    })

    return query
}