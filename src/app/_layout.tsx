import { Stack } from "expo-router"
import '../styles/global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppModal } from "@/shared/components/AppModal"
import ToastManager from 'toastify-react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const queryClient = new QueryClient()

export default function RootLayout(){
    return(
        <SafeAreaView className="flex-1 bg-purple-base">
            <QueryClientProvider client={queryClient}>
                <Stack
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="login" />
                    <Stack.Screen name="(public)" />
                    <Stack.Screen name="(private)" />
                </Stack>

                <AppModal/>
                <ToastManager useModal={false} />
            </QueryClientProvider>
        </SafeAreaView>
    )
}