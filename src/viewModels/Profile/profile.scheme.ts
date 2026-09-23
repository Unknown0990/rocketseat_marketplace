import * as yup from 'yup'

export const profileScheme = yup.object().shape({
    name: yup.string().required("Name is mandatory").min(4, "Invalid name"),
    email: yup.string().email("Email is invalid").required("Email is missing"),
    password: yup.string().optional(),
    newPassword: yup.string().optional(),
    phone: yup.string().required("Phone number is missing").matches(/^\d{9}$/, "Invalid number")
})

export type ProfileFormData = yup.InferType<typeof profileScheme>