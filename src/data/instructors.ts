export interface Instructor {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
}

export const instructors: Instructor[] = [
  {
    name: "Founder Name",
    title: "Founder & Lead Instructor",
    bio: "With over a decade of experience in classical and contemporary Pilates, she founded the studio to create a space where movement meets creativity. Her approach blends precision with artistry, helping clients discover new possibilities in their bodies.",
    specialties: ["Classical Pilates", "Creative Movement", "Rehabilitation"],
  },
  {
    name: "Instructor Name",
    title: "Senior Instructor",
    bio: "A dedicated Pilates practitioner and certified instructor bringing warmth and expertise to every session. Specializes in helping beginners build a strong foundation and guiding experienced practitioners to new levels.",
    specialties: ["Reformer", "Mat Pilates", "Prenatal"],
  },
];
