import React from "react";

const media = [

  {
    type: "image",
    src: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751345302/wmremove-transformed_tu9wum.jpg",
    title: "Elderly care with a personal touch",
  },

  {
    type: "image",
    src: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751345302/wmremove-transformed_1_shyymm.jpg",
    title: "Compassionate Female Care Services",
    description: "At CareKwik, we recognize the imoortance of dignity trut, and comfort in female care. That's why we provide trained female caretakers for  personal assitance, eldely support, and post-surgery care",
  },

];
const Showcase = () => {
  return (
    <section className=" py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work Speaks for Itself</h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          From compassionate caretakers to advanced medical equipment setup, explore how CareKwik is transforming healthcare through real stories, services, and smiles.
        </p>
      </div>

      <div className="grid  grid-cols-1   gap-20 max-w-7xl mx-auto">

        <div

          className=" overflow-hidden flex md:flex-row flex-col justify-between   bg-white "
        >
          <div className="w-full  ">

            <img
              src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1751351239/nurse-is-helping-elderly-man-with-cane_dldepy.jpg"}
              alt={"Elderly care with a personal touch"}
              className="w-full h-full object-cover rounded shadow-lg"
            />

          </div>
          <div className="p-3 flex  flex-col pl-[5%] gap-5  text-gray-700 font-medium">
            <h1 className="text-xl font-bold">
              Elderly care with a personal touch
            </h1>
            <p>
              At CareKwik, we know that elders need more than just assistance - they need respect, emotional support, and companionship. Our caregivers are trained to provide personalized care that goes beyond the basics.
            </p>
          </div>
        </div>
        <div

          className="  overflow-hidden flex  justify-between  md:flex-row flex-col    bg-white "
        >
          <div className="p-3 flex hidden md:block flex-col pl-[5%] gap-5  text-gray-700 font-medium">
            <h1 className="text-xl font-bold">
              Compassionate Female Care Services
            </h1>
            <p>
              At CareKwik, we recognize the imoortance of dignity trut, and comfort in female care. That&lsquo;s why we provide trained female caretakers for  personal assitance, eldely support, and post-surgery care.
            </p>
          </div>
          <div className="w-full  ">

            <img
              src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1751345302/wmremove-transformed_tu9wum.jpg"}
              alt={"Elderly care with a personal touch"}
              className="w-full h-full object-cover  md:hidden block  rounded shadow-lg"
            />

          </div>
          <div className="p-3 flex block md:hidden flex-col pl-[5%] gap-5  text-gray-700 font-medium">
            <h1 className="text-xl font-bold">
              Compassionate Female Care Services
            </h1>
            <p>
              At CareKwik, we recognize the imoortance of dignity trut, and comfort in female care. That&lsquo;s why we provide trained female caretakers for  personal assitance, eldely support, and post-surgery care.
            </p>
          </div>
          <div className="w-full  ">

            <img
              src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1751345302/wmremove-transformed_tu9wum.jpg"}
              alt={"Elderly care with a personal touch"}
              className="w-full h-full object-cover hidden md:block  rounded shadow-lg"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;