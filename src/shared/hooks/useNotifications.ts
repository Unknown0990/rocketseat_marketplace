import { useEffect } from "react"
import { localNotificationsService } from "../services/local-notifications.service"
import * as Notifications from 'expo-notifications'
import { Linking } from "react-native"

export const useNotifications = () => {
    useEffect(() => {
      localNotificationsService.requestPermissions()
      localNotificationsService.setUpNotificationChannel()

      const lastResponse = Notifications.getLastNotificationResponse()

      if(lastResponse){
        const deepLink = lastResponse.notification.request.content.data?.deepLink

        if(deepLink && typeof deepLink === 'string'){
          Linking.openURL(deepLink)
        }
      }

      const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
        const deepLink = response.notification.request.content.data?.deepLink

        if(deepLink && typeof deepLink === 'string'){
          Linking.openURL(deepLink)
        }
      })

      return () => subscription.remove()
    }, [])

    return{}
}