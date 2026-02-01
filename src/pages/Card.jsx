import React from "react";

const Card = () => {
  // whatsapp
  const handleWhatsApp = () => {
    const phoneNumber = "916396028950";
    const message = "Hi, I want to book event decoration services in Meerut.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const cardData = [
    // Decoration Items

    {
      id: 1,
      title: "Birthday Balloon Decoration",
      image: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e",
      rating: 4.9,
      price: 1699,
      originalPrice: 1899,
    },
    {
      id: 2,
      title: "Romantic Room Decoration",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7",
      rating: 4.8,
      price: 2499,
      originalPrice: 2999,
    },
    {
      id: 3,
      title: "Anniversary Decoration Setup",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      rating: 4.9,
      price: 1999,
      originalPrice: 2299,
    },
    {
      id: 4,
      title: "Wedding Room Decoration",
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485",
      rating: 5.0,
      price: 5999,
      originalPrice: 6999,
    },
    {
      id: 5,
      title: "Baby Shower Decoration",
      image: "https://images.unsplash.com/photo-1600172454284-934feca24ccd",
      rating: 4.7,
      price: 2899,
      originalPrice: 3299,
    },
    {
      id: 6,
      title: "Kids Theme Party Decoration",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      rating: 4.8,
      price: 3499,
      originalPrice: 3999,
    },

    // Beauty & Parlour Products
    {
      id: 7,
      title: "Bridal Makeup Package",
      image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
      rating: 5.0,
      price: 9999,
      originalPrice: 12999,
    },
    {
      id: 8,
      title: "Party Makeup for Women",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      rating: 4.8,
      price: 2999,
      originalPrice: 3999,
    },
    {
      id: 9,
      title: "Facial & Cleanup Session",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      rating: 4.7,
      price: 1499,
      originalPrice: 1999,
    },
    {
      id: 10,
      title: "Hair Spa Treatment",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948",
      rating: 4.6,
      price: 1999,
      originalPrice: 2499,
    },
    {
      id: 11,
      title: "Keratin Hair Treatment",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
      rating: 4.9,
      price: 4999,
      originalPrice: 5999,
    },
    {
      id: 12,
      title: "Manicure & Pedicure",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
      rating: 4.7,
      price: 1299,
      originalPrice: 1699,
    },

    // More mixed cards
    {
      id: 13,
      title: "Rose Petal Decoration",
      image: "https://images.unsplash.com/photo-1607082349250-30c42c8b3b49",
      rating: 4.8,
      price: 2199,
      originalPrice: 2599,
    },
    {
      id: 14,
      title: "Candle Light Dinner Setup",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
      rating: 5.0,
      price: 6999,
      originalPrice: 7999,
    },
    {
      id: 15,
      title: "Engagement Decoration",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
      rating: 4.9,
      price: 5499,
      originalPrice: 6499,
    },
    {
      id: 16,
      title: "Full Body Waxing",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
      rating: 4.6,
      price: 1899,
      originalPrice: 2399,
    },
    {
      id: 17,
      title: "Hair Coloring Service",
      image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
      rating: 4.7,
      price: 2599,
      originalPrice: 2999,
    },
    {
      id: 18,
      title: "Luxury Facial Therapy",
      image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3",
      rating: 4.9,
      price: 3499,
      originalPrice: 3999,
    },
    {
      id: 19,
      title: "Balloon Arch Decoration",
      image: "https://images.unsplash.com/photo-1604537466573-5e94508fd243",
      rating: 4.8,
      price: 3799,
      originalPrice: 4299,
    },
    {
      id: 20,
      title: "Makeup & Hair Combo",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      rating: 5.0,
      price: 4499,
      originalPrice: 5499,
    },
  ];

  return (
    <div className="px-6 py-10">
      {/* Heading Section */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Best Selling Decoration
        </h1>
        <p className="text-lg text-gray-600">
          Decoration & Beauty Products all over India
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-sm font-semibold shadow">
                ⭐ {item.rating}
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl font-bold text-red-600">
                  ₹{item.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{item.originalPrice}
                </span>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-blue-800 text-white py-3 rounded-xl font-semibold text-base hover:bg-blue-900 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
