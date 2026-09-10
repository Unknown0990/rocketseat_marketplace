import { FC } from "react"
import { Text, View } from "react-native"
import { useReviewBottomSheet } from "./useReviewBottomSheet.viewModel"

export const ReviewBottomSheetView: FC<ReturnType<typeof useReviewBottomSheet>> = ({  }) => {
    return(
        <View>
            <Text>Product Review</Text>
        </View>
    )
}