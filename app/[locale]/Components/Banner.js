import { useTranslations } from 'next-intl'
import React from 'react'

const Banner = () => {
    const t = useTranslations("Index");
  return (
    <div className="relative rounded-3xl overflow-hidden bg-cover bg-no-repeat p-12 text-center h-96 mt-8 bg-[url('/banner-image.png')]"
    >
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden">
      <div className="flex h-full items-center px-5 md:px-12">
        <div className="text-white text-left">
          <h1 className='mb-2 font-normal text-6xl text-[#FCCC00]'>{t("currencySign")}</h1>
          <h2 className="mb-2 font-normal text-6xl text-white">{t("welcome")}</h2>
          <h4 className="mb-4 text-base text-white">{t("receiveBouns")}</h4>
          <button className=" bg-[#0D353A] text-white rounded-xl font-normal  btn-primary p-3 uppercase text-base flex items-center justify-center gap-1"> {t("register")}</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner
