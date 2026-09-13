// Sample solar package structure. Exact capacities, components and prices
// are placeholders (isSample: true) — edit this file with your real
// package specifications before publishing.
export const solarPackages = [
  {
    id: 'basic',
    name: 'Basic Solar Package',
    tagline: 'Entry-level backup for a few fans, lights & a TV',
    isSample: true,
    highlights: [
      'Small-load solar panel set',
      'Basic inverter unit',
      'Single battery backup',
      'Suitable for 1-2 rooms'
    ],
    price: null
  },
  {
    id: 'home',
    name: 'Home Solar Package',
    tagline: 'Covers everyday household load for a small-medium home',
    isSample: true,
    highlights: [
      'Mid-size solar panel array',
      'Hybrid inverter',
      'Battery bank for evening backup',
      'Fans, lights, fridge & TV support'
    ],
    price: null
  },
  {
    id: 'premium',
    name: 'Premium Solar Package',
    tagline: 'Full home backup including AC and major appliances',
    isSample: true,
    highlights: [
      'Larger solar panel array',
      'High-capacity hybrid inverter',
      'Extended battery backup',
      'Designed for AC & major appliance support'
    ],
    price: null
  },
  {
    id: 'commercial',
    name: 'Commercial Solar Package',
    tagline: 'For shops, offices and small commercial setups',
    isSample: true,
    highlights: [
      'Commercial-grade panel array',
      'Three-phase inverter option',
      'Scalable battery / net-metering ready',
      'Custom-sized for your load requirement'
    ],
    price: null
  }
]
