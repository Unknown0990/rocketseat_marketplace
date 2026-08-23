import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { AppButtonVariantProps, appButtonVariants } from "./appButton.variants"
import { FC } from "react"
import { Ionicons } from '@expo/vector-icons'
import { colors } from "@/styles/colors";

interface AppButtonProps extends TouchableOpacityProps, AppButtonVariantProps{
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    children: string;
}

export const AppButton: FC<AppButtonProps> = ({ leftIcon, rightIcon, children, variant = 'fill', isLoading, isDisabled, className, ...rest }) => {
    const styles = appButtonVariants({ hasIcon: !!leftIcon || !!rightIcon, isLoading, isDisabled, variant })

    const contentColor = variant === "fill" ? colors.white : colors["purple-base"]

    const renderContent = () => {
        if(isLoading) return <ActivityIndicator size="small" color={contentColor}/>

        return(
            <>
                {leftIcon && <Ionicons name={leftIcon} color={contentColor} size={20} />}
                <Text className={styles.text()}>{children}</Text>
                {rightIcon && <Ionicons name={rightIcon} color={contentColor} size={20} />}
            </>
        )
    }

    return(
        <TouchableOpacity className={styles.base({ className })} {...rest}>
            {renderContent()}
        </TouchableOpacity>
    )
}