import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { useCartStore } from "@/shared/store/cart-store"
import { createElement } from "react"
import { AddCardBottomSheet } from "./Components/AddCardBottomSheet"
import { useGetCreditCardQuery } from "@/shared/queries/creditCards/useGetCreditCard.query"

export const useCartViewModel = () => {
    const { products } = useCartStore()

    const { open: openBottomSheet } = useBottomSheetStore()

    const { data: creditCards = [], isLoading: loadingCreditCards } = useGetCreditCardQuery()

    const openCartBottomSheet = () => {
        openBottomSheet({
            content: createElement(AddCardBottomSheet)
        })
    }

    return{
        products,
        openCartBottomSheet,
        creditCards,
        loadingCreditCards
    }
}