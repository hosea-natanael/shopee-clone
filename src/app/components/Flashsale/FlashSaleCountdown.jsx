"use client"
import { useEffect, useMemo, useState } from "react"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function FlashSaleCountdown() {
    const [timeLeft, setTimeLeft] = useState(0)
    const link = process.env.NEXT_PUBLIC_HOST_URL + "/api/flash-sale/countdown"
    console.log(link)
    const {data, error, isLoading } = useSWR(link, fetcher)

    useEffect(()=> {
        const i = setInterval(() => {
            const time = new Date(data?.time)
            const now = Date.now()
            const left = time.valueOf() - now.valueOf()
            setTimeLeft(left)
        }, 1000)

        return () => clearInterval(i)
    }, [data])

    const second = useMemo(() => {
        return Math.floor((timeLeft / 1000) % 60)
    })
    const minute = useMemo(() => {
        return Math.floor((timeLeft / 1000 / 60) % 60)
    })
    const hour = useMemo(() => {
        return Math.floor((timeLeft / 1000 / 60 / 60) % 24)
    })

    const hour1 = useMemo(() => {
        return Math.floor(hour / 10)
    })
    const hour2 = useMemo(() => {
        return Math.floor(hour % 10)
    })
    const minute1 = useMemo(() => {
        return Math.floor(minute / 10)
    })
    const minute2 = useMemo(() => {
        return Math.floor(minute % 10)
    })
    const second1 = useMemo(() => {
        return Math.floor(second / 10)
    })
    const second2 = useMemo(() => {
        return Math.floor(second % 10)
    })
    useEffect(() => {
        const el = document.getElementById("hour1")
        el.style.transform = `translateY(-${9-hour1}0%)`
    }, [hour1])
    useEffect(() => {
        const el = document.getElementById("hour2")
        el.style.transform = `translateY(-${9-hour2}0%)`
    }, [hour2])
    useEffect(() => {
        const el = document.getElementById("minute1")
        el.style.transform = `translateY(-${9-minute1}0%)`
    }, [minute1])
    useEffect(() => {
        const el = document.getElementById("minute2")
        el.style.transform = `translateY(-${9-minute2}0%)`
    }, [minute2])
    useEffect(() => {
        const el = document.getElementById("second1")
        el.style.transform = `translateY(-${9-second1}0%)`
    }, [second1])
    useEffect(() => {
        const el = document.getElementById("second2")
        el.style.transform = `translateY(-${9-second2}0%)`
    }, [second2])

    return (
        <div className="flex font-extrabold text-white">
            <div className="ml-2 w-3 h-6 bg-black rounded-l-sm overflow-hidden">
                <div id="hour1" className={`transition-transform duration-[970ms] flex flex-col justify-start items-center -translate-y-[90%]`}>
                    <div> <p>9</p> </div>
                    <div> <p>8</p> </div>
                    <div> <p>7</p> </div>
                    <div> <p>6</p> </div>
                    <div> <p>5</p> </div>
                    <div> <p>4</p> </div>
                    <div> <p>3</p> </div>
                    <div> <p>2</p> </div>
                    <div> <p>1</p> </div>
                    <div> <p>0</p> </div>
                </div>
            </div>
            <div className=" w-3 h-6 bg-black rounded-r-sm overflow-hidden">
                <div id="hour2" className={`transition-transform duration-[970ms] flex flex-col justify-start items-center -translate-y-[90%]`}>
                    <div> <p>9</p> </div>
                    <div> <p>8</p> </div>
                    <div> <p>7</p> </div>
                    <div> <p>6</p> </div>
                    <div> <p>5</p> </div>
                    <div> <p>4</p> </div>
                    <div> <p>3</p> </div>
                    <div> <p>2</p> </div>
                    <div> <p>1</p> </div>
                    <div> <p>0</p> </div>
                </div>
            </div>
            <div className=" ml-1 w-3 h-6 bg-black rounded-l-sm overflow-hidden">
                <div id="minute1" className={`transition-transform duration-[970ms] flex flex-col justify-start items-center -translate-y-[90%]`}>
                    <div> <p>9</p> </div>
                    <div> <p>8</p> </div>
                    <div> <p>7</p> </div>
                    <div> <p>6</p> </div>
                    <div> <p>5</p> </div>
                    <div> <p>4</p> </div>
                    <div> <p>3</p> </div>
                    <div> <p>2</p> </div>
                    <div> <p>1</p> </div>
                    <div> <p>0</p> </div>
                </div>
            </div>
            <div className=" w-3 h-6 bg-black rounded-r-sm overflow-hidden">
                <div id="minute2" className={`transition-transform duration-[970ms] flex flex-col justify-start items-center -translate-y-[90%]`}>
                    <div> <p>9</p> </div>
                    <div> <p>8</p> </div>
                    <div> <p>7</p> </div>
                    <div> <p>6</p> </div>
                    <div> <p>5</p> </div>
                    <div> <p>4</p> </div>
                    <div> <p>3</p> </div>
                    <div> <p>2</p> </div>
                    <div> <p>1</p> </div>
                    <div> <p>0</p> </div>
                </div>
            </div>
            <div className=" ml-1 w-3 h-6 bg-black rounded-l-sm overflow-hidden">
                <div id="second1" className={`transition-transform duration-[970ms] flex flex-col justify-start items-center -translate-y-[90%]`}>
                    <div> <p>9</p> </div>
                    <div> <p>8</p> </div>
                    <div> <p>7</p> </div>
                    <div> <p>6</p> </div>
                    <div> <p>5</p> </div>
                    <div> <p>4</p> </div>
                    <div> <p>3</p> </div>
                    <div> <p>2</p> </div>
                    <div> <p>1</p> </div>
                    <div> <p>0</p> </div>
                </div>
            </div>
            <div className=" w-3 h-6 bg-black rounded-r-sm overflow-hidden">
                <div id="second2" className={`transition-transform duration-[970ms] flex flex-col justify-start items-center -translate-y-[90%]`}>
                    <div> <p>9</p> </div>
                    <div> <p>8</p> </div>
                    <div> <p>7</p> </div>
                    <div> <p>6</p> </div>
                    <div> <p>5</p> </div>
                    <div> <p>4</p> </div>
                    <div> <p>3</p> </div>
                    <div> <p>2</p> </div>
                    <div> <p>1</p> </div>
                    <div> <p>0</p> </div>
                </div>
            </div>
        </div>
    )
}