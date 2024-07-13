import type { Metadata } from 'next'

import './globals.css'
import i18nConfig from '@/libs/i18n/i18nConfig'
import { ReactNode } from 'react'
import initTranslations from '@/libs/i18n/i18n'
import { dir } from 'i18next'
import TranslationsProvider from '@/libs/i18n/TranslationsProvider'
import { Noto_Sans_Georgian } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const georgian = Noto_Sans_Georgian({ subsets: ['latin'] })
const garamod = Noto_Sans_Georgian({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}
export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: ReactNode
    params: { locale: string }
}) {
    const i18nNamespaces = ['home']
    const { resources } = await initTranslations(locale, i18nNamespaces)

    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={`${georgian.className} ${garamod.className}`}>
                <TranslationsProvider
                    namespaces={i18nNamespaces}
                    locale={locale}
                    resources={resources}
                >
                    {children}
                    <Footer />
                </TranslationsProvider>
            </body>
        </html>
    )
}
