import { getCreditCards } from "@/shared/services/credit-card.service"
import { useQuery } from "@tanstack/react-query"

export const useGetCreditCard = () => {
    const query = useQuery({
        queryFn: getCreditCards,
        queryKey: ['credit-cards'],
        staleTime: 100 * 60 * 5
    })

    return query
}