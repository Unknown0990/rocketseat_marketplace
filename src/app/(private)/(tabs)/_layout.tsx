import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { Stack, Tabs } from "expo-router"

export default function TabsLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    // height: 110,
                    paddingTop: 16
                }
            }}
        >
            <Tabs.Screen name="home" options={{
                title: "PRODUCTS",
                tabBarActiveTintColor: colors["purple-base"],
                tabBarIcon: ({ color }) => <Ionicons color={color} name="storefront-outline" size={25} />,
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginTop: 4
                }
            }}/>

            <Tabs.Screen name="orders" options={{
                title: "ORDERS",
                tabBarActiveTintColor: colors["purple-base"],
                tabBarIcon: ({ color }) => <Ionicons color={color} name="clipboard-outline" size={25} />,
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginTop: 4
                }
            }}/>
            
            <Tabs.Screen name="cart" options={{
                title: "CART",
                tabBarActiveTintColor: colors["purple-base"],
                tabBarIcon: ({ color }) => <Ionicons color={color} name="cart-outline" size={25} />,
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginTop: 4
                }
            }}/>
        </Tabs>
    )
}