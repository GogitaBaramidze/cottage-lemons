import Image from 'next/image'
import Link from 'next/link'
import img from '@images/cottage/Cottage1.jpg'

export default function CoverSection() {
    return (
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
                    Welcome to Cottage Lemons
                </h1>
                <p className="mb-8 text-center text-xl md:text-2xl">
                    Experience nature's beauty in comfort
                </p>
                <Link
                    target="_blank"
                    href="https://www.booking.com/hotel/ge/cottage-lemons-in-gonio.en-gb.html?aid=356980&label=gog235jc-1DCAsoUkIXY290dGFnZS1sZW1vbnMtaW4tZ29uaW9IM1gDaFKIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Ap2mubgGwAIB0gIkOTU2MTM4ZmEtZDU0OS00ZGM1LWI3ODItOTVlYTIyYmM4NjU12AIE4AIB&sid=80e9e0746b7f1777949c6b261116c670&dist=0&keep_landing=1&sb_price_type=total&type=total&"
                >
                    <button className="rounded-full bg-white px-6 py-2 text-lg text-black transition duration-300 hover:bg-opacity-90">
                        Book Now
                    </button>
                </Link>
            </div>
        </section>
    )
}
