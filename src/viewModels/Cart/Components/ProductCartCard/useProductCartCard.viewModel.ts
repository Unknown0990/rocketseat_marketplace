import { useCartStore } from "@/shared/store/cart-store"
import { FC } from "react"

export const useProductCartCardViewModel = () => {
    const { updateQuantity } = useCartStore()

    const handleIncrement = (productId: number, quantity: number) => {
        updateQuantity({
            productId,
            quantity: quantity + 1
        })
    }

    const handleDecrement = (productId: number, quantity: number) => {
        updateQuantity({
            productId,
            quantity: quantity - 1
        })
    }

    return{
        handleIncrement,
        handleDecrement
    }
}