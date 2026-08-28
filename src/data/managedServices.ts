export type ManagedService = {
  name: string;
  monthly: number;
  yearly: number;
  yearlySaving: string;
  note?: string;
};

export const managedServicesSource = {
  authority: 'Live Blackline Development Stripe catalogue + Development Operations #669',
  verified: '2026-08-28',
  currency: 'GBP',
  runtimeSource: 'static snapshot',
  note: 'The website does not query Stripe at runtime yet. Any future catalogue integration must fail safely on unavailable or conflicting pricing evidence.',
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
