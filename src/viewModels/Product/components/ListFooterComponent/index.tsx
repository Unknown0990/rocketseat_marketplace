import { colors } from "@/styles/colors";
import { FC } from "react";
import { ActivityIndicator, View } from "react-native";

interface ListFooterComponentParams{
    isLoadingMore: boolean;
}

export const ListFooterComponent: FC<ListFooterComponentParams> = ({ isLoadingMore }) => {
    if(!isLoadingMore) return null

    return(
        <View className="py-4">
            <ActivityIndicator color={colors["purple-base"]} size={"small"}/>
        </View>
    )   
}