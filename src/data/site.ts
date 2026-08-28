export const site = {
  name: 'Blackline Development',
  domain: 'blacklinedevelopment.uk',
  description:
    'Custom software, websites, automation and managed digital services built around real operational needs.',
  primaryAction: {
    label: 'Start a project',
    href: '/contact',
  },
  navigation: [
    { label: 'Services', href: '/services' },
    { label: 'Commissions', href: '/commissions' },
    { label: 'Managed Services', href: '/managed-services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ],
} as const;

export const serviceGroups = [
  {
    title: 'Websites',
    summary: 'Fast, maintainable websites built to fit the business behind them.',
    detail: 'Public sites, service websites, customer journeys and future-ready integrations.',
  },
  {
    title: 'Applications',
    summary: 'Purpose-built software for workflows that generic tools do not solve cleanly.',
    detail: 'Desktop, web and operational applications with maintainability designed in from the start.',
  },
  {
    title: 'Automation',
    summary: 'Reduce repetitive work without hiding important decisions from the people responsible for them.',
    detail: 'Integrations, bots and workflow automation with clear ownership and safe failure states.',
  },
  {
    title: 'Managed Services',
    summary: 'Keep the systems around your project running after the build is complete.',
    detail: 'Hosting, maintenance, business email and domain management as standalone subscriptions.',
  },
] as const;

export const publicCommissionTiers = [
  {
    name: 'Standard',
    uplift: 'Base job price',
    response: 'Within 2 business days',
    pace: 'Standard delivery window',
  },
  {
    name: 'Priority',
    uplift: '+20%',
    response: 'Within 1 business day',
    pace: 'Higher queue priority and faster target pace',
  },
  {
    name: 'Accelerated',
    uplift: '+40%',
    response: 'Same business day where practical',
    pace: 'Highest paid priority and fastest feasible target pace',
  },
] as const;
