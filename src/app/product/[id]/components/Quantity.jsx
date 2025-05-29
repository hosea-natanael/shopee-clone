"use client"

import { useState } from "react"

export default function Quantity({maxQty}) {
    const [qty, setQty] = useState(1)

    function increment() {
        if (!maxQty || qty < maxQty)
            setQty(qty + 1)
    }

    function decrement() {
        if (qty > 1)
            setQty(qty - 1)
    }

    return (

        <div className="flex text-sm p-4 items-center">
            <p className="w-28 text-gray-500">Kuantitas</p>
            <button className="p-3 border border-r-transparent" onClick={decrement}>
                <div className="size-3">
                    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg>
                </div>
            </button>
            <div className="py-2 px-5 border">
                <p>{qty}</p>
            </div>
            <button className="p-3 border border-l-transparent" onClick={increment}>
                <div className="size-3">
                    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg>
                </div>
            </button>
            {maxQty && 
            <p className="text-gray-500 ml-5">tersisa {maxQty} buah</p>
            }
        </div>
    )
}