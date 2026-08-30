import { useUserStore } from "@/shared/store/user-store";
import { Text, TouchableOpacity, View } from "react-native";

export default function Orders(){
    const { logout } = useUserStore()

    return(
        <View className='flex-1 items-center justify-center'>
            <Text>Orders</Text>
        </View>
    )
}