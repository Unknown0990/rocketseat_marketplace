import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CartService } from "../services/cart.service";

export interface CartProductProps{
    id: number;
    name: string;
    price: string;
    quantity: number;
    image: string;
}

export type OmittedCartProduct = Omit<CartProductProps, "quantity">

interface CartStoreProps{
    products: CartProductProps[];
    total: number;
    addProduct: (product: OmittedCartProduct) => void;
    removeProduct: (productId: number) => void;
    updateQuantity: (params: { productId: number, quantity: number }) => void;
    clearCart: () => void;
    getItemCount: () => number;
}

export const useCartStore = create<CartStoreProps>()(
    persist(
        (set, get) => ({
            products: [],
            total: 0,

            addProduct: (newProduct) => set((state) => 
                CartService.addProductToCart(state.products, newProduct)
            ),
            clearCart: () => set({ products: [], total: 0 }),
            getItemCount: () => CartService.getItemCount(get().products),
            removeProduct: (productId) => set((state) => 
                CartService.removeProductFromList(state.products, productId)
            ),
            updateQuantity: ({ productId, quantity }) => set((state) => CartService.updateProductQuantity({ 
                productId, 
                productList: state.products, 
                quantity
            })),
        }),
        {
            name: "marketplace-cart",
            storage: createJSONStorage(() => AsyncStorage)
        }
))