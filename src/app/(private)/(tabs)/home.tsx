import { useUserStore } from "@/shared/store/user-store";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home(){
    const { logout } = useUserStore()

    return(
        <View className='flex-1 items-center justify-center'>
            <Text>Homescreen</Text>
        </View>
    )
}