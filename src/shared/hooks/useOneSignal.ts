import { useEffect, useState } from "react"
import { NotificationClickEvent, OneSignal } from 'react-native-onesignal'

const ONESIGNAL_APP_ID = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID

export const useOneSignal = () => {
    const [playerId, setPlayerId] = useState<string | null | undefined>()

    useEffect(() => {
        if(!ONESIGNAL_APP_ID) return

        (async() => {
            const id = await OneSignal.User.pushSubscription.getIdAsync()

            if(id){
                setPlayerId(id)
            }
        })()
    }, [])

    return{
        playerId
    }
}