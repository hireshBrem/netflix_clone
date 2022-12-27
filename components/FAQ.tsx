import React from 'react'

const FAQ = () => {
  return (
    <>
    <section className="mt-[600px] pt-32 pb-28 bg-black overflow-hidden">
        <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/faqs/gradient.svg" alt="" />
        <div className="relative z-10 container px-4 mx-auto text-white">
            <div className="md:max-w-4xl mx-auto">
            <p className="mb-7 text-sm text-center font-semibold uppercase tracking-px">Have any questions?</p>
            <h2 className="mb-16 text-3xl md:text-5xl xl:text-6xl text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2>
            <div className="mb-11 flex flex-wrap -m-1">
                <div className="w-full p-1">
                <a href="#">
                    <div className="py-7 px-8 bg-zinc-800 border-2 border-gray-200 hover:border-red-600 rounded-2xl shadow-10xl">
                    <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1 p-2">
                            <h3 className="mb-4 text-lg font-semibold leading-normal">What is Netflix?</h3>
                            <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.</p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
                <div className="w-full p-1">
                <a href="#">
                    <div className="py-7 px-8 bg-zinc-800 border border-gray-200 hover:border-red-600 rounded-2xl shadow-10xl">
                    <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1 p-2">
                            <h3 className="text-lg font-semibold leading-normal">How to claim your 25% discount offer?</h3>
                            <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.</p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
                <div className="w-full p-1">
                <a href="#">
                    <div className="py-7 px-8 bg-zinc-800 border border-gray-200 hover:border-red-600 rounded-2xl shadow-10xl">
                    <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1 p-2">
                            <h3 className="text-lg font-semibold leading-normal">What&rsquo;s your refund policy?</h3>
                            <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.</p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
                <div className="w-full p-1">
                <a href="#">
                    <div className="py-7 px-8 bg-zinc-800 border border-gray-200 hover:border-red-600 rounded-2xl shadow-10xl">
                    <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1 p-2">
                            <h3 className="text-lg font-semibold leading-normal">How to get support for the product?</h3>
                            <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.</p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default FAQ