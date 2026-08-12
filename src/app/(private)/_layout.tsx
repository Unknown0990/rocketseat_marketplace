import { Stack } from "expo-router"
import '../../styles/global.css'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function PrivateLayout(){
    return(
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
        </Stack>
    )
}