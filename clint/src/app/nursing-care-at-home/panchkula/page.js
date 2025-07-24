import Image from 'next/image';
import BookService from '@/components/bookservice';

export const metadata = {
    title: 'Nursing Care at Home in Panchkula | CareKwik',
    description:
        'Book skilled nursing care at home in Panchkula with CareKwik. Get trained nurses for injections, ICU care, post-operative recovery and more.',
    keywords: [
        'nursing care at home Panchkula',
        'home nurse Panchkula',
        'ICU nurse Panchkula',
        'injection nurse Panchkula',
        'nursing services Panchkula',
        'post surgery care Panchkula',
        'bedridden patient nurse Panchkula',
    ],
    alternates: {
        canonical: 'https://carekwik.com/nursing-care-at-home/panchkula',
    },
};

export default function NursingCarePanchkula() {
    return (
        <>
            {/* Image + Booking */}
            <div className="mx-auto md:p-10 p-4">
                {/* Hero Section */}
                <div className="flex md:gap-10 flex-col md:flex-row justify-between ">
                    <Image
                       src="https://res.cloudinary.com/divlt5fqo/image/upload/v1753344614/220-SM987818_woof2x.jpg"
                        alt="Nursing Care at Home in Panchkula"
                        width={600}
                        height={450}
                        className="rounded-2xl shadow-md mb-8 border md:w-[60%] object-cover"
                    />
                    <div className="md:w-1/3 md:p-5 md:shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Book Nursing Care Service</h2>
                        <BookService servicename="Nursing Care" />
                    </div>
                </div>
                 <div className="mt-12 max-w-6xl mx-auto">

                    {/* Content */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Nursing Care at Home in Panchkula</h1>
                    <p className="text-gray-700 mb-4">
                        CareKwik provides professional and compassionate <strong>nursing care at home in Panchkula</strong> for patients who require daily or intensive care. Whether you need short-term post-operative assistance or long-term elder nursing care, we’re here to help.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Our certified nurses are trained in wound care, injections, vitals monitoring, tracheostomy, and ICU-level care. You get hospital-level attention in the comfort and safety of your home in Panchkula.
                    </p>

                    {/* In-Home Nursing Services */}
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Our In-Home Nursing Services Include:</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                        <li>Injection & IV Therapy at Home</li>
                        <li>Wound Dressing & Surgical Site Care</li>
                        <li>Post-Operative Recovery Support</li>
                        <li>Catheter, Tracheostomy & Tube Feeding</li>
                        <li>ICU-Level Care with Monitoring</li>
                        <li>Palliative and Elderly Nursing</li>
                    </ul>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <strong>Q: Are your nurses qualified and verified?</strong>
                                <p>A: Yes. All our nurses are certified, background-verified, and trained for home care scenarios.</p>
                            </div>
                            <div>
                                <strong>Q: What kind of nursing services do you offer in Panchkula?</strong>
                                <p>A: We offer injections, wound care, ICU care, tracheostomy care, post-surgical care and more.</p>
                            </div>
                            <div>
                                <strong>Q: Is 24-hour home nursing available?</strong>
                                <p>A: Yes, we provide 12-hour and 24-hour shifts based on patient needs.</p>
                            </div>
                            <div>
                                <strong>Q: How quickly can a nurse be arranged?</strong>
                                <p>A: Within a few hours of booking, after understanding your care requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
