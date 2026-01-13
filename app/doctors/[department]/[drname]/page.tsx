import DoctorsData, { DoctorDetails } from "../../../doctorsdata/doctorsdata";
import Doctordetailspagehero from "@/components/doctorscomponents/doctorhero";
import ConditionsWeTreat from "@/components/doctorscomponents/whatwetreat";
import Doctors from "@/components/partials/doctors/doctors";
import Faqs from "@/components/faqs/faq";
import Form from "@/components/partials/form/from";

interface Props {
  params: {
    department: string;
    drname: string;
  };
}

const slugify = (s?: string | null) =>
  (s ?? "")
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function findDoctor(
  departmentParam: string,
  doctorParam: string
): DoctorDetails | null {
  const decodedDept = decodeURIComponent(departmentParam || "");
  const decodedDoctor = decodeURIComponent(doctorParam || "");

  // Try to find department
  let deptKey = Object.keys(DoctorsData).find(
    (k) =>
      k === departmentParam ||
      k === decodedDept ||
      slugify(k) === slugify(departmentParam) ||
      slugify(k) === slugify(decodedDept)
  );

  // Fallback: case-insensitive match
  if (!deptKey) {
    deptKey = Object.keys(DoctorsData).find(
      (k) =>
        k.toLowerCase() === (departmentParam || "").toLowerCase() ||
        k.toLowerCase() === decodedDept.toLowerCase()
    );
  }

  if (!deptKey) return null;

  const doctors = DoctorsData[deptKey];

  // Try matching by key or details.name
  let doctorKey = Object.keys(doctors).find(
    (name) =>
      slugify(name) === slugify(doctorParam) ||
      slugify(name) === slugify(decodedDoctor) ||
      name === doctorParam ||
      name === decodedDoctor
  );

  if (!doctorKey) {
    doctorKey = Object.keys(doctors).find((k) => {
      const dname = (doctors[k]?.name || "").toString();
      return (
        slugify(dname) === slugify(doctorParam) ||
        slugify(dname) === slugify(decodedDoctor) ||
        dname.toLowerCase() === doctorParam.toLowerCase()
      );
    });
  }

  // Fallback: global search
  if (!doctorKey) {
    for (const dkey of Object.keys(DoctorsData)) {
      const doctorKey = Object.keys(DoctorsData[dkey]).find((name) => {
        const dname = (DoctorsData[dkey][name]?.name || "").toString();
        return (
          slugify(name) === slugify(doctorParam) ||
          slugify(dname) === slugify(doctorParam)
        );
      });
      if (doctorKey) return DoctorsData[dkey][doctorKey];
    }
  }

  return doctorKey ? doctors[doctorKey] : null;
}

const faqs = [
  {
    faqTitle: " What are piles?",
    faqAnswer:
      "Piles are swollen veins in the anal area that may cause pain, itching, or bleeding.",
  },
  {
    faqTitle: "How do I know if I have piles?",
    faqAnswer:
      "Common signs include bleeding during bowel movements, a lump near the anus, pain, or irritation.",
  },
  {
    faqTitle: "Do all piles need surgery?",
    faqAnswer:
      "No. Early-stage piles can often be treated with medicines, fibre, ointments, and Sitz baths.",
  },
  {
    faqTitle: "What is laser treatment for piles?",
    faqAnswer:
      "Laser treatment is a minimally invasive procedure that seals the swollen veins with controlled laser energy — no major cuts or stitches.",
  },
  {
    faqTitle: "Is laser treatment painful?",
    faqAnswer:
      "Most patients experience minimal discomfort compared to traditional surgery.",
  },
  {
    faqTitle: "How long does the procedure take?",
    faqAnswer: "Usually around 20–30 minutes, depending on the case.",
  },
];
export default async function DoctorProfile({ params }: Props) {
  const department = (await params)?.department ?? "";
  const drname = (await params)?.drname ?? "";

  const details = findDoctor(department, drname);

  if (!details) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Doctor not found</h1>
        <p>We couldn't find the requested doctor in that department.</p>
      </main>
    );
  }

  // Parse highlights from description
  const highlights = details.description
    ? details.description
        .split(".")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const doctorInfo = {
    image: details.url,
    name: details.name,
    qualifications: details.qualification,
    designation: details.designation,
    experience: details.experience,
    booklink: details.mobileNumberDoctor || "#",
    insurance: "Have Insurance?",
    free: "Get Free OPD",
    intro: details.description,
    intro2: details.experience,
     highlights: details.highlights || [],
  };

  // Conditions based on department
  const departmentConditions: {
    [key: string]: Array<{ src: string; alt: string; label: string }>;
  } = {
    Proctology: [
      { src: "/chiragpiles.png", alt: "Piles", label: "Piles" },
      { src: "/analfistulachiragimg.png", alt: "Fistula", label: "Fistula" },
      
      {
        src: "/chiraganalfissure.png",
        alt: "Anal Fissure",
        label: "Anal Fissure",
      },
    ],
    "General & Laparoscopic": [
      { src: "/api/placeholder/100/100", alt: "Hernia", label: "Hernia" },
      {
        src: "/api/placeholder/100/100",
        alt: "Gallstones",
        label: "Gallstones",
      },
      {
        src: "/api/placeholder/100/100",
        alt: "Appendicitis",
        label: "Appendicitis",
      },
      {
        src: "/api/placeholder/100/100",
        alt: "Laparoscopy",
        label: "Laparoscopy",
      },
    ],
    Urology: [
      {
        src: "/api/placeholder/100/100",
        alt: "Kidney Stones",
        label: "Kidney Stones",
      },
      {
        src: "/api/placeholder/100/100",
        alt: "Prostate",
        label: "Prostate Issues",
      },
      { src: "/api/placeholder/100/100", alt: "Urinary Tract", label: "UTI" },
      {
        src: "/api/placeholder/100/100",
        alt: "Bladder",
        label: "Bladder Issues",
      },
    ],
    Gynecology: [
      {
        src: "/api/placeholder/100/100",
        alt: "Obstetrics",
        label: "Obstetrics",
      },
      { src: "/api/placeholder/100/100", alt: "Menopause", label: "Menopause" },
      { src: "/api/placeholder/100/100", alt: "Fertility", label: "Fertility" },
      {
        src: "/api/placeholder/100/100",
        alt: "Women Health",
        label: "Women Health",
      },
    ],
    "Plastic & Cosmetic": [
      {
        src: "/api/placeholder/100/100",
        alt: "Liposuction",
        label: "Liposuction",
      },
      { src: "/api/placeholder/100/100", alt: "Facelift", label: "Facelift" },
      {
        src: "/api/placeholder/100/100",
        alt: "Breast Surgery",
        label: "Breast Surgery",
      },
      {
        src: "/api/placeholder/100/100",
        alt: "Skin Rejuvenation",
        label: "Skin Rejuvenation",
      },
    ],
    Orthopaedic: [
      {
        src: "/api/placeholder/100/100",
        alt: "Joint Replacement",
        label: "Joint Replacement",
      },
      {
        src: "/api/placeholder/100/100",
        alt: "Fracture",
        label: "Fracture Treatment",
      },
      { src: "/api/placeholder/100/100", alt: "Arthritis", label: "Arthritis" },
      {
        src: "/api/placeholder/100/100",
        alt: "Spine Surgery",
        label: "Spine Surgery",
      },
    ],
  };
  const doctorsSectionData = {
    heading: "Our Top Doctors",

    topDoctors: [
      {
        name: "Dr. Rajasekhar M R",
        designation: "MBBS, MS",
        qualification: "Founder and Senior Colorectal Surgeon",
        experience: "38 Years",
        reviews: "99%",
        img: "/doctorchiragcard.png",
      },
      {
        name: "Dr. Shreedevi KN",
        designation: "MBBS, MS, FSGE",
        qualification: "Surgical Gastroenterologist and colo rectal surgeon",
        experience: "12 Years",
        reviews: "99%",
        img: "/doctorshreedevicard.png",
      },
      {
        name: "Dr. Prithvija Chakravarthy",
        designation: "BAMS, MD(Ayu),YIC (Yoga - SVYASA)",
        qualification: "Proctologist",
        experience: "12 Years",
        reviews: "99%",
        img: "/doctorprithvicard.png",
      },
    ],

    moreDoctors: [
      {
        name: "Dr. Suchitra N Adiga",
        designation: "BAMS, MS(Ayu)",
        qualification: "Proctologist",
        experience: "12 Years",
        reviews: "99%",
        img: "/doctorsuchithracard.png",
      },
      {
        name: "Dr.Jyotsna Vemulapalli",
        designation: "MBBS, MS(Gen Surgery)",
        qualification: "General Surgeon",
        experience: "12 Years",
        reviews: "99%",
        img: "/doctorjyotsnacard.png",
      },
      {
        name: "Dr. Padmanabh R Bhat",
        designation: "MBBS, MS(Gen Surgery),FRCS(Edin)",
        qualification: "General Surgeon",
        experience: "12 Years",
        reviews: "99%",
        img: "/doctorpadmanabhcard.png",
      },
    ],

    banner: {
      heading: "Consult The Doctor Now",
      points: [
        "Free Consultation",
        "Online Consultation",
        "Know your condition from top doctors",
      ],
      buttonText: "Talk to the Doctor",
      imageSrc: "/consultthedoctor.png",
    },
  };
  const testimonialSectionData = {
    testimonials: [
      {
        title: "",
        text: "This Hospital is one of the best hospitals in the world in terms of skill set mainly for fissure, fistula and for piles issue. Please don’t go by infrastructure and ambience.. Dr Rajshekhar is such a gem of the hospital, 70% recovery happens just by talking and interacting with him. Overall it’s a good systemic and highly skilled hospital which takes care even the post surgery recovery.. And the procedure is not really painful through laser…",
        name: "NEERAJ ARORA",
        rating: 5,
      },
      {
        title: "",
        text: "Dr Rajasekhar and his staff are amazing. They are friendly, attentive, caring, patient and helpful. I’ve had a multitude of piles surgery have been done by Dr Rajasekhar & Dr. Pruthvija and his staff. When I called with concerns about the hospital’s billing system, they made sure it was smooth and quick. I would highly recommend chirag hospital for piles laser treatment.",
        name: "Abdul Khader",
        rating: 5,
      },
      {
        title: "",
        text: "Dr. Rajashekar sir provides detailed consultation and report your condition very well. He makes good recommendation for you and is a gem in the medical community. When he observed my condition, he advised me for a consrvative management for treatment of piles. That means i do not require surgery for piles. I was so confident in his advice that I declared right away to pursue and follow his medication and other precautions. I completely recovered in a weeks’ time. I'm glad I found him through Google reviews and decided to visit him. Finally I am completely fine and cured from piles. Strongly suggest this hospital for piles as they treatment without surgery.",
        name: "Reddeeswar Naidu",
        rating: 4.5,
      },
      {
        title: "",
        text: "My grandfather was diagnosed with Piles and doctors suggested that surgery is the way out. Considering his age 78 years we all were worried. My aunt suggested us to visit Dr Rajasekhar sir as she has a good experience previously with him. We were hesitant for the surgery, but Dr. Rajasekhar checked and informed us that he can treat without doing any surgery. He did not do any surgery for my grandfather and it took some time of 10 days to recover but he is doing good now. His team did a really good job. Doctor and his staff took good care of my grandfather and helped us during our tough times. The best human being we ever met. Strongly suggest to the people suffering with piles and fistula for treatment without surgery",
        name: "Malleswari Subhrmanyam",
        rating: 4.7,
      },
      {
        title: "",
        text: "Dr Rajasekar is one of the best doctor and a very nice person. We have till date had best experience with him and chirag hospital. He makes the patient and family feel so comfortable despite of the complex situation whatsoever. Dr. Rajasekhar has treated two of my family members for piles problems. A year before to my father-in-Law and recent one to my sister-in-law for piles both of them recovered fast and doing good. Such is the confidence we have built with Dr. Rajasekhar sir. These days we even visit him for second opinion on any health-related issues. Best doctor and best service. The best part of chirag hospital is that they will not push the patient to get surgery. They will try their best in treatment without any surgery. I like their approach very much and i strongly suggest for any one suffering with piles to visit chirag hospital to get treatment for piles without any surgery. Thank you Sir!!",
        name: "Anji Yadav",
        rating: 4.8,
      },
    ],
    ctaText: "Google Review",
    ctaLink: "https://www.google.com/maps/place/Chirag+Global+Hospital/@12.9059178,77.6037368,17z/data=!4m8!3m7!1s0x3bae150e6550b135:0xa07798be317297a5!8m2!3d12.9059178!4d77.6037368!9m1!1b1!16s%2Fg%2F11q4j4m7pw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  };

  const conditionsData =
    departmentConditions[department] || departmentConditions["Proctology"];

  return (
    <>
      <Doctordetailspagehero doctor={doctorInfo} />
      <ConditionsWeTreat conditions={conditionsData} />
      <section className="my-10 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Doctors */}
          <div className="w-full lg:w-3/4">
            <Doctors {...doctorsSectionData} />
          </div>

          {/* Right: Reviews/Form */}
          <div className="flex-1 relative">
            {/* Desktop: sticky */}
            <div className="hidden lg:block sticky top-24">
              <Form reviewsData={testimonialSectionData} />
            </div>
            {/* Mobile: fixed bottom */}
            <div
              className="block lg:hidden fixed bottom-0 left-0 w-full z-50 bg-transparent px-4 py-1"
              style={{ maxWidth: "1500px", margin: "0 auto" }}
            >
              <Form reviewsData={testimonialSectionData} />
            </div>
          </div>
        </div>
      </section>
      {faqs.length > 0 && (
        <Faqs
          className="md:!w-[95%] w-full mx-auto my-10"
          // fheading={fheading}
          faqs={faqs.map((faq) => ({
            faqquestion: faq.faqTitle,
            faqanswer: faq.faqAnswer,
          }))}
        />
      )}
    </>
  );
}
