import { ImagePickerOptions } from "expo-image-picker"
import { useAppModal } from "./useAppModal"
import { useCamera } from "./useCamera"
import { useGallery } from "./useGallery"
import { useModalStore } from "../store/modal-store";

interface UseImageParams extends ImagePickerOptions{
    callback: (uri: string | null) => void;
}

export const useImage = ({ callback, ...pickerOptions }: UseImageParams) => {
    const { openCamera, isLoading: cameraLoading } = useCamera(pickerOptions)
    const { openGallery, isLoading: galleryLoading } = useGallery(pickerOptions)

    const modals = useAppModal()

    const { close } = useModalStore()

    const loading = Boolean(cameraLoading || galleryLoading)

    const handleCallback = (uri: string | null) => {
        close()
        callback(uri)
    }

    const handleSelectImage = () => {
        modals.showSelection({
            title: "Select a photo",
            message: "Choose an option",
            options: [
                {
                    text: "Gallery",
                    icon: "images",
                    variant: "primary",
                    onPress: async () => {
                        const uri = await openGallery()
                        handleCallback(uri)
                    },
                },
                { 
                    text: "Camera",
                    icon: "camera",
                    variant: "primary",
                    onPress: async () => {
                        const uri = await openCamera()
                        handleCallback(uri)
                    }
                },
            ]
        })
    }

    return{
        handleSelectImage,
        loading
    }
}