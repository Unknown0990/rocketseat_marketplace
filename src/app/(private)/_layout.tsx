import { Redirect, Stack } from "expo-router"
import '../../styles/global.css'
import { QueryClient } from '@tanstack/react-query'
import { useUserStore } from "@/shared/store/user-store"
import { AppBottomSheet } from "@/shared/components/AppBottomSheet"

export default function PrivateLayout(){
    const { user, token } = useUserStore()

    if(!user || !token) return <Redirect href="/(public)/login" />

    return(
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="(tabs)"/>
        </Stack>
    )
}