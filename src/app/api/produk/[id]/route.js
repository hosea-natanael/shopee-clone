export async function GET(request, {params}){
    const { id } = await params
    const products = [
        {
            name: "BASRENG BUMBU MELIMPAH DAUN JERUK 500GR",
            images: [
                "/produk/1/1_1.webp",
                "/produk/1/1_2.webp",
                "/produk/1/1_3.webp",
                "/produk/1/1_4.webp",
                "/produk/1/1_5.webp",
            ],
            category: [{
                name: "Shopee",
                href: "/"
            }, {
                name: "Makanan & Minuman",
                href: "/category/makanan-minuman"
            }, {
                name: "Makanan Ringan",
                href: "/category/makanan-ringan"
            }, {
                name: "Keripik & Kerupuk",
                href: "/category/keripik-kerupuk"
            }],
            score: {
                stars: 4.6,
                amount: "5,4RB",
                sold: "10RB+",
            },
            price: {
                from: "Rp18.500",
                to: "Rp21.700",
                original: "Rp40.000",
                discountPercentage: "-55%"
            },
            delivery: {
                guaranteedDate: "Garansi tiba: 26 - 27 April",
                lateGuarenteed: "Dapatkan Voucher s/d Rp10.000 jika pesanan terlambat"
            },
            color: [
                { img: "/produk/1/1_1.webp", name: "PEDAS DAUN JERUK"},
                { img: "/produk/1/1_5.webp", name: "ORIGINAL DAUN JERUK"},
            ],
            size: [
                "200gr",
                "500gr"
            ],
            quantity: 6,
            favorite: "1,9RB",
        },
        {
            name: "A-KEMOLA Sandal Jelly Baim Wedges Wanita Sandal Kodok Dewasa Platform EVA Sepatu Baim Sendal Fuji",
            images: [
                "/produk/2/2_1.webp",
                "/produk/2/2_2.webp",
                "/produk/2/2_3.webp",
                "/produk/2/2_4.webp",
                "/produk/2/2_5.webp",
            ],
            category: [{
                name: "Shopee",
                href: "/"
            }, {
                name: "Sepatu Wanita",
                href: "/category/sepatu-wanita"
            }, {
                name: "Wedges",
                href: "/category/wedges"
            }],
            score: {
                stars: 4.7,
                amount: "6,1RB",
                sold: "10RB+",
            },
            price: {
                from: "Rp67.410",
                original: "Rp159.000",
            },
            delivery: {
                guaranteedDate: "Garansi tiba: 24 April",
                lateGuarenteed: "Dapatkan Voucher s/d Rp10.000 jika pesanan terlambat"
            },
            color: [
                { img: "/produk/2/2_4.webp", name: "Putih Rantai"},
                { img: "/produk/2/2_5.webp", name: "Putih Bintang"},
            ],
            size: [
                "35-36",
                "37-38",
                "30-40",
            ],
            quantity: 59687,
            favorite: "11,1RB",
        },
        {
            name: "Celana Pendek Olahraga Pria Wanita Running Gym Sport Kolor Volly Futsal Bulu Tangkis Jogging",
            images: [
                "/produk/3/3_1.webp",
                "/produk/3/3_2.webp",
                "/produk/3/3_3.webp",
                "/produk/3/3_4.webp",
                "/produk/3/3_5.webp",
            ],
            category: [{
                name: "Shopee",
                href: "/"
            }, {
                name: "Olahraga & Outdoor",
                href: "/category/olahraga-outdoor"
            }, {
                name: "Sepak Bola, Futsal, & Sepak Takraw",
                href: "/category/sepak-bola"
            }, {
                name: "Pakaian Sepak Bola, Futsal",
                href: "/category/pakaian-sepak-bola"
            }],
            score: {
                stars: 4.4,
                amount: "15,8RB",
                sold: "10RB+",
            },
            price: {
                from: "Rp8.500",
                to: "Rp9.800",
                original: "Rp10.250",
                discountPercentage: "-10%"
            },
            delivery: {
                guaranteedDate: "Garansi tiba: 25 - 26 April",
                lateGuarenteed: "Dapatkan Voucher s/d Rp10.000 jika pesanan terlambat"
            },
            color: [
                { img: "/produk/3/3_1.webp", name: "Hitam N1K"},
                { img: "/produk/3/3_2.webp", name: "Hitam YNX"},
                { img: "/produk/3/3_3.webp", name: "Hitam REB"},
                { img: "/produk/3/3_3.webp", name: "Hitam ADS"},
            ],
            size: [
                "M",
                "L",
                "XL",
            ],
            quantity: 328963,
            favorite: "5,3RB",
        }
    ]

    let response
    if (id == 1) {
        response = {product: products[0]}
    } else if (id == 2 || id == 3) {
        response = {product: products[1]}
    } else {
        response = {product: products[2]}
    }
    return Response.json(response)
}