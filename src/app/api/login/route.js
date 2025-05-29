import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const req = await request.json()
        const data = {
            success: true
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (req.username != "hot@hotmail.com" || req.password !== "12345") {
            throw new Error("Gagal log in, mohon coba lagi nanti atau silakan log in dengan metode yang lain")
        }
    
        return Response.json(data)
        
    } catch (error) {
        const err = {error: 404, message: error.message}
        const res = new Response(JSON.stringify(err), {
            status: 404
        })
        return res
    }
        
        
}