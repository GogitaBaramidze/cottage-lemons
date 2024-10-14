import React from 'react'
import Image from 'next/image'
import img from '../../../public/imgs/ctg.jpg'
import CottageImages from './_components/CottageImages'
import ReviewCarousel from './_components/Reviews'
import ImageGallery from './_components/ImageGallery'

export default function page() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between pb-10">
            <section className="relative h-screen w-full">
                <Image
                    src={img}
                    alt="Beautiful nature surrounding our cottage"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 p-4 text-white">
                    <h1 className="mb-4 text-center text-4xl font-bold md:text-6xl">
                        Welcome to Our Cozy Cottage
                    </h1>
                    <p className="mb-8 text-center text-xl md:text-2xl">
                        Experience nature's beauty in comfort
                    </p>
                    <button className="rounded-full bg-white px-6 py-2 text-lg text-black transition duration-300 hover:bg-opacity-90">
                        Book Now
                    </button>
                </div>
            </section>
            <CottageImages />
            <ReviewCarousel />
            <ImageGallery/>
        </main>
    )
}
