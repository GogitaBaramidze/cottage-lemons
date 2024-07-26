import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Cottage1 from '../../../../public/imgs/cottage/Cottage1.jpg'
import Cottage2 from '../../../../public/imgs/cottage/Cottage2.jpg'
import Cottage3 from '../../../../public/imgs/cottage/Cottage3.jpg'
import Cottage4 from '../../../../public/imgs/cottage/Cottage4.jpg'
import Cottage5 from '../../../../public/imgs/cottage/Cottage5.jpg'
import Cottage6 from '../../../../public/imgs/cottage/Cottage6.jpg'
import Cottage7 from '../../../../public/imgs/cottage/Cottage7.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { CardContent } from '@/components/ui/card'

export default function CottageView() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    const data = [
        {
            img: Cottage1,
            alt: t('hotelImg'),
        },
        {
            img: Cottage2,
            alt: t('hotelImg'),
        },
        {
            img: Cottage3,
            alt: t('hotelImg'),
        },
        {
            img: Cottage4,
            alt: t('hotelImg'),
        },
        {
            img: Cottage5,
            alt: t('hotelImg'),
        },
        {
            img: Cottage6,
            alt: t('hotelImg'),
        },
        {
            img: Cottage7,
            alt: t('hotelImg'),
        },
    ]
    return (
        <section className="h-auto w-full">
            <Carousel opts={{ loop: true }}>
                <CarouselContent className=" ">
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="">
                            <CardContent className="flex h-full w-full items-center justify-center p-0">
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    className="h-[600px] w-auto object-cover"
                                />
                            </CardContent>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    )
}
