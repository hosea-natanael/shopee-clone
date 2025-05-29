import { NextResponse } from "next/server"

export async function GET(request) {
    const data = { }
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0)
    tomorrow.setMinutes(0)
    tomorrow.setSeconds(0)
    tomorrow.setMilliseconds(0)
    data.time = tomorrow

    return NextResponse.json(data)
}
