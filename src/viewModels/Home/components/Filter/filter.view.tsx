import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useFilterViewModel } from "./filter.viewModel"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { AppInput } from "@/shared/components/AppInput"
import { AppButton } from "@/shared/components/AppButton"
import CheckBox from 'expo-checkbox'

export const FilterView: FC<ReturnType<typeof useFilterViewModel>> = ({ 
    categories,
    isLoading,
    handleMaxValueUpdate,
    handleMinValueUpdate,
    handleCategoryToggle,
    selectedCategories
}) => {
    return(
        <View>
            <View className="flex-row items-center justify-between p-[4px] px-6">
                <Text className="text-lg font-bold text-gray-900">Filter Ads</Text>

                <TouchableOpacity>
                    <Ionicons name='close' size={20} color={colors["purple-base"]}/>
                </TouchableOpacity>
            </View>

            <View className="p-4 px-6">
                <Text className="font-semibold text-base text-gray-300">VALUE</Text>

                <View className="flex-row mb-4 w-full">
                    <View className="flex-1">
                        <AppInput 
                            placeholder="From" 
                            keyboardType="numeric" 
                            containerClassName="w-[90%]"
                            onChangeText={(text) => handleMinValueUpdate(Number(text))}
                        />
                    </View>

                    <View className="flex-1">
                        <AppInput 
                            placeholder="To" 
                            keyboardType="numeric" 
                            containerClassName="w-[90%]"
                            onChangeText={(text) => handleMaxValueUpdate(Number(text))}
                        />
                    </View>
                </View>

                <Text className="font-semibold text-base text-gray-300">CATEGORY</Text>

                {isLoading 
                    ? 
                    <Text>Loading categories...</Text>
                    :
                    <View className="mb-6 gap-3">
                        {categories?.map(cat => (
                            <TouchableOpacity 
                                className="flex-row items-center py-2"
                                key={`product-category-${cat.id}`}
                                onPress={() => handleCategoryToggle(cat.id)}
                            >
                                <CheckBox 
                                    color={colors["purple-base"]}
                                    className="mr-3 rounded-full"
                                    value={selectedCategories.includes(cat.id)}
                                    onValueChange={() => handleCategoryToggle(cat.id)}
                                />
                                <Text className="text-base text-gray-400">{cat.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                }

                <View className="flex-row gap-3 mt-4 mb-6">
                    <View
                        className="flex-1"
                    >
                        <AppButton
                            variant="outline"
                        >Clear Filter</AppButton>
                    </View>

                    <View
                        className="flex-1"
                    >
                        <AppButton>Filter</AppButton>
                    </View>
                </View>
            </View>
        </View>
    )
}