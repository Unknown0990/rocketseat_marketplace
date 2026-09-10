import { FC } from "react"
import { ReviewBottomSheetView } from "./ReviewBottomSheet.view"
import { useReviewBottomSheet } from "./useReviewBottomSheet.viewModel"

interface ReviewBottomSheetViewParams{
    productId: number
}

export const ReviewBottomSheet: FC<ReviewBottomSheetViewParams> = ({ productId }) => {
    const viewModel = useReviewBottomSheet(productId)

    return <ReviewBottomSheetView {...viewModel}/>
}