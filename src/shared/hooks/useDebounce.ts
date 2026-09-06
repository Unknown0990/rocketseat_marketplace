import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timeoutID = setInterval(() => setDebouncedValue(value), delay)

        return () => clearInterval(timeoutID)
    }, [value, delay])

    return debouncedValue
}