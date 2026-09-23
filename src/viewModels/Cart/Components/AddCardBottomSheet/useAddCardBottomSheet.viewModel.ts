import { useCreateCreditCardMutation } from "@/shared/queries/creditCards/useCreateCreditCardMutation"
import { useForm } from "react-hook-form"
import { CreditCardFormData, creditCardSchema } from "./credit-card.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { useRef, useState } from "react"

const formatDate = (dateString: string, setError: (message: string) => void): string => {
    const [month, year] = dateString.split("/").map(Number)

    if(month < 1 || month > 12){
        setError("Invalid month")
        throw new Error("Invalid month")
    }

    if(year < 0 || month > 99){
        setError("Invalid year")
        throw new Error("Invalid year")
    }
    
    const fullYear = 2000 + year;

    const expirationDate = new Date(fullYear, month, 0).toISOString().split("T")[0]
    
    return expirationDate
}

export type FocusedFieldType = "number" | "name" | "expiry" | "cvv" | null

export const useAddCardBottomSheetViewModel = () => {
    const blurTimeoutRef = useRef<NodeJS.Timeout | null | number>(null)

    const createCreditCardMutation = useCreateCreditCardMutation()

    const [focusedField, setFocusedField] = useState<FocusedFieldType | null>(null)

    const { close: closeBottomSheet } = useBottomSheetStore()

    const { control, handleSubmit, reset, watch, clearErrors, setError } = useForm<CreditCardFormData>({
        resolver: yupResolver(creditCardSchema),
        defaultValues: {
            titularName: "",
            expirationDate: "",
            CVV: "",
            number: "",
        }
    })

    const handleCreateCreditCard = handleSubmit(async ({ CVV, expirationDate, number }) => {

        const expDate = formatDate(expirationDate, (message) => setError("expirationDate", { message }))

        const noSpaceNumber = number.replace(/\s/g, "")

        await createCreditCardMutation.mutateAsync({
            CVV: Number(CVV),
            expirationDate: expDate,
            number: noSpaceNumber
        })

        closeBottomSheet()
    })

    const expirationDateMask = (value: string) => {
        const cleaned = value.replace(/\D/g, "")

        if(cleaned.length < 2) return cleaned

        const month = cleaned.slice(0, 2);
        const year = cleaned.slice(2, 4);

        if(year.length) return `${month}/${year}`

        return month
    }

    const cardNumberMask = (value: string) => {
        const cleaned = value.replace(/\D/g, "")

        return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ").trim()

    }

    const handleFieldFocus = (field: FocusedFieldType) => {
        if(blurTimeoutRef.current){
            clearTimeout(blurTimeoutRef.current)
        }

        setFocusedField(field)
    }

    const handleFieldBlur = () => {
        blurTimeoutRef.current = setTimeout(() => setFocusedField(null), 50)
    }

    const isFlipped = focusedField === 'cvv'

    const watchedValues = watch()

    return{
        handleCreateCreditCard,
        control,
        expirationDateMask,
        cardNumberMask,
        isFlipped,
        handleFieldBlur,
        handleFieldFocus,
        focusedField,
        cardData: {
            number: watchedValues.number,
            name: watchedValues.number,
            expiry: watchedValues.expirationDate,
            CVV: watchedValues.CVV,
        }
    }
}