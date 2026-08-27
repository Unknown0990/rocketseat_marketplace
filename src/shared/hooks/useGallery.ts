import { ImagePickerOptions } from "expo-image-picker"
import { useCallback, useState } from "react"
import * as ImagePicker from 'expo-image-picker'
import { Toast } from "toastify-react-native"
import { Alert, Linking } from "react-native"

export const useGallery = (pickerOptions: ImagePickerOptions) => {
    const [isLoading, setIsLoading] = useState(false)

    const requestGalleryPermissions = useCallback(async (): Promise<boolean> => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

            const currentStatus = status === 'granted'

            if(!currentStatus){
                Toast.error("We need your permission to access the gallery", "top")

                Alert.alert(
                    "Permission denied",
                    "We need your permission to access your photos gallery",
                    [
                        {text: "Cancel", style: "cancel"},
                        {text: "Open settings", onPress: () => Linking.openSettings()},
                    ]
                )
            }
            
            return currentStatus
        }
        catch(error){
            Toast.error("Error to get gallery permissions", "top")

            return false
        }
    }, [])

    const openGallery = useCallback(async (): Promise<string | null> => {
        setIsLoading(true)

        try {
            const hasPermissions = await requestGalleryPermissions()

            if(!hasPermissions) return null

            const result = await ImagePicker.launchImageLibraryAsync(pickerOptions)

            if(!result.canceled && result.assets && result.assets.length){
                Toast.success("Pic selected successfully!", "top")
                return result.assets[0].uri
            }

            return null
        } 
        catch(error){
            Toast.error("Error to open camera", "top")
            return null
        }
        finally{
            setIsLoading(false)
        }
    }, [])

    return{
        isLoading,
        requestGalleryPermissions,
        openGallery
    }
}