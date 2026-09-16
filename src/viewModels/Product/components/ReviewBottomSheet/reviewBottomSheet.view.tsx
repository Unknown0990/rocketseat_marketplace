import { FC } from "react"
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel"
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { AppInput } from "@/shared/components/AppInput"
import { AppButton } from "@/shared/components/AppButton"
import { Stars } from "./components/Stars"

export const ReviewBottomSheetView: FC<ReturnType<typeof useReviewBottomSheetViewModel>> = ({
    handleRatingChange,
    handleContentChange,
    ratingForm,
    handleFormSubmit,
    isLoading,
}) => {
    return(
        <View className="bg-background rounded-2xl">
            <View className="flex-row items-center justify-between p-6">
                <Text className="text-lg font-bold text-gray-900">{ratingForm.isEditing ? 'Edit Review' : 'Review Product'}</Text>

                <TouchableOpacity className="w-8 h-8 items-center justify-center rounded-[10px] border-gray-400">
                    <Ionicons name='close' color={colors.gray[400]} size={24}/>
                </TouchableOpacity>
            </View>

            {isLoading ?
                <View className="p-6 items-center justify-center min-h-[300px]">
                    <ActivityIndicator color={colors["purple-base"]} size='large'/>
                    <Text className="text-gray-600 mt-4 text-center">Checking existing review...</Text>
                </View>
                :
                <View className="p-6">
                    <Text className="font-semibold text-base text-gray-300">Rating</Text>

                    <View className="flex-row items-center mb-6 gap-2">
                        <Stars
                            rating={ratingForm.rating}
                            handleRatingChange={handleRatingChange}
                        />
                    </View>

                    <AppInput
                        label="COMMENT"
                        placeholder={ratingForm.isEditing ? 'Edit your review' : "Describe your review"}
                        value={ratingForm.content}
                        multiline
                        numberOfLines={8}
                        textAlignVertical="top"
                        textAlign="left"
                        containerClassName="mb-8"
                        className="h-[150px]"
                        onChangeText={handleContentChange}
                    />

                    <View className="flex-row gap-3 mb-8">
                        <View className="flex-1">
                            <AppButton
                                variant="outline"
                            >Cancel</AppButton>
                        </View>

                        <View className="flex-1">
                            <AppButton
                                onPress={handleFormSubmit}
                            >{ratingForm.isEditing ? 'Update' : 'Send'}</AppButton>
                        </View>
                    </View>
                </View>
            }

        </View>
    )
}