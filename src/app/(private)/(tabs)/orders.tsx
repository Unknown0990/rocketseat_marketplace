import { useUserStore } from "@/shared/store/user-store";
import { OrdersView } from "@/viewModels/Orders/Orders.view";
import { useOrdersViewModel } from "@/viewModels/Orders/useOrders.viewModel";
import { Text, TouchableOpacity, View } from "react-native";

export default function Orders(){
    const viewModel = useOrdersViewModel()

    return <OrdersView {...viewModel} />
}