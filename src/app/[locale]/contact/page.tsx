import Contact from './_components/Contact'
import Header from './_components/Header'
import Location from './_components/Location'

export default async function page() {
    return (
        <main className="flex h-auto w-full flex-col gap-14 bg-gray-200 pt-40">
            <Header />
            <Contact />
            <Location />
        </main>
    )
}
