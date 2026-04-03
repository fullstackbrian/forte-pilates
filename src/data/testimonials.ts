export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Forte Pilates completely changed how I think about Pilates. The attention to detail in every session is unmatched.",
    name: "Sarah K.",
    detail: "Private session client",
  },
  {
    quote:
      "I love bringing my friend to duet classes. It makes the workout so much more enjoyable, and we both get personalized corrections.",
    name: "Michelle L.",
    detail: "Duet class regular",
  },
  {
    quote:
      "After years of back pain, the private sessions here have been life-changing. I feel stronger and more mobile than I have in a decade.",
    name: "James T.",
    detail: "Private session client",
  },
  {
    quote:
      "The creative workshops are unlike anything I have experienced at other studios. Every session feels fresh and inspiring.",
    name: "Anna R.",
    detail: "Workshop attendee",
  },
];
