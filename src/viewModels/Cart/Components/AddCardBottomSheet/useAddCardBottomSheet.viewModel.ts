import { useCreateCreditCardMutation } from "@/shared/queries/creditCards/useCreateCreditCardMutation"
import { useForm } from "react-hook-form"
import { CreditCardFormData, creditCardSchema } from "./credit-card.schema"
import { yupResolver } from "@hookform/resolvers/yup"

export const useAddCardBottomSheetViewModel = () => {
    const createCreditCardMutation = useCreateCreditCardMutation()

    const { control, handleSubmit, reset, watch, clearErrors } = useForm<CreditCardFormData>({
        resolver: yupResolver(creditCardSchema),
        defaultValues: {
            titularName: "",
            expirationDate: "",
            CVV: "",
            number: "",
        }
    })

    const handleCreateCreditCard = () => {
        createCreditCardMutation.mutate({
            CVV: 0,
            expirationDate: "",
            number: ""
        })
    }

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

    return{
        handleCreateCreditCard,
        control,
        expirationDateMask,
        cardNumberMask
    }
}