import { tv, type VariantProps } from "tailwind-variants";

export enum AppButtonVariantEnum{
    FILLED = "fill",
    OUTLINED = "outline"
}

export const appButtonVariants = tv({
    slots: {
        base: "w-full h-[48px] rounded-[10px] border px-4 flex-row items-center",
        text: "font-semibold text-base",
        icon: ""
    },
    variants: {
        hasIcon: {
            true: {
                base: "justify-between",
            },
            false: {
                base: "justify-center",
            },
        },
        isLoading: {
            true: {
                base: "opacity-60",
            },
        },
        isDisabled: {
            true: {
                base: "opacity-50"
            },
        },
        variant: {
            fill: {
                base: "bg-purple-base border-purple-base",
                text: "text-white",
            },
            outline: {
                base: "bg-transparent border-purple-base",
                text: "text-purple-base"
            }
        }
    },
    defaultVariants: {
        hasIcon: false,
        isLoading: false,
        isDisabled: false,
        variant: AppButtonVariantEnum.FILLED,
    },
})

export type AppButtonVariantProps = VariantProps<typeof appButtonVariants>