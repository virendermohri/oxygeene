import Image from "next/image";
import Link from "next/link";
export default function MaleFemaleDiscounts() {

     const womenServices = [
    {
      id: 1,
      title: "🤱 Mother & Baby Care",
      image:
        "https://res.cloudinary.com/divlt5fqo/image/upload/v1753210013/220-SM681360_vp9gp2.jpg",
      link: "/mother-baby-care",
    },
    {
      id: 4,
      title: "💅 Women’s Wellness",
      image:
        "https://res.cloudinary.com/divlt5fqo/image/upload/v1760257125/120-SM1104381_onsgag.jpg",
      link: "/wellness",
    },
    {
      id: 2,
      title: "💆‍♀️ Postnatal Massage",
      image:
        "https://res.cloudinary.com/divlt5fqo/image/upload/v1759319367/2-SM1085993_t3htyq.jpg",
      link: "/postnatal-massage",
    },
    {
      id: 3,
      title: "🏥 Nursing Assistance",
      image:
        "https://res.cloudinary.com/divlt5fqo/image/upload/v1760280974/1-SM224478_ihlgcn.jpg",
      link: "/nursing-care",
    },
  ];
    return (
         <section className="max-w-7xl py-12  mx-auto px-4 my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        💖 Home Care Services for Women
      </h2>

      {/* ✅ 1 column on mobile, grid on tablet+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {womenServices.map((service) => (
          <Link
            key={service.id}
            href={service.link}
            className="relative h-64 rounded-2xl overflow-hidden shadow-md group"
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold drop-shadow-lg">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
    )
}