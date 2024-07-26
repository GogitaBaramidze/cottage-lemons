import { useParams } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Cover() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <section className="bg-1/2 h-screen w-full bg-main-cover bg-cover bg-center bg-no-repeat">
            <div className="relative z-10 flex h-full items-center justify-start pl-20 font-bold text-[#eaff4d]">
                <h1
                    className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-right text-3xl tracking-[20px] md:text-6xl`}
                >
                    {t('cottageLemons')}
                    <br /> in gonio
                </h1>
            </div>
        </section>
    )
}
