import React from 'react'

const Offer = () => {
  return (
    <section className="w-full py-12 px-6 md:px-16 lg:px-32 bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-3xl text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Subscribe now & get 20% off
        </h1>
        <p className="font-serif text-gray-500">
          Super Value Deals – Save more with coupons & up to 70% off!
        </p>

        {/* Input + Button side by side */}
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-700 border border-gray-300 rounded-l-lg px-4 py-2 w-full focus:outline-none"
          />
          <button className="bg-orange-600 text-white px-5 py-2 rounded-r-lg hover:bg-orange-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Offer
