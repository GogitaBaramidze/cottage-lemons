'use client'

import { useTranslation } from 'react-i18next'

export default function Location() {
    const { t } = useTranslation()
    return (
        <section className="h-auto w-full">
            <h2 className="pb-10 text-center text-xl text-white">{t('directions')}</h2>
            <div className="relative flex h-full w-full flex-row">
                <iframe
                    className="bg-black opacity-70"
                    src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d95518.5567711751!2d41.4929949!3d41.5702207!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x406791000e38f16d%3A0xe3e1411606d192a9!2sMatata%2C%207%20Motsikuli%201st%20lane%2C%20Gonio!3m2!1d41.570250099999996!2d41.5753957!5e0!3m2!1sru!2sge!4v1721986479020!5m2!1sru!2sge"
                    width="100%"
                    height="300px"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    )
}
