import Image from "next/image";
const topDoctors = [
  {
    name: "Dr. Rajasekhar M R",
    role: "MBBS, MS - FOUNDER AND SENIOR COLORECTAL SURGEON",
    experience: "14 Years",
    reviews: "100%",
    img: "/chiragheroimage.png",
  },
  {
    name: "Dr Dumpa Sruthi",
    role: "General Surgeon, Proctologist and Laparoscopic Surgeon",
    experience: "10 Years",
    reviews: "99%",
    img: "/MedicalProfessionalPortrait.png",
  },
  {
    name: "Dr Krishna Mohan Y",
    role: "General, Laparoscopic and Bariatric Surgeon, Proctologist",
    experience: "31 Years",
    reviews: "100%",
    img: "/MedicalProfessionalPortrait.png",
  },
];

const moreDoctors = [
  {
    name: "Dr Venugopal Pareek",
    role: "General and Gastrointestinal Surgeon",
    experience: "24 Years",
    reviews: "98%",
    img: "/MedicalProfessionalPortrait.png",
  },
  {
    name: "Dr Gabriel Sukumar Chinnam",
    role: "General, Laparoscopic and Gastrointestinal Surgeon",
    experience: "32 Years",
    reviews: "98%",
    img: "/MedicalProfessionalPortrait.png",
  },
  {
    name: "Dr Gabriel Sukumar Chinnam",
    role: "General, Laparoscopic and Gastrointestinal Surgeon",
    experience: "32 Years",
    reviews: "98%",
    img: "/MedicalProfessionalPortrait.png",
  },
];

export default function DoctorsSection() {
  return (
    <div className="w-full  mx-auto px-0 md:px-4 py-6">
      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-3">Our Top Doctors</h2>

      {/* TOP DOCTORS */}
      <div className="space-y-4 py-2 flex flex-col sm:flex-row gap-2">
        {topDoctors.map((doc, idx) => (
          <DoctorCard key={idx} doctor={doc} />
        ))}
      </div>

      {/* CONSULT BANNER */}
      <ConsultBanner />

      {/* MORE DOCTORS */}
      <div className="space-y-4 py-2 flex flex-col sm:flex-row gap-2">
        {moreDoctors.map((doc, idx) => (
          <DoctorCard key={idx} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

/* ------------------ Doctor Card ------------------ */

function DoctorCard({ doctor }) {
  return (
    <div className="flex flex-col gap-3 justify-between items-center bg-white rounded-2xl shadow-md px-5 py-4">
      <div className="flex items-start gap-4 w-full">
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-18 h-18 rounded-xl object-cover object-top"
        />

        <div className="flex-1">
          <p className="text-md font-semibold text-gray-900">{doctor.name}</p>
          <p className="text-gray-700 mt-1 leading-snug text-[12px]">
            {doctor.role}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-3 w-full">
        {/* Experience */}
        <div className="flex items-center bg-violet-50 px-3 py-2 rounded-lg text-sm w-full">
          <div className="w-full">
            <p className="font-semibold text-gray-900 text-[14px]">
              {doctor.experience}
            </p>
            <p className="text-[12px] text-gray-500 -mt-0.5">Experience</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg text-sm w-full">
          <div className="w-full">
            <p className="font-semibold text-gray-900">{doctor.reviews}</p>
            <p className="text-xs text-gray-500 -mt-0.5 text-center ">
              Positive Reviews
            </p>
          </div>
        </div>
      </div>

      {/* CTA BUTTON */}
      <button className="border-2 border-[#625587] text-[#625587] rounded-full px-6 py-3 mt-4 md:mt-0 text-center font-semibold leading-tight hover:bg-[#625587] hover:text-white transition flex items-center gap-2 w-full text-center flex justify-center items-center">
        <span className="text-base text-center">Book Free Consultation</span>
      </button>
    </div>
  );
}

/* ------------------ Consult Banner ------------------ */

function ConsultBanner() {
  return (
    <div className="w-full bg-green-50 rounded-2xl p-6 md:p-10 my-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Section */}
        <div className="flex flex-col items-start gap-4 max-w-md">
          <div className="flex h-22 w-22 items-center justify-center rounded-full bg-white ">
            <span className="text-xl">🏪</span>
          </div>

          <div>
            <h2 className="text-[32px] font-semibold text-gray-900 mb-4">
              Check Surgery Cost
            </h2>
            <p className="mt-2 text-gray-600 text-[18px]">
              Find the total cost of Surgery at the best hospitals in your city.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-md rounded-2xl  p-2 text-center">
          <Image
            src="/chiraggpt.png"
            alt="Franchise Offer"
            width={150}
            height={100}
            className="mx-auto mb-4 rounded-lg"
          />

          <button
            className="mt-3 rounded-full bg-[#625587] px-8 py-4 text-sm font-medium text-white hover:bg-teal-600 transition transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:ml-4"
          >
            Calculate Surgery Cost
          </button>
        </div>


      </div>
    </div>
  );
}

{/* <div className="mt-4 bg-green-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-md">
        <h3 className="text-xl font-bold text-green-700">
          Consult The Doctor <span className="text-gray-900">Now</span>
        </h3>
        <p className="text-gray-700 mt-2">
          Get a FREE consultation from our top doctors to know the best course
          of treatment.
        </p>

        <button className="mt-4 bg-green-600 text-white px-5 py-3 rounded-full flex items-center gap-2 shadow hover:bg-green-700 transition">
          <span></span> WhatsApp To Consult Doctor
        </button>
      </div>

      <img
        src="/images/consult.png"
        alt="Consult Doctor"
        className="w-36 h-auto mt-4 md:mt-0"
      />
    </div> */}