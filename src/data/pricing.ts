export interface PricingTier {
  name: string;
  sessions: number;
  prices: {
    private: number;
    duet: number;
    trio: number;
  };
  perSession: {
    private: number;
    duet: number;
    trio: number;
  };
  popular?: boolean;
  note?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Single Session",
    sessions: 1,
    prices: { private: 120, duet: 80, trio: 60 },
    perSession: { private: 120, duet: 80, trio: 60 },
    note: "Try a class with no commitment",
  },
  {
    name: "5-Pack",
    sessions: 5,
    prices: { private: 550, duet: 375, trio: 275 },
    perSession: { private: 110, duet: 75, trio: 55 },
    note: "Valid for 2 months",
  },
  {
    name: "10-Pack",
    sessions: 10,
    prices: { private: 1000, duet: 700, trio: 500 },
    perSession: { private: 100, duet: 70, trio: 50 },
    popular: true,
    note: "Valid for 4 months",
  },
  {
    name: "20-Pack",
    sessions: 20,
    prices: { private: 1800, duet: 1200, trio: 900 },
    perSession: { private: 90, duet: 60, trio: 45 },
    note: "Valid for 6 months — best value",
  },
];

export const workshopPrice = {
  single: 75,
  note: "Workshop packages available upon request",
};
