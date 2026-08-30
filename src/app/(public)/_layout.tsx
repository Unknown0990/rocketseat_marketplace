import { Redirect, Stack } from "expo-router"
import '../../styles/global.css'
import { QueryClient } from '@tanstack/react-query'
import { useUserStore } from "@/shared/store/user-store"

export default function PublicLayout(){
    const { user, token } = useUserStore()

    if(user && token) return <Redirect href="/(private)/home" />

    return(
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
        </Stack>
    )
}