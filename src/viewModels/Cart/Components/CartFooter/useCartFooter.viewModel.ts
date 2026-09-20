import { useAppModal } from "@/shared/hooks/useAppModal"
import { CreditCardInterface } from "@/shared/interfaces/credit-card"
import { useSubmitOrderMutation } from "@/shared/queries/orders/use-submit-order.mutation"
import { useCartStore } from "@/shared/store/cart-store"
import { router } from "expo-router"
import { useState } from "react"

export const useCartFooterViewModel = () => {
    const [selectCard, setSelectCard] = useState<null | CreditCardInterface>(null)

    const { total, products, clearCart } = useCartStore()

    const { showSuccess } = useAppModal()

    const createOrderMutation = useSubmitOrderMutation()

    const submitOrder = async () => {
        if(!selectCard) return

        await createOrderMutation.mutateAsync({
            creditCardId: selectCard?.id,
            items: products.map(({ id, quantity }) => ({ productId: id, quantity }))
        })
        
        clearCart()

        showSuccess({
            title: "Success!",
            message: "Order submitted successfully",
            buttonText: "See order",
            onButtonPress: () => {
                router.push("/(private)/(tabs)/orders")
            },
        })
        
    }

    return{
        total,
        selectCard,
        setSelectCard,
        submitOrder,
        isOrderLoading: createOrderMutation.isPending
    }
}