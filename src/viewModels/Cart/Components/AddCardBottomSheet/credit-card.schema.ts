import * as yup from "yup"

export const creditCardSchema = yup.object().shape({
    titularName: yup
        .string()
        .required("Name is required")
        .min(2, "Name is invalid"),
    number: yup
        .string()
        .required("Card number is required")
        .test("card-number", "Card number is invalid", (value) => {
            if(!value) return false

            const cleaned = value.replace(/\s/g, "")

            return /^\d{16}$/.test(cleaned)
        }),
    expirationDate: yup
        .string()
        .required("expiration date is required")
        .matches(/^\d{2}\/\d{2}$/, "expiration date format should be is invalid MM/AA"),
    CVV: yup
        .string()
        .required("CVV is required")
        .matches(/^\d{3}$/, "CVV is invalid")
})

export type CreditCardFormData = yup.InferType<typeof creditCardSchema>