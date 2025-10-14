import Image from "next/image";
import Link from "next/link";
export default function DiscountCarousel() {

  const discounts = [
    {
      id: 4,
      title: "🧓 Elder Care at Home",
      discount: "25% OFF",
      price: "Only ₹699/day",
      description: "Compassionate and professional elder care services at home.",
      image: "https://res.cloudinary.com/divlt5fqo/image/upload/v1760166593/istockphoto-1296176562-612x612_eskv3l.jpg",
      link: "/elder-care-at-home",
    },
    {
      id: 1,
      title: "🏃 Physiotherapy at Home",
      price: "Only ₹600/session",
      discount: "20% OFF",
      description: "Recover faster with expert physiotherapy sessions at your home.",
      image:
        "https://res.cloudinary.com/divlt5fqo/image/upload/v1760164141/ankle-3135710_1280_arbvty.jpg",
      link: "/physiotherapy-at-home",
    },
    
    {
      id: 3,
      title: "👶 Mother & Baby Care",
      discount: "25% OFF",
        price: "Starting ₹600/day",
      description: "Specialized postnatal care for mothers and newborns at home.",
      image:
        "https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg",
      link: "/mother-baby-care-at-home",
    },

  ];

  return (
   <div className="max-w-7xl mx-auto px-4 my-5 md:my-20">
      

      {/* Scrollable Row on Mobile, Grid on Desktop */}
      <div className="flex  md:grid lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2">
        {discounts.map((offer) => (
          <div
            key={offer.id}
            className="relative flex-shrink-0 w-72 md:w-auto h-56 rounded overflow-hidden shadow-md snap-start group"
          >
            {/* Background Image */}
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Overlay */}
            <div className="absolute top-20 w-full text-white h-56 p-4 bg-gradient-to-t from-black/60 via-black/60 to-transparent">
              <h3 className="text-xl font-bold ">{offer.title} </h3>
              <p className="text-lg font-medium text-white">
                {offer.discount}
              </p>
              <Link
                href={offer.link}
                className="inline-block mt-2 text-sm bg-white text-black  px-4 py-1.5 rounded font-semibold hover:bg-emerald-50 transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}