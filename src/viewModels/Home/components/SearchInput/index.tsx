import { AppInput } from "@/shared/components/AppInput"
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import { Filter } from "../Filter"
import { FC } from "react"

interface SearchParams{
    setSearchInputText: (text: string) => void
    inputValue: string;
}

export const SearchInput: FC<SearchParams> = ({ setSearchInputText, inputValue }) => {
    const { open } = useBottomSheetStore()

    return(
        <View>
            <Text className="text-2xl font-bold mt-6">Explore products</Text>

            <View className="flex-row">
                <View className="flex-1">
                    <AppInput 
                        leftIcon="search" 
                        className="text-lg flex-1"
                        placeholder="Search"
                        onChangeText={setSearchInputText}
                        value={inputValue}
                    />
                </View>

                <TouchableOpacity 
                    className="ml-5 mt-6 items-center justify-center rounded-xl border-[1px] h-[48px] w-[48px] border-purple-base"
                    onPress={() => open({
                        content: <Filter />,
                    })}
                >
                    <Ionicons name='filter-outline' size={24} color={colors["purple-base"]}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}