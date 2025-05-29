export async function GET(request) {
    const res = [
        {
            href: "baju",
            text: "Baju Gamis Kekinian",
        },
        {
            href: "comanier",
            text: "Comanier Sandal Store",
        },
        {
            href: "tas-sevine",
            text: "Tas Sevine",
        },
        {
            href: "baju-tren",
            text: "Baju Tren",
        },
        {
            href: "promo-cuci",
            text: "Promo Cuci Gudang HP Murah",
        },
    ]

    return Response.json(res)
}