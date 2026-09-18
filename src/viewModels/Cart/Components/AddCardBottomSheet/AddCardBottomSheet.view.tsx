import { FC } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useAddCardBottomSheetViewModel } from "./useAddCardBottomSheet.viewModel"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { AppInput } from "@/shared/components/AppInput"
import { AppButton } from "@/shared/components/AppButton"
import { InputController } from "@/shared/components/InputController"

export const AddCardBottomSheetView: FC<ReturnType<typeof useAddCardBottomSheetViewModel>> = ({ control, handleCreateCreditCard, expirationDateMask, cardNumberMask }) => {
    return(
        <ScrollView className="flex-1">
            <View className="p-8">
                <View className="flex-row items-center justify-between mb-6">
                    <Text className="font-bold text-2xl text-center text-gray-900">Add Card</Text>
                    
                    <TouchableOpacity className="w-8 items-center justify-center border border-gray-400 rounded-[10px]">
                        <Ionicons name='close' size={24} color={colors.gray[400]}/>
                    </TouchableOpacity>
                </View>

                <View className="mt-6 gap-4">
                    <InputController
                        control={control}
                        name="titularName"
                        leftIcon="person-outline"
                        label="CARDHOLDER NAME"
                        placeholder="Your full name"
                    />

                    <InputController
                        control={control}
                        name="number"
                        leftIcon="card-outline"
                        label="CARD NUMBER"
                        placeholder="Your card number"
                        mask={cardNumberMask}
                        maxLength={19}
                    />

                    <View className="flex-row gap-2">
                        <View className="flex-1">
                            <InputController
                                control={control}
                                name='expirationDate'
                                leftIcon="calendar-outline"
                                label="EXPIRATION DATE"
                                placeholder="MM/AA"
                                keyboardType="numeric"
                                maxLength={5}
                                mask={expirationDateMask}
                            />
                        </View>

                        <View className="flex-1">
                            <InputController
                                control={control}
                                name='CVV'
                                leftIcon="lock-closed-outline"
                                label="CVV"
                                placeholder="123"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                </View>

                <View className="flex-row gap-4 pb-5 mt-8">
                    <View className="flex-1">
                        <AppButton
                            variant="outline"
                        >Cancel</AppButton>
                    </View>

                    <View className="flex-1">
                        <AppButton
                        >Add</AppButton>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}