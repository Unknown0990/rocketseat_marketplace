import { colors } from '@/styles/colors'
import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

const DEFAULT_CHANNEL = "default"

const NOTIFICATION_IDS = {
    CART_REMINDER: "cart-reminder",
    PURCHASE_FEEDBACK: "purchase-feedback"
}

const DEEP_LINK = "marketplace://"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowBanner: true,
        shouldSetBadge: false,
        shouldShowList: true
    })
})

const setUpNotificationChannel = async () => {
    if(Platform.OS === 'android'){
        await Notifications.setNotificationChannelAsync(DEFAULT_CHANNEL, {
            name: 'Marketplace Notifications',
            importance: Notifications.AndroidImportance.HIGH,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: colors['purple-base'],
        })
    }
}

const requestPermissions = async (): Promise<boolean> => {
    const { status: currentStatus } = await Notifications.getPermissionsAsync()

    let finalStatus = currentStatus

    if(currentStatus !== 'granted'){
        const { status } = await Notifications.requestPermissionsAsync()

        finalStatus = status
    }

    return finalStatus === 'granted'
}

const cancelNotifications = async (id: string) => {
    try {
        await Notifications.cancelScheduledNotificationAsync(id)   
    }
    catch(error){
        console.log(error)
    }
}

interface ScheduleProductParams{
    productName: string;
    productId: number;
    delayInMinutes: number;
}

const scheduleCartReminder = async ({ delayInMinutes, productId, productName }: ScheduleProductParams) => {
    const permissionGranted = await requestPermissions()

    if(!permissionGranted) return

    await Notifications.scheduleNotificationAsync({
        identifier: `${NOTIFICATION_IDS.CART_REMINDER}-${productId}`,
        content: {
            title: "🛒 Looks like something was forgotten in the caarrt...",
            body: `${productName} is still here waiting for you. Click to go to checkout.`,
            data: {
                type: 'cart_reminder',
                productId: String(productId),
                deepLink: `${DEEP_LINK}cart`
            },
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: delayInMinutes,
        }
    })
}

const scheduleFeedbackNotification = async ({ delayInMinutes, productId, productName }: ScheduleProductParams) => {
    const permissionGranted = await requestPermissions()
    if(!permissionGranted) return

    await Notifications.scheduleNotificationAsync({
        identifier: `${NOTIFICATION_IDS.PURCHASE_FEEDBACK}-${productId}`,
        content: {
            title: '⭐ How would your rate your purchase?',
            body: `You just made an order of ${productName}. Send a feedback to help others decide about it.`,
            data: {
                type: "purchase_feedback",
                productId: Number(productId),
                deepLink: `${DEEP_LINK}product/${productId}?openFeedbackBottomsheet=true`,
            }
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: delayInMinutes
        }
    })
}

export const localNotificationsService = {
    scheduleCartReminder,
    requestPermissions,
    setUpNotificationChannel,
    scheduleFeedbackNotification,
    cancelNotifications,
    NOTIFICATION_IDS
}