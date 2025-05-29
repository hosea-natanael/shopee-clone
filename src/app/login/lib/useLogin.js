import { setCookie } from "cookies-next/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function useLogin() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const router = useRouter()

    async function login(username, password) {
        setIsLoading(true)
        setError(null)

        const body = {username, password}
        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify(body)
        })
        const resp = await res.json()
        if (!res.ok) {
            setIsLoading(false)
            setError(resp)
            return
        }

        setData(resp)
        setCookie("token", "12345")
        router.push("/")
    }

    return {data, isLoading, error, login}
}