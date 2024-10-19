import CottageImages from './_components/CottageImages'
import ReviewCarousel from './_components/Reviews'
import ImageGallery from './_components/ImageGallery'
import Cover from './_components/Cover'

export default function page() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between pb-10">
            <Cover />
            <CottageImages />
            <ReviewCarousel />
            <ImageGallery />
        </main>
    )
}
