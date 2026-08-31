import { FlatList, Text, View } from "react-native"
import { HomeHeader } from "./components/Header"

export const HomeView = () => {
    return(
        <View className="flex-1">
            <FlatList
                data={[]}
                renderItem={() => <></>}
                ListHeaderComponent={<HomeHeader/>}
                contentContainerClassName="p-[16px] pb-[120px]"
            />
        </View>
    )
}