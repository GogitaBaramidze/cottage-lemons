import Image from 'next/image'
import img from '@images/Lemons.jpg'
import img2 from '@images/nature/Gonio,_Batumi,_Georgia.jpg'
import img3 from '@images/GonioBeach2.jpg'

export default function NatureSection() {
    return (
        <section className="w-full bg-gray-100 px-4 py-12">
            <div>
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                        Experience the Beauty of Nature and the Sea
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        Our cottage is surrounded by stunning natural landscapes and the serene sea,
                        offering a perfect escape into nature's tranquility.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                    <div className="relative w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:h-[600px] md:w-2/5">
                        <Image
                            src={img2}
                            alt="Main Nature and Sea Image"
                            fill
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-4 md:w-2/5">
                        {[img, img3].map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:aspect-[3/2] md:h-72"
                            >
                                <Image
                                    src={image}
                                    alt={`Nature and Sea Image ${index + 1}`}
                                    layout="responsive" // Use responsive for better mobile handling
                                    width={300} // Set a width
                                    height={300} // Set a height
                                    className="rounded-lg object-cover object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button className="inline-block rounded-md bg-blue-600 px-5 py-2 text-base font-semibold text-white shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-500">
                        View More
                    </button>
                </div>
            </div>
        </section>
    )
}
