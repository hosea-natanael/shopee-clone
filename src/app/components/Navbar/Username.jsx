"use client"
import { hasCookie } from "cookies-next/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Username() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const isToken = hasCookie("token")
        if (isToken) {
            setLoggedIn(true)
        }
    }, [])

    return (
        <span className="flex justify-center items-center gap-2 h-full">
            { loggedIn ? (
            <>
                <img src="profile-picture" alt="" />
                <p>username</p>
            </>
            ) : (
            <>
                <Link className="font-semibold" href={"/register"}>Daftar</Link>
                <Link className="font-semibold border-l border-red-400 px-2" href={"/login"}>Log in</Link>
            </>
            )}
        </span>
    )
}