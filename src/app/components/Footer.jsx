import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full flex justify-center items-start pt-14 bg-gray-100">
            <div className="flex flex-col shrink-0">
                <p className="text-xs font-semibold">Layanan Pelanggan</p>
                <div className="flex flex-col text-xs mt-6 gap-2.5">
                    <Link className="hover:text-primary" href={"/footer"}>Bantuan</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Metode Pembayaran</Link>
                    <Link className="hover:text-primary" href={"/footer"}>ShopeePay</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Koin Shopee</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Lacak Pesanan Pembeli</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Lacak Pengiriman Penjual</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Gratis Ongkir</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Pengembalian Barang & Dana</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Garans Shopee</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Hubungi Kami</Link>
                </div>
            </div>
            <div className="flex flex-col ml-20 shrink-0">
                <p className="text-xs font-semibold">Jelajahi Shopee</p>
                <div className="flex flex-col text-xs mt-6 gap-2.5">
                    <Link className="hover:text-primary" href={"/footer"}>Tentang Kami</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Karir</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Kebijakan Shopee</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Kebijakan Privasi</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Blog</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Shopee Mall</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Seller Centre</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Flash Sale</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Kontak Media</Link>
                    <Link className="hover:text-primary" href={"/footer"}>Shopee Affiliate</Link>
                </div>
            </div>
            <div className="flex flex-col ml-60 shrink-0">
                <p className="text-xs font-semibold">Ikuti Kami</p>
                <div className="flex flex-col text-xs mt-6 gap-2.5">
                    <Link className="flex gap-2 hover:text-primary" href={"/facebook"}>
                        <img src="/ikuti-kami/facebook.png" alt="" />
                        <p>Facebook</p>
                    </Link>
                    <Link className="flex gap-2 hover:text-primary" href={"/instagram"}>
                        <img src="/ikuti-kami/instagram.png" alt="" />
                        <p>Instagram</p>
                    </Link>
                    <Link className="flex gap-2 hover:text-primary" href={"/twitter"}>
                        <img src="/ikuti-kami/twitter.png" alt="" />
                        <p>Twitter</p>
                    </Link>
                    <Link className="flex gap-2 hover:text-primary" href={"/linkedin"}>
                        <img src="/ikuti-kami/linkedin.png" alt="" />
                        <p>LinkedIn</p>
                    </Link>
                    <Link className="flex gap-2 hover:text-primary" href={"/kampus"}>
                        <img src="/ikuti-kami/kampus.png" alt="" />
                        <p>Kampus Shopee</p>
                    </Link>
                </div>
                <p className="text-xs font-semibold mt-5">Keamanan</p>
                <img className="mt-6" src="/keamanan.png" alt="" />
            </div>
            <div className="flex flex-col ml-20">
                <p className="text-xs font-semibold">Download Aplikasi Shopee</p>
                <div className="flex mt-6 gap-4">
                    <div className="size-20">
                        <img src="download-qr.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="bg-white py-1 px-4 w-20">
                            <img src="app-store.png" alt="" />
                        </div>
                        <div className="bg-white py-1 px-4 w-20">
                            <img src="google-play.png" alt="" />
                        </div>
                        <div className="bg-white py-1 px-4 w-20">
                            <img src="app-gallery.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}