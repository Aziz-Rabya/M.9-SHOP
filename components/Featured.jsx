import React from 'react'

const Featured = () => {
  const products = [
    {
      id: 1,
      image: "/images/Unparalleled_Sound.png",
      title: "Unparalleled Sound",
      description: "Experience crystal-clear audio with premium headphones.",
    },
    {
      id: 2,
      image: "/images/Unparalleled_Sound.png",
      title: "Stay Connected",
      description: "Compact and stylish earphones for every occasion.",
    },
    {
      id: 3,
      image: "/images/Unparalleled_Sound.png",
      title: "Power in Every Pixel",
      description: "Shop the latest laptops for work, gaming, and more.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center my-20 px-6">
      {/* Title + underline */}
      <div className="relative flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">
          Featured Products
        </h1>
        <span className="w-40 h-1 bg-orange-500 rounded-full mx-auto"></span>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-md transform transition duration-500 hover:scale-105 group"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Bottom Overlay with Content */}
            <div className="absolute bottom-0 left-0 right-0 group-hover:bg-black/20 p-6 flex flex-col text-white transition duration-500">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="mb-4 text-sm opacity-90 group-hover:opacity-100 transition">{product.description}</p>
              <button className="px-6 py-2 w-fit bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured
