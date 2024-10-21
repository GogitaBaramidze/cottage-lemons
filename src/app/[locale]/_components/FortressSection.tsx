import Image from 'next/image'
import img1 from '@images/fortress/Fortress1.jpg'
import img2 from '@images/fortress/Fortress2.jpg'
import img3 from '@images/fortress/Fortress3.png'
import img4 from '@images/fortress/Fortress4.jpg'

export default function FortressSection() {
    return (
        <section className="w-full px-4 py-12">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                    Our Cottage near Gonio Fortress
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Nestled close to the historic Gonio Fortress, our cottages offer a unique blend
                    of ancient history and modern comfort. Explore the rich past and relax in our
                    tranquil surroundings.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[img1, img2, img3, img4].map((img, index) => (
                    <div
                        key={index}
                        className="relative h-[200px] md:w-full md:h-full md:aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <Image
                            src={img}
                            alt={`Fortress Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <button className="inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-500">
                    View More
                </button>
            </div>
        </section>
    )
}
