// types.ts
export interface DoctorDetails {
  url: string;
  name: string;
  qualification: string;
  designation: string;
  experience: string;
  description: string;
  mobileNumberDoctor?: string;
}

export interface DoctorsData {
  [department: string]: {
    [doctorName: string]: DoctorDetails;
  };
}