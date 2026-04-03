export interface ClassType {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  capacity: string;
  idealFor: string;
  whatToExpect: string;
}

export const classes: ClassType[] = [
  {
    slug: "private",
    name: "Private Session",
    subtitle: "One-on-one attention",
    description:
      "Fully personalized Pilates instruction tailored to your body, goals, and experience level. Your instructor designs each session around you.",
    duration: "55 minutes",
    capacity: "1 person",
    idealFor: "All levels, injury recovery, focused goals",
    whatToExpect:
      "A thorough assessment followed by customized reformer and mat exercises. Every movement is adapted to your needs.",
  },
  {
    slug: "duet",
    name: "Duet Class",
    subtitle: "Train with a partner",
    description:
      "Share your Pilates session with a friend, partner, or family member. Get semi-private instruction at a more approachable price point.",
    duration: "55 minutes",
    capacity: "2 people",
    idealFor: "Friends, couples, those who prefer company",
    whatToExpect:
      "A balanced session with exercises suited to both participants. Your instructor ensures each person receives individual attention.",
  },
  {
    slug: "trio",
    name: "Trio Class",
    subtitle: "Small group energy",
    description:
      "The intimacy of a private session with the energy of a group. Three participants work together through a thoughtfully designed class.",
    duration: "55 minutes",
    capacity: "3 people",
    idealFor: "Small groups, social workouts, building community",
    whatToExpect:
      "A dynamic session blending reformer work with mat exercises. The small group size means plenty of hands-on corrections.",
  },
  {
    slug: "workshop",
    name: "Creative Pilates Workshop",
    subtitle: "Explore movement",
    description:
      "Specialty workshops that blend traditional Pilates with creative movement techniques. A fresh perspective on how your body can move.",
    duration: "75 minutes",
    capacity: "6 people",
    idealFor: "Experienced practitioners, movement enthusiasts",
    whatToExpect:
      "An exploratory session combining Pilates principles with innovative movement patterns. Each workshop has a unique theme.",
  },
];
