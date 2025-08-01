import Link from "next/link";
import Shortcut from "@/app/components/Shortcut";
import FlashSaleCountdown from "@/app/components/Flashsale/FlashSaleCountdown";
import FlashSaleCarousel from "@/app/components/Flashsale/FlashSaleCarousel";
import KategoriCarousel from "@/app/components/Kategori/KategoriCarousel";
import ProdukTerlarisCarousel from "@/app/components/ProdukTerlaris/ProdukTerlarisCarousel";
import ProdukRekomendasi from "@/app/components/ProdukRekomendasi/ProdukRekomendasi";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar/Navbar";

export const metadata = {
  title: "Shopee Indonesia | Situs Belanja Online Terlengkap & Terpercaya",
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {

  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="md:w-5/6">

          <div className="flex gap-1 place-content-center mt-7">
            <Link href={"/banner-1"}>
              <img className="rounded-sm" src="/banner_1.png" alt="banner1" /> 
            </Link> 
            <div className="flex flex-col gap-1">
              <Link href={"/banner-2"}>
                <img className="rounded-sm" src="/banner_2.png" alt="" />
              </Link>
              <Link href={"/banner-3"}>
                <img className="rounded-sm" src="/banner_3.png" alt="" />
              </Link>
            </div>
          </div>

          <div className="flex gap-6 mx-5 mt-6 mb-3">
            <Shortcut imgSrc={"shortcut/pilih_lokal.png"} href={"/pilih-lokal"} text={"Shopee Pilih Lokal"}/>
            <Shortcut imgSrc={"shortcut/shopee_mall.png"} href={"/shopee-mall"} text={"Shopee Mall"}/>
            <Shortcut imgSrc={"shortcut/pulsa.png"} href={"/pulsa"} text={"Pulsa, Tagihan, dan Tiket"}/>
            <Shortcut imgSrc={"shortcut/infashion.png"} href={"/infashion"} text={"InFashion"}/>
            <Shortcut imgSrc={"shortcut/shopee_supermarket.png"} href={"/shopee-supermarket"} text={"Shopee Supermarket"}/>
            <Shortcut imgSrc={"shortcut/dikelola_shopee.png"} href={"/dikelola-shopee"} text={"Dikelola Shopee"}/>
            <Shortcut imgSrc={"shortcut/termurah_shopee.png"} href={"/termurah-shopee"} text={"Termurah di Shopee"}/>
            <Shortcut imgSrc={"shortcut/gratis_voucher.png"} href={"/gratis-voucher"} text={"Gratis Ongkir dan Voucher"}/>
            <Shortcut imgSrc={"shortcut/shopee_barokah.png"} href={"/shopee-barokah"} text={"Shopee Barokah"}/>
            <Shortcut imgSrc={"shortcut/semua_promo.png"} href={"/semua-promo"} text={"Semua Promo"}/>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="md:w-5/6">
          <div className="mt-6 bg-white rounded-sm">

            <div className="p-5">
              <h1 className="font-medium text-gray-500">KATEGORI</h1>
            </div>
            <div>
              <KategoriCarousel/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="md:w-5/6">
          <div className="mt-6 bg-white rounded-sm">

            <div className="flex justify-between">

              <div className="flex items-center pt-5 pl-5">
                <img className="h-7 translate-y-[2px]" src="flash-sale.png" alt="flash-sale" />
                <FlashSaleCountdown/>
              </div>

              <Link href={"wow.com"} className="flex items-center pt-5 pr-5">
                <p className="text-sm text-primary">Lihat Semua</p>
                <div className="size-[.6rem] ml-1 fill-primary">
                  <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                </div>
              </Link>

            </div>

            <div className="flex">
              <FlashSaleCarousel/>
            </div>

          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="md:w-5/6">
          <div className="mt-6 bg-white rounded-sm">

            <div className="flex justify-between">
              <div className="flex items-center pt-5 pl-5">
                <p className="text-primary font-medium">PRODUK TERLARIS</p>
              </div>

              <Link href={"wow.com"} className="flex items-center pt-5 pr-5">
                <p className="text-sm text-primary">Lihat Semua</p>
                <div className="size-[.6rem] ml-1 fill-primary">
                  <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                </div>
              </Link>
            </div>

            <div className="w-full h-[1px] bg-gray-100 mt-4"></div>

            <div className="flex">
              <ProdukTerlarisCarousel/>
            </div>

          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="md:w-5/6">
          <div className="mt-6 bg-white rounded-sm">

            <Link href={"rekomendasi"} className="flex place-content-center border-b-4 border-primary">
              <div className="flex items-center p-3">
                <p className="text-primary text-lg">REKOMENDASI</p>
              </div>
            </Link>


            <ProdukRekomendasi/>
          </div>
        </div>
      </div>
      <div className="bg-primary w-full h-1 mt-10"></div>
      <Footer/>
    </>
  )
}
