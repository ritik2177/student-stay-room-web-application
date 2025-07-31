'use client'

export default function Home() {


  return (
    <div>
      <div className="relative bg-[url('/image/background-image.jpg')] bg-cover bg-center h-screen text-white">

        {/* Content */}
        <div className="flex flex-col justify-center h-full px-6 md:px-16">

          {/* Text Section */}
          <div className="mb-3 ml-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl max-w-96 font-bold mb-1 drop-shadow-lg text-gray-500">
              Welcome to Student Stay
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[500px] text-gray-400 drop-shadow-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni
              necessitatibus beatae quia facilis eaque dolor.
            </p>
          </div>

          {/* Search Section */}
          <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md rounded-xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 w-full">

              <input
                type="text"
                placeholder="Enter your center name"
                className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="date"
                className="w-full p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                placeholder="Number of Guest"
                className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition">
                Search
              </button>

            </div>
          </div>


        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Dream Destination</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique reprehenderit labore animi cumque beatae.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img src="/image/image2.jpeg" className="w-full h-48 object-cover" />
            <p className="p-4 text-center text-gray-700 font-medium">Tropical Beach</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img src="/image/image3.jpg" className="w-full h-48 object-cover" />
            <p className="p-4 text-center text-gray-700 font-medium">Misty Mountains</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img src="/image/image4.jpg" className="w-full h-48 object-cover" />
            <p className="p-4 text-center text-gray-700 font-medium">Modern Cityscape</p>
          </div>
        </div>
      </div>


    </div>

  );
}
