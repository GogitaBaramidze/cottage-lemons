'use client'

import HotelRoom1 from '@images/cottage/Cottage1.jpg'
import HotelRoom3 from '@images/cottage/Cottage2.jpg'
import HotelRoom4 from '@images/cottage/Cottage3.jpg'
import HotelRoom5 from '@images/cottage/Cottage5.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { CardContent } from '@/components/ui/card'
import { useParams } from 'next/navigation'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export default function CottageImages() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale

    const data = [
        {
            img: HotelRoom3,
            alt: t('hotelImg'),
        },
        {
            img: HotelRoom1,
            alt: t('hotelImg'),
        },
        {
            img: HotelRoom4,
            alt: t('hotelImg'),
        },
        {
            img: HotelRoom5,
            alt: t('hotelImg'),
        },
    ]
    return (
        <section className="bg-letterC h-auto w-full py-16">
            <div className="mb-10 flex flex-col justify-center gap-6 px-10 md:flex-row md:gap-12">
                <h1
                    className={` ${locale === 'ka' ? 'text-center font-georgian text-4xl leading-relaxed md:text-start md:text-5xl md:leading-loose' : locale === 'en' ? 'font-canela text-5xl' : 'font-russian text-center text-5xl lg:text-6xl'} `}
                >
                    {t('exquisite')} <br /> {t('accommodations')}
                </h1>
                <div className="flex flex-col items-start gap-6 md:w-[400px]">
                    <p className="text-sm md:text-base">{t('hotelText')}</p>
                    <Link href="/hotel">
                        <button>{t('viewMore')}</button>
                    </Link>
                </div>
            </div>
            <PhotoProvider>
                <Carousel opts={{ loop: true }}>
                    <CarouselContent className="pr-16 md:pr-10 xl:pr-32">
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-2/3">
                                <CardContent className="flex items-center justify-center p-0">
                                    <PhotoView src={item.img.src}>
                                        <Image
                                            src={item.img}
                                            alt={item.alt}
                                            className="h-[300px] w-full cursor-pointer object-cover md:h-[440px] md:w-[800px]"
                                        />
                                    </PhotoView>
                                </CardContent>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </PhotoProvider>
        </section>
    )
}
