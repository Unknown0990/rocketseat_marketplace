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

    const { 
        handleBlur, 
        handleFocus,
        handlePasswordToggle,
        handleWrapperPress,
        showPassword,
        handleTextChange,
        isFocused,
        getIconColor
    } = useAppInputViewModel({
        value,
        isError: !!error,
        secureTextEntry,
        onBlur,
        onFocus,
        onChangeText,
        isDisabled,
        mask,
    })

    const styles = inputVariants({
        isFocused,
        isDisabled,
        isError: !!error
    })

    return(
        <View className={styles.container({ className: containerClassName})}>
            <Text className={styles.label()}>{label}</Text>

            <Pressable className={styles.wrapper()}>
                { leftIcon &&
                    <Ionicons
                        name={leftIcon}
                        size={22}
                        className="mr-3"
                        color={getIconColor()}
                    />
                }

                <TextInput
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={styles.input()} {...rest}
                    onChangeText={handleTextChange}
                    value={value}
                    secureTextEntry={showPassword}
                />

                { secureTextEntry &&
                    <TouchableOpacity
                        onPress={handlePasswordToggle}
                        activeOpacity={0.7}
                    >
                        <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22}/>
                    </TouchableOpacity>
                }
            </Pressable>

            {error &&
                <Text className={styles.error()}>
                    <Ionicons name='alert-circle-outline'/> {error}
                </Text>
            }
        </View>
    )
}