import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinity.query"
import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details"
import { useCartStore } from "@/shared/store/cart-store"
import { useModalStore } from "@/shared/store/modal-store"
import { createElement, useEffect } from "react"
import { AddToCartSuccessModal } from "./components/AddToCartSuccessModal"
import { router } from "expo-router"
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { ReviewBottomSheet } from "./components/ReviewBottomSheet"
import { View } from "react-native"
import { localNotificationsService } from "@/shared/services/local-notifications.service"

export const useProductViewModel = (productId: number, openFeedbackBottomsheet: boolean) => {
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

    const { addProduct, products } = useCartStore()

    const { open, close } = useModalStore()

    const { open: openBottomSheet }  = useBottomSheetStore()

    const handleLoadMore = () => {
        if(hasNextPage && !isFetchingNextPage) fetchNextPage()
    }

    const handleRefetch = () => {
        if(!isRefetching) refetch()
    }

    const handleEndReached = () => handleLoadMore()

    const onGoToCart = () => {
        router.push("/(private)/(tabs)/cart")
        close()
    }

    const onContinueShopping = () => {
        router.push("/(private)/(tabs)/home")
        close()
    }

    const handleAddToCart = async () => {
        if(!productDetails) return

        addProduct({
            id: productDetails.id,
            name: productDetails.name,
            price: productDetails.value,
            image: productDetails.photo,
        })

        await localNotificationsService.scheduleCartReminder({
            delayInMinutes: 20,
            productId: productDetails.id,
            productName: productDetails.name,
        })

        open(createElement(AddToCartSuccessModal, {
            productName: productDetails.name,
            onGoToCart: onGoToCart,
            onClose: close,
            onContinueShopping: onContinueShopping
        }))
    }

    const handleOpenReview = () => {
        if(!productDetails) return

        openBottomSheet({
            content: createElement(ReviewBottomSheet, {
                productId,
            })
        })
    }

    useEffect(() => {
      if(openFeedbackBottomsheet){
        handleOpenReview()
      }
    }, [openFeedbackBottomsheet, productDetails])
    
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
        isFetchingNextPage,
        handleAddToCart,
        handleOpenReview
    }
}