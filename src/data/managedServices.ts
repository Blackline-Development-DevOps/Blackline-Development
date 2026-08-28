export type ManagedService = {
  name: string;
  monthly: number;
  yearly: number;
  yearlySaving: string;
  note?: string;
};

export const managedServicesSource = {
  authority: 'Development Operations #669 / approved Stripe catalogue',
  reviewed: '2026-08-28',
  currency: 'GBP',
  canonical: false,
  note: 'Website presentation data only. Stripe / Development Operations remains authoritative.',
} as const;

export const managedServices: ManagedService[] = [
  {
    name: 'Managed Business Email',
    monthly: 5,
    yearly: 50,
    yearlySaving: '16.7%',
  },
  {
    name: 'Managed Domain Management',
    monthly: 5,
    yearly: 50,
    yearlySaving: '16.7%',
    note: 'Registrar purchase, transfer and renewal costs are separate.',
  },
  {
    name: 'Managed Website Hosting',
    monthly: 15,
    yearly: 150,
    yearlySaving: '16.7%',
  },
  {
    name: 'Website Maintenance',
    monthly: 15,
    yearly: 150,
    yearlySaving: '16.7%',
  },
  {
    name: 'Managed Application Hosting — Base',
    monthly: 35,
    yearly: 350,
    yearlySaving: '16.7%',
  },
];

export const administrativeServices = [
  {
    name: 'Manual Domain Registration',
    price: 10,
    billing: 'one-time',
    note: 'Registrar domain purchase cost is charged separately.',
  },
] as const;
