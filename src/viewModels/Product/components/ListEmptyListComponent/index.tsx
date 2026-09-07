import { colors } from "@/styles/colors";
import { FC } from "react";
import { ActivityIndicator, Text, View } from "react-native";

interface ListEmptyListComponentParams{
    isLoadingComments: boolean;
}

export const ListEmptyListComponent: FC<ListEmptyListComponentParams> = ({ isLoadingComments }) => {
    if(isLoadingComments){
        return(
            <View className="items-center py-8">
                <ActivityIndicator color={colors["purple-base"]} size={"small"} />
                <Text className="mt-2 text-gray-500">Loading reviews...</Text>
            </View>
        )
    }

    return(
        <View className="py-8 items-center">
            <Text className="text-gray-500 text-base">No comment to see yet</Text>
            <Text className="text-gray-400 text-sm mt-1">Be the first to leave a review</Text>
        </View>
    )
}