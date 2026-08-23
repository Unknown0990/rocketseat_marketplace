import { Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form";
import { AppInput, InputProps } from "../AppInput";

interface InputControllerProps<T extends FieldValues> extends Omit<InputProps, "value" | "onChangeText" | "error"> {
    control: Control<T>;
    name: Path<T>;
    errors?: FieldErrors<T>;
    render: () => void;
}

export const InputController = <T extends FieldValues> ({
    name,
    control,
    errors,
    ...rest
}: InputControllerProps<T>) => {
    return(
        <Controller
            control={control}
            name={name}
            render={({ field: { onBlur, onChange, value }, fieldState: { error }, formState: { isSubmitting } }) => 
                <AppInput 
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={error?.message}
                    isDisabled={isSubmitting || rest.isDisabled}
                    {...rest}
                />
            }
        />
    )
}