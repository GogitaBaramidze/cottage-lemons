import React from 'react'
import Image from 'next/image'
import img1 from '../../../../public/imgs/fortress/Fortress1.jpg'
import img2 from '../../../../public/imgs/fortress/Fortress2.jpg'
import img3 from '../../../../public/imgs/fortress/Fortress3.png'
import img4 from '../../../../public/imgs/fortress/Fortress4.jpg'

export default function CottageImages() {
    return (
        <section className="my-16 w-full px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
                Discover Our Beautiful Garden
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <div className="relative aspect-square overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <Image
                        src={img1}
                        alt="Garden Image 1"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-md shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <Image
                        src={img2}
                        alt="Garden Image 2"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <div className="relative col-span-2 aspect-[3/2] overflow-hidden rounded-md shadow-lg transition-all duration-300 hover:shadow-2xl md:col-span-1">
                    <Image
                        src={img3}
                        alt="Garden Image 3"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <Image
                        src={img4}
                        alt="Garden Image 4"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
            </div>
        </section>
    )
}
