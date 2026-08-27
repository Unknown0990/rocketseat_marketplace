import { useCallback, useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import { Toast } from 'toastify-react-native'
import { Alert, Linking } from "react-native";

interface UseCameraOptions{
    aspect?: [number, number];
    quality?: number;
    allowsEditing?: boolean;
    exif?: boolean;
}

export const useCamera = (pickerOptions: ImagePicker.ImagePickerOptions) => {
    const [isLoading, setIsLoading] = useState(false)

    const requestCameraPermissions = useCallback(async (): Promise<boolean> => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync()

            const currentStatus = status === 'granted'

            if(!currentStatus){
                Toast.error("We need your permission to open camera", "top")

                Alert.alert(
                    "Permission denied",
                    "We need your permission to access your camera",
                    [
                        {text: "Cancel", style: "cancel"},
                        {text: "Open settings", onPress: () => Linking.openSettings()},
                    ]
                )
            }
            
            return currentStatus
        }
        catch(error){
            Toast.error("Error to get camera permissions", "top")

            return false
        }
    }, [])

    const openCamera = useCallback(async(): Promise<string | null> => {
        setIsLoading(true)

        try {
            const hasPermissions = await requestCameraPermissions()

            if(!hasPermissions) return null

            const result = await ImagePicker.launchCameraAsync(pickerOptions)

            if(!result.canceled && result.assets && result.assets.length){
                Toast.success("Pic captured successfully!", "top")
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

    return {
        isLoading,
        requestCameraPermissions,
        openCamera
    }
}