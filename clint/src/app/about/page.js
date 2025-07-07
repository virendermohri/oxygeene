import React from 'react';
const metadata = {
  title: "About CareKwik | Home Healthcare Services",
  description: "Learn about CareKwik, India's emerging health super app connecting families with trusted caretakers and medical help. Discover our mission to redefine home healthcare.",
  keywords: "CareKwik, home healthcare, health super app, trusted caretakers, medical help, elder care, nursing care, physiotherapy, post-surgery support",

  robots: "index, follow",
};
const AboutPage = () => {
  return (
  
    <div className="max-w-5xl mt-10 md:mt-20 flex items-start flex-col mx-auto mb-10 px-4 md:mb-20">
      <h1 className='text-2xl font-bold mb-5'>About Carekwik</h1>
      <p className='font-bold text-xl my-5'>Our mission</p>
      <p className='text-gray-700'> At  CareKwik, our mission is to improve the health and well-being of individuals and communities by providing access to high-quality, affordable healthcare services.
        We are committed to delivering compassionate care, promoting wellness, and empowering people to live healthier lives.</p>
      <p className='font-bold text-xl my-5'>Our vission</p>
      <p className='text-gray-700'> Our core values guide everything we do at  CareKwik. We believe in integrity, respect, and collaboration. We are dedicated to continuous improvement, innovation, and
        excellence in all aspects of our work. Our patients are at the center of everything we do, and we strive to exceed their expectations.</p>
      <p className='font-bold text-xl my-5'>Our team</p>
      <p className='text-gray-700'>  Our team of healthcare professionals is comprised of experienced doctors, nurses, therapists, and support staff who are passionate about providing exceptional care.
        We foster a culture of teamwork, professional development, and mutual support to ensure the best possible outcomes for our patients.</p>
     
      <p className='font-bold text-xl my-5'>Our commitment</p>
      <p className='text-gray-700'>  We are committed to providing personalized care that meets the unique needs of each patient. We believe in building long-term relationships with our patients and
        their families, and we are dedicated to being a trusted partner in their health journey. We continuously seek ways to enhance our services and improve the patient
        experience.</p>
    </div>
  );
};

export default AboutPage;
