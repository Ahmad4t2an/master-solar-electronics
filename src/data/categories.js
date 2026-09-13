// Central category configuration. Edit names/icons here — everything else
// (nav, homepage grids, category pages) reads from this file.
export const CATEGORY_GROUPS = [
  {
    slug: 'solar',
    name: 'Solar Products',
    tagline: 'Panels, inverters, batteries & solar-powered essentials',
    icon: 'Sun',
    subcategories: [
      'Solar Panels',
      'Portable Solar Panels',
      'Solar Inverters',
      'Solar Batteries',
      'Solar Charge Controllers',
      'Solar Power Stations',
      'Solar Fans',
      'Solar Lights',
      'Solar Street & Flood Lights',
      'Solar Water Pumps',
      'Solar Water Heaters',
      'Solar CCTV Cameras',
      'Solar Mobile Chargers',
      'Solar Camping Products',
      'Solar Emergency Lights'
    ]
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    tagline: 'TVs, home theatres, speakers & personal electronics',
    icon: 'Tv',
    subcategories: [
      'LED TVs',
      'Smart TVs',
      'Home Theaters',
      'Soundbars',
      'Speakers',
      'Electric Fans',
      'Personal Electronics'
    ]
  },
  {
    slug: 'home-appliances',
    name: 'Home Appliances',
    tagline: 'ACs, refrigerators, washing machines & more',
    icon: 'Refrigerator',
    subcategories: [
      'Air Conditioners',
      'Refrigerators',
      'Deep Freezers',
      'Washing Machines',
      'Dryers',
      'Air Coolers',
      'Water Dispensers',
      'Water Coolers',
      'Geysers',
      'Vacuum Cleaners',
      'Irons',
      'Fans'
    ]
  },
  {
    slug: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    tagline: 'Ovens, air fryers, blenders & kitchen essentials',
    icon: 'CookingPot',
    subcategories: [
      'Microwave Ovens',
      'Built-in Ovens',
      'Air Fryers',
      'Juicers',
      'Blenders',
      'Choppers',
      'Food Processors',
      'Electric Kettles',
      'Sandwich Makers',
      'Coffee Makers',
      'Electric Stoves',
      'Kitchen Hoods & Hobs',
      'Toasters',
      'Grinders'
    ]
  }
]

export function getCategoryBySlug(slug) {
  return CATEGORY_GROUPS.find((c) => c.slug === slug)
}
