'use client'
import { useTranslation } from 'react-i18next'
import Cover from './_components/Cover'
import CottageView from './_components/CottageView'

export default function Home() {
    const { t } = useTranslation()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-10">
            <Cover />
            <CottageView />
        </main>
    )
}
