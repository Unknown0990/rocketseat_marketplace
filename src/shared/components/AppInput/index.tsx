import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import { InputVariantProps, inputVariants } from "./input.variants"
import { Ionicons } from '@expo/vector-icons'
import { FC } from "react"
import { useAppInputViewModel } from "./useAppInputViewModel";

export interface InputProps extends TextInputProps, InputVariantProps {
    label?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    containerClassName?: string;
    mask?: (value: string) => void | string;
    error?: string;
}

export const AppInput: FC<InputProps> = ({ 
    label, 
    leftIcon, 
    rightIcon, 
    containerClassName, 
    className, 
    value, 
    secureTextEntry = false, 
    onBlur,
    onFocus,
    onChangeText,
    mask,
    error,
    isError = !!error,
    isDisabled,
    ...rest 
}) => {
    const { handleBlur, handleFocus, handlePasswordToggle, handleWrapperPress, showPassword } = useAppInputViewModel({
        value, 
        isError, 
        secureTextEntry, 
        onBlur,
        onFocus,
        onChangeText,
        isDisabled,
        mask,
        error,
    })

    const styles = inputVariants({})

    return(
        <View className={styles.container({ className: containerClassName})}>
            <Text className={styles.label()}>Label</Text>

            <Pressable className={styles.wrapper()}>
                <Ionicons name='person' size={22}/>

                <TextInput className={styles.input()} {...rest}/>

                <TouchableOpacity>
                    <Ionicons name='eye-off-outline' size={22}/>
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}