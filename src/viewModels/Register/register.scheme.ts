import * as yup from 'yup'

export const registerScheme = yup.object({
    name: yup.string().required("Name is missing").min(4, "Invalid name"),
    email: yup.string().email("Email is invalid").required("Email is missing"),
    password: yup.string().required("Password is missing").min(6, "Password must be at least over 6 chars"),
    confirmPassword: yup.string().required("Password is missing").oneOf([yup.ref("password")], "Passwords don't match"),
    phone: yup.string().required("Phone number is missing").matches(/^\d{9}$/, "Invalid number")
})

export type RegisterFormData = yup.InferType<typeof registerScheme>