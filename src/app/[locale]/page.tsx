import CottageImages from './_components/CottageImages'
import ReviewCarousel from './_components/ReviewsSection'
import Cover from './_components/CoverSection'
import FortressSection from './_components/FortressSection'
import NatureSection from './_components/NatureSection'

export default function page() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between pb-10">
            <Cover />
            <CottageImages />
            <ReviewCarousel />
            <NatureSection />
            <FortressSection />
        </main>
    )
}
