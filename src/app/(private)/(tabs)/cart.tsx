import { useUserStore } from "@/shared/store/user-store";
import { Text, TouchableOpacity, View } from "react-native";

export default function Cart(){
    const { logout } = useUserStore()

    return(
        <View className='flex-1 items-center justify-center'>
            <Text>Cart</Text>
        </View>
    )
}