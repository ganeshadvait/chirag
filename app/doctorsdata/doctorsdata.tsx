export interface DoctorDetails {
  url: string;
  name: string;
  qualification: string;
  designation: string;
  experience: string;
  description: string;
  mobileNumberDoctor?: string;
}

export interface DoctorsDataType {
  [department: string]: {
    [doctorName: string]: DoctorDetails;
  };
}
const DoctorsData: DoctorsDataType = {
  Proctology: {
    "Dr. Samhitha Reddy": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
      name: "Dr. Samhitha Reddy",
      qualification: "MBBS, MS, FMAS, FISCP, DMAS",
      experience: "Experieance:8 years",
      designation: "Proctology Specialist",
      description:
        "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      mobileNumberDoctor: "tel:07969084448",
    },
    "Dr. Abhishek Katha": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
      name: "Dr. Abhishek Katha",
      qualification: "MBBS, MS, FMAS",
      experience: "Experieance:16 years",
      designation: "Proctology Specialist.",
      description:
        "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
      mobileNumberDoctor: "tel:07969084448",
    }
  },

  "General & Laparoscopic": {
    "Dr. Abhishek Katha": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
      name: "Dr. Abhishek Katha",
      qualification: "MBBS, MS, FMAS",
      designation: "General and Laparoscopic Specialist",
      experience: "Experieance:16 years",
      description:
        "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
      mobileNumberDoctor: "tel:07969084448",
    },
    "Dr. Samhitha Reddy": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
      name: "Dr. Samhitha Reddy",
      qualification: "MBBS, MS, FMAS, FISCP, DMAS",
      designation: "General and Laparoscopic Specialist",
      experience: "Experieance:8 years",
      description:
        "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      mobileNumberDoctor: "tel:07969084448",
    },
    "Dr. M Ram Prabhu": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Ram-Prabhu-1.webp",
      name: "Dr. M Ram Prabhu",
      qualification: "MBBS, MS, MCH (Plastic Surgery)",
      designation: "Plastic Surgeon",
      experience: "Experience: 18 years",
      description:
        "Plastic & Cosmetic Surgeon with 18 years’ experience. Expert in gynecomastia, breast augmentation, liposuction, and tummy tuck. Treated 6,000+ patients with 99% success, delivering personalised care and natural results.",
      mobileNumberDoctor: "tel:91796908446"
    }
  },

  Urology: {
    "Dr. Priyank Salecha": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
      name: "Dr. Priyank Salecha",
      qualification: "MBBS, MS, MCH, DNB",
      designation: "Consultant Urologist & Andrologist",
      experience: "Experience: 16 years",
      description: "Urologist and Andrologist with 16 years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
    },
  },

  Gynecology: {
    "Dr. Harshitha Kakarla": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Harshitha-Kakarla-1.webp",
      name: "Dr. Harshita Kakarla",
      qualification: "MBBS, MS, FMAS",
      designation: "Gynecology Specialist",
      experience: "Experieance:12 years",
      description: "Gynaecologist and Advanced Laparoscopic Surgeon with 12 years' experience. Specialises in hysteroscopy, laparoscopy, fertility treatments, and pregnancy issues like IUGR, eclampsia. FMAS-certified, she has treated 7,000+ patients with a 99% success rate using evidence-based care.",
    },
    "Dr. Pragnia Poloju": {
      url: "https://luxhospitals.com/wp-content/uploads/2025/04/Dr.-pragnia-2.webp",
      name: "Dr. Pragnia Poloju",
      qualification: "MBBS, MS, MCH",
      designation: "Gynecology Specialist",
      experience: "Experieance:12 years",
      description: "Gynaecologist & Gynae Oncologist with 12 years experience, trained at PGIMER & Kidwai. Expert in laparoscopic and cancer-preventive surgeries. Actively involved in research, publications, and national and international medical associations and forums.",
    },
    "Dr. Samhitha Alukur": {
      url: "https://luxhospitals.com/wp-content/uploads/2025/04/Dr.-pragnia-2.webp",
      name: "Dr. Samhitha Alukur",
      qualification: "MBBS, DGO, DNB, FRM, DMAS, FMAS",
      designation: "Gynecology Specialist",
      experience: "Experieance:12 years",
      description: "Dr. Samhitha Alukur, expert gynecologist at Lux Hospitals, Hyderabad, provides compassionate, multilingual care with expertise in IVF, high-risk pregnancies, PCOS, fertility treatments, women’s health, and holistic wellness solutions tailored individually.",
    },
  },

  "Plastic & Cosmetic": {
    "Dr. M Ram Prabhu": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Ram-Prabhu-1.webp",
      name: "Dr. M Ram Prabhu",
      qualification: "MBBS, MS, MCH (Plastic Surgery)",
      designation: "Plastic Surgeon",
      experience: "Experience: 18 years",
      description:
        "Plastic & Cosmetic Surgeon with 18 years’ experience. Expert in gynecomastia, breast augmentation, liposuction, and tummy tuck. Treated 6,000+ patients with 99% success, delivering personalised care and natural results.",
      mobileNumberDoctor: "tel:91796908446"
    },
    "Dr. Chandana Guduru": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Chandana-Guduru.webp",
      name: "Dr. Chandana Guduru",
      qualification: "MBBS, MS, MCH (Plastic Surgery)",
      designation: "Plastic Surgeon",
      experience: "Experience: 10 years",
      description:
        "Plastic & Cosmetic Surgeon with 10 years’ experience. Expert in breast augmentation, liposuction, tummy tuck, and gynecomastia. Fellowship in Cosmetic Surgery (Dubai). 4,000+ procedures with 99% success, known for natural results.",
      mobileNumberDoctor: "tel:91796908446"
    },
  },

  Orthopaedic: {
    "Dr. Madan Mohan": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Madan-Mohan.webp",
      name: "Dr. Madan Mohan",
      qualification: "MBBS, MS - Orthopaedic, MCH",
      designation: "Consultant Orthopaedic Surgeon",
      experience: "Experience: 32 Years",
      description: "Orthopaedic Surgeon with 32 years of experience and an MCH in Joint Replacement Surgery. Specialises in TKR, THR, ORIF, and sports injury surgeries. Performed over 5,000 procedures with consistent outcomes and long-term recovery success in orthopaedic care."
    },
    "Dr. Sai Kishan Sirasala": {
      url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Madan-Mohan.webp",
      name: "Dr. Sai Kishan Sirasala",
      qualification: "MBBS, MS. Ortho, FIJR, FIASM (UK)",
      designation: "Consultant Orthopaedic Surgeon",
      experience: "Experience: 7 Years",
      description: "Orthopaedic Surgeon with key experts from the Sports Medicine Department, specializes in modern, minimally invasive ACL reconstruction techniques — helping patients return to their active lifestyles with confidence and improved mobility."
    },
  },
};
export default DoctorsData;
