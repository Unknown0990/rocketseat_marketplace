import * as yup from 'yup'

export const loginScheme = yup.object({
    email: yup.string().email("Email is invalid").required("Email is missing"),
    password: yup.string().required("Password is missing").min(6, "Password must be at least over 6 chars"),
})

export type LoginFormData = yup.InferType<typeof loginScheme>