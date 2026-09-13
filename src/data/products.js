// ============================================================================
// CENTRAL PRODUCT DATA FILE
// ----------------------------------------------------------------------------
// Edit this file to add, remove, or update products. Every product card,
// product detail page, search index and category page reads from this array.
//
// Field guide:
//   slug          - unique, URL-safe id, used for /product/:slug
//   name          - product name shown everywhere
//   brand         - brand name (leave '' if brand-agnostic / generic)
//   model         - model number, optional
//   categoryGroup - one of: 'solar' | 'electronics' | 'home-appliances' | 'kitchen-appliances'
//   subcategory   - must match a subcategory string in src/data/categories.js
//   specs         - array of short spec strings shown on the card
//   description   - longer paragraph for the product detail page
//   price         - number in PKR, or null -> shows "Price on WhatsApp"
//   oldPrice      - number in PKR, or null (only set when price is also set)
//   priceIsDemo   - true if price/oldPrice are illustrative placeholders you
//                   must replace with verified, real prices before going live
//   availability  - 'In Stock' | 'Limited Stock' | 'Order on Demand'
//   images        - array of image URLs; leave empty [] to use the built-in
//                   placeholder artwork until you add real product photos
//   featured/bestSeller/deal - booleans used to populate homepage sections
// ============================================================================

export const products = [
  // ---------------------------------------------------------------------
  // SOLAR — Panels, Inverters, Batteries, Controllers, Power Stations
  // ---------------------------------------------------------------------
  {
    slug: 'jinko-solar-panel-585w',
    name: 'Monocrystalline Solar Panel 585W',
    brand: 'Jinko Solar',
    model: 'JKM585N-72HL4-V',
    categoryGroup: 'solar',
    subcategory: 'Solar Panels',
    specs: ['585 Watt', 'Monocrystalline PERC', '12 Year Product Warranty', 'Tier-1 Manufacturer'],
    description:
      'High-efficiency monocrystalline solar panel suitable for residential and commercial rooftop solar systems. Built with PERC cell technology for improved performance in low-light and high-temperature conditions common across Pakistan.',
    price: null,
    oldPrice: null,
    priceIsDemo: false,
    availability: 'In Stock',
    images: ['/images/products/solar-panel.jpg'],
    featured: true,
    bestSeller: true
  },
  {
    slug: 'canadian-solar-panel-550w',
    name: 'Monocrystalline Solar Panel 550W',
    brand: 'Canadian Solar',
    model: 'CS7L-550MS',
    categoryGroup: 'solar',
    subcategory: 'Solar Panels',
    specs: ['550 Watt', 'Monocrystalline', 'Anti-reflective Glass', '25 Year Performance Warranty'],
    description:
      'Reliable and widely-used solar panel model in the Pakistani market, suitable for home and commercial solar installations. Durable aluminum frame rated for local weather conditions.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/solar-panel.jpg'],
    featured: true
  },
  {
    slug: 'portable-solar-panel-120w-foldable',
    name: 'Foldable Portable Solar Panel 120W',
    brand: 'Generic / Various',
    model: '120W Foldable Kit',
    categoryGroup: 'solar',
    subcategory: 'Portable Solar Panels',
    specs: ['120 Watt', 'Foldable ETFE Laminate', 'Built-in Kickstand', 'USB + DC Output'],
    description:
      'Lightweight, foldable solar panel designed for camping, outdoor use and charging power stations or batteries on the go. Easy to carry and set up in minutes.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/solar-panel-foldable.jpg']
  },
  {
    slug: 'inverex-hybrid-inverter-8kw',
    name: 'Hybrid Solar Inverter 8kW',
    brand: 'Inverex',
    model: 'Nitrox 8kW',
    categoryGroup: 'solar',
    subcategory: 'Solar Inverters',
    specs: ['8kW Hybrid', 'On-grid + Off-grid Mode', 'MPPT Built-in', 'WiFi Monitoring'],
    description:
      'Popular hybrid inverter used across Pakistani home solar systems, capable of running on solar, batteries and grid power with automatic switching.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/solar-inverter.jpg'],
    featured: true,
    bestSeller: true
  },
  {
    slug: 'solis-hybrid-inverter-5kw',
    name: 'Hybrid Solar Inverter 5kW',
    brand: 'Solis',
    model: 'RHI-5K-48ES-5G',
    categoryGroup: 'solar',
    subcategory: 'Solar Inverters',
    specs: ['5kW Hybrid', 'Dual MPPT', 'Battery Ready', 'Remote App Monitoring'],
    description:
      'Compact hybrid inverter suitable for small to medium homes, supports lithium and lead-acid battery banks with smart load management.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/solar-inverter.jpg']
  },
  {
    slug: 'growatt-ongrid-inverter-10kw',
    name: 'On-Grid Solar Inverter 10kW',
    brand: 'Growatt',
    model: 'MOD 10KTL3-X',
    categoryGroup: 'solar',
    subcategory: 'Solar Inverters',
    specs: ['10kW Three Phase', 'On-Grid', 'Dual MPPT Trackers', 'Net-metering Compatible'],
    description:
      'Three-phase on-grid inverter ideal for larger homes and small commercial setups looking to offset grid electricity bills through net metering.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/solar-inverter.jpg']
  },
  {
    slug: 'osaka-lithium-battery-100ah',
    name: 'Lithium Iron Phosphate Battery 100Ah',
    brand: 'Osaka',
    model: 'LiFe 100Ah',
    categoryGroup: 'solar',
    subcategory: 'Solar Batteries',
    specs: ['100Ah LiFePO4', '12V', '6000+ Cycle Life', 'Built-in BMS'],
    description:
      'Long-life lithium battery designed for solar energy storage, offering a significantly longer lifespan than traditional lead-acid batteries.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/lithium-battery.jpg'],
    bestSeller: true
  },
  {
    slug: 'phoenix-lead-acid-battery-200ah',
    name: 'Deep Cycle Solar Battery 200Ah',
    brand: 'Phoenix',
    model: 'DC-200',
    categoryGroup: 'solar',
    subcategory: 'Solar Batteries',
    specs: ['200Ah', '12V Deep Cycle', 'Maintenance-friendly', 'Solar & UPS Compatible'],
    description:
      'Widely-used deep cycle battery for solar and UPS backup systems, built to handle repeated charge-discharge cycles common in solar setups.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/lead-acid-battery.jpg']
  },
  {
    slug: 'epever-mppt-controller-60a',
    name: 'MPPT Solar Charge Controller 60A',
    brand: 'EPEVER',
    model: 'Tracer 6415AN',
    categoryGroup: 'solar',
    subcategory: 'Solar Charge Controllers',
    specs: ['60A MPPT', '12V/24V Auto', 'LCD Display', 'RS485 Communication'],
    description:
      'High-efficiency MPPT charge controller that maximizes energy harvest from your solar panels and protects your battery bank.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/charge-controller.jpg']
  },
  {
    slug: 'pwm-charge-controller-30a',
    name: 'PWM Solar Charge Controller 30A',
    brand: 'Generic / Various',
    model: 'PWM-30A',
    categoryGroup: 'solar',
    subcategory: 'Solar Charge Controllers',
    specs: ['30A PWM', '12V/24V', 'LCD Display', 'Overload Protection'],
    description:
      'Affordable entry-level charge controller suitable for small solar setups such as single-panel lighting or fan systems.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/charge-controller.jpg']
  },
  {
    slug: 'ecoflow-power-station-portable',
    name: 'Portable Solar Power Station',
    brand: 'EcoFlow',
    model: 'DELTA Series',
    categoryGroup: 'solar',
    subcategory: 'Solar Power Stations',
    specs: ['Large Capacity Battery', 'Multiple AC/DC/USB Outputs', 'Solar Chargeable', 'Portable Design'],
    description:
      'All-in-one portable power station that can be charged via solar panels and used to run home appliances, laptops and mobile devices during load-shedding.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/power-station.jpg'],
    featured: true
  },
  {
    slug: 'solar-generator-mini-500w',
    name: 'Mini Solar Generator Kit 500W',
    brand: 'Generic / Various',
    model: 'SG-500',
    categoryGroup: 'solar',
    subcategory: 'Solar Power Stations',
    specs: ['500W Output', 'Built-in Battery', 'Solar Panel Included', 'Compact Design'],
    description:
      'Compact solar generator kit good for emergency lighting, fans and charging small electronics during power outages.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/power-station.jpg']
  },

  // ---------------------------------------------------------------------
  // SOLAR — Fans, Lights, Camping
  // ---------------------------------------------------------------------
  {
    slug: 'solar-rechargeable-ceiling-fan-56',
    name: 'Solar Rechargeable Ceiling Fan 56 inch',
    brand: 'Pak Fans',
    model: 'DC Solar 56"',
    categoryGroup: 'solar',
    subcategory: 'Solar Fans',
    specs: ['56 inch Sweep', 'DC Motor', 'Solar + Battery + Mains', 'Remote Control'],
    description:
      'Energy-efficient DC ceiling fan that runs directly on solar panels, battery backup or mains electricity — ideal during long load-shedding hours.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/ceiling-fan-solar.jpg'],
    bestSeller: true
  },
  {
    slug: 'solar-rechargeable-pedestal-fan-16',
    name: 'Solar Rechargeable Pedestal Fan 16 inch',
    brand: 'Royal',
    model: 'RSF-16',
    categoryGroup: 'solar',
    subcategory: 'Solar Fans',
    specs: ['16 inch', 'Rechargeable Battery', 'Solar Panel Included', 'LED Light Function'],
    description:
      'Portable pedestal fan with an in-built rechargeable battery, solar panel and LED light — great for homes, shops and outdoor use.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/pedestal-fan-solar.jpg']
  },
  {
    slug: 'solar-exhaust-fan-industrial',
    name: 'Solar Exhaust Fan (Industrial)',
    brand: 'Generic / Various',
    model: 'SEF-14',
    categoryGroup: 'solar',
    subcategory: 'Solar Fans',
    specs: ['14 inch Blade', 'Solar Powered', 'Weatherproof Body', 'Low Noise Operation'],
    description:
      'Solar-powered exhaust fan suitable for warehouses, poultry farms and industrial ventilation where grid power is unreliable.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/exhaust-fan.jpg']
  },
  {
    slug: 'solar-led-bulb-12w',
    name: 'Solar LED Bulb 12W with Panel',
    brand: 'Generic / Various',
    model: 'SLB-12',
    categoryGroup: 'solar',
    subcategory: 'Solar Lights',
    specs: ['12W LED', 'Mini Solar Panel Included', '6-8 Hours Backup', 'Easy Installation'],
    description:
      'Simple plug-and-play solar bulb with an attached mini panel, ideal for rooms, verandas and small shops as backup lighting.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/solar-bulb.jpg']
  },
  {
    slug: 'solar-street-light-100w',
    name: 'All-in-One Solar Street Light 100W',
    brand: 'Generic / Various',
    model: 'SSL-100',
    categoryGroup: 'solar',
    subcategory: 'Solar Street & Flood Lights',
    specs: ['100W LED', 'Integrated Solar Panel', 'Motion Sensor', 'Dusk-to-Dawn Auto On/Off'],
    description:
      'All-in-one solar street light for streets, parking areas and outdoor compounds, with automatic dusk-to-dawn operation and motion sensing.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/street-light.jpg'],
    featured: true
  },
  {
    slug: 'solar-flood-light-200w',
    name: 'Solar Flood Light 200W',
    brand: 'Generic / Various',
    model: 'SFL-200',
    categoryGroup: 'solar',
    subcategory: 'Solar Street & Flood Lights',
    specs: ['200W LED', 'Remote Control', 'IP65 Waterproof', 'Separate Solar Panel'],
    description:
      'High-output flood light for security lighting, farmhouses and outdoor event spaces, powered entirely by an included solar panel.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/flood-light.jpg']
  },
  {
    slug: 'solar-garden-light-set',
    name: 'Solar Garden Light (Set of 4)',
    brand: 'Generic / Various',
    model: 'SGL-4PK',
    categoryGroup: 'solar',
    subcategory: 'Solar Lights',
    specs: ['Set of 4', 'Warm White LED', 'Stake Mount', 'Automatic Sensor'],
    description:
      'Decorative solar garden lights that charge during the day and automatically light up pathways and lawns at night.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/garden-light.jpg']
  },
  {
    slug: 'solar-camping-lantern',
    name: 'Solar Rechargeable Camping Lantern',
    brand: 'Generic / Various',
    model: 'SCL-01',
    categoryGroup: 'solar',
    subcategory: 'Solar Camping Products',
    specs: ['Foldable Solar Panel', 'USB Charging Port', 'Multiple Brightness Modes', 'Compact & Portable'],
    description:
      'Multi-purpose camping lantern with a fold-out solar panel and USB port for charging phones — a handy companion for outdoor trips and emergencies.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/camping-lantern.jpg']
  },
  {
    slug: 'solar-emergency-light-rechargeable',
    name: 'Solar Emergency Light with Bulb Holder',
    brand: 'Generic / Various',
    model: 'SEL-9',
    categoryGroup: 'solar',
    subcategory: 'Solar Emergency Lights',
    specs: ['Rechargeable Battery', 'Solar Panel Charging', 'AC Charging Backup', 'Multiple LED Bulbs'],
    description:
      'A household emergency light that can be charged via the sun or mains electricity, giving reliable backup lighting during outages.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/emergency-light.jpg']
  },
  {
    slug: 'solar-water-pump-submersible',
    name: 'Solar Submersible Water Pump',
    brand: 'Generic / Various',
    model: 'SWP-Sub-1HP',
    categoryGroup: 'solar',
    subcategory: 'Solar Water Pumps',
    specs: ['1 HP Rated', 'DC Solar Powered', 'Submersible Design', 'Suitable for Tube Wells'],
    description:
      'Solar-powered submersible pump suitable for agricultural tube wells, livestock watering and residential water tanks.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/water-pump.jpg']
  },
  {
    slug: 'solar-water-heater-150l',
    name: 'Solar Water Heater 150 Litre',
    brand: 'Generic / Various',
    model: 'SWH-150',
    categoryGroup: 'solar',
    subcategory: 'Solar Water Heaters',
    specs: ['150 Litre Tank', 'Vacuum Tube Collector', 'Insulated Storage Tank', 'Rooftop Installation'],
    description:
      'Vacuum-tube solar water heater that provides hot water for an average household using free solar energy throughout the year.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/solar-water-heater.jpg']
  },
  {
    slug: 'solar-cctv-camera-wifi',
    name: 'Solar WiFi CCTV Camera',
    brand: 'Generic / Various',
    model: 'SCam-WiFi',
    categoryGroup: 'solar',
    subcategory: 'Solar CCTV Cameras',
    specs: ['1080p Recording', 'Solar Panel Powered', 'WiFi + App Viewing', 'Night Vision'],
    description:
      'Fully wireless, solar-powered security camera that can be installed at gates, farmhouses and remote locations without wiring.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/cctv-camera.jpg']
  },
  {
    slug: 'solar-power-bank-20000mah',
    name: 'Solar Power Bank 20,000mAh',
    brand: 'Generic / Various',
    model: 'SPB-20K',
    categoryGroup: 'solar',
    subcategory: 'Solar Mobile Chargers',
    specs: ['20,000mAh', 'Built-in Solar Panel', 'Dual USB Output', 'LED Flashlight'],
    description:
      'High-capacity power bank with a solar panel for topping up charge outdoors — useful for travel, camping and daily backup charging.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/power-bank.jpg']
  },

  // ---------------------------------------------------------------------
  // ELECTRONICS — TVs, Home Theatre, Speakers, Fans
  // ---------------------------------------------------------------------
  {
    slug: 'tcl-smart-led-tv-43',
    name: 'Smart LED TV 43 inch',
    brand: 'TCL',
    model: '43S5400',
    categoryGroup: 'electronics',
    subcategory: 'Smart TVs',
    specs: ['43 inch Full HD', 'Android Smart TV', 'Built-in WiFi', 'HDR Support'],
    description:
      'A popular entry-level smart TV in Pakistan offering streaming apps, screen mirroring and a slim modern design.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/led-tv.jpg'],
    bestSeller: true
  },
  {
    slug: 'samsung-crystal-uhd-tv-55',
    name: 'Crystal 4K UHD Smart TV 55 inch',
    brand: 'Samsung',
    model: 'CU7000',
    categoryGroup: 'electronics',
    subcategory: 'Smart TVs',
    specs: ['55 inch 4K UHD', 'Crystal Processor', 'Smart Hub', 'Multiple HDMI Ports'],
    description:
      'A premium 4K smart TV offering sharp picture quality, a clean interface, and access to popular streaming platforms.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/led-tv-large.jpg'],
    featured: true
  },
  {
    slug: 'ecostar-led-tv-32',
    name: 'LED TV 32 inch',
    brand: 'EcoStar',
    model: 'CX-32U',
    categoryGroup: 'electronics',
    subcategory: 'LED TVs',
    specs: ['32 inch HD', 'HDMI & USB Ports', 'Slim Bezel Design', 'Energy Efficient'],
    description:
      'An affordable, locally popular LED TV suitable for bedrooms, offices and secondary rooms.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/led-tv-small.jpg']
  },
  {
    slug: 'jbl-soundbar-2.1',
    name: '2.1 Channel Soundbar with Wireless Subwoofer',
    brand: 'JBL',
    model: 'Bar 2.1',
    categoryGroup: 'electronics',
    subcategory: 'Soundbars',
    specs: ['2.1 Channel', 'Wireless Subwoofer', 'Bluetooth Streaming', 'HDMI ARC'],
    description:
      'Compact soundbar and wireless subwoofer combo that upgrades TV audio with deep bass and clear dialogue.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/soundbar.jpg']
  },
  {
    slug: 'sonic-home-theater-5.1',
    name: '5.1 Channel Home Theater System',
    brand: 'Sonic',
    model: 'HT-5100',
    categoryGroup: 'electronics',
    subcategory: 'Home Theaters',
    specs: ['5.1 Channel Surround', 'Bluetooth & USB', 'Remote Control', 'Bass Boost Mode'],
    description:
      'Complete home theatre speaker set designed to fill a living room with rich surround sound for movies and music.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/home-theater.jpg']
  },
  {
    slug: 'jbl-bluetooth-speaker-flip',
    name: 'Portable Bluetooth Speaker',
    brand: 'JBL',
    model: 'Flip Series',
    categoryGroup: 'electronics',
    subcategory: 'Speakers',
    specs: ['Portable & Waterproof', 'Bluetooth 5.0', 'Long Battery Life', 'Punchy Bass'],
    description:
      'A rugged, portable Bluetooth speaker suitable for home use, outdoor gatherings and travel.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/bluetooth-speaker.jpg'],
    bestSeller: true
  },
  {
    slug: 'pak-fan-ceiling-56-electric',
    name: 'Ceiling Fan 56 inch',
    brand: 'Pak Fans',
    model: 'Model-56E',
    categoryGroup: 'electronics',
    subcategory: 'Electric Fans',
    specs: ['56 inch Sweep', 'Double Ball Bearing', 'Copper Winding', '2 Year Warranty'],
    description:
      'A dependable electric ceiling fan built for Pakistani summers, offering strong airflow and quiet operation.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/ceiling-fan-electric.jpg']
  },
  {
    slug: 'boat-earbuds-wireless',
    name: 'Wireless Earbuds',
    brand: 'boAt',
    model: 'Airdopes Series',
    categoryGroup: 'electronics',
    subcategory: 'Personal Electronics',
    specs: ['Bluetooth 5.0', 'Touch Controls', 'Charging Case Included', 'Sweat Resistant'],
    description:
      'Everyday wireless earbuds offering a secure fit, decent battery life and a compact charging case.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/wireless-earbuds.jpg']
  },

  // ---------------------------------------------------------------------
  // HOME APPLIANCES
  // ---------------------------------------------------------------------
  {
    slug: 'gree-inverter-ac-1.5ton',
    name: 'Inverter Split Air Conditioner 1.5 Ton',
    brand: 'Gree',
    model: 'Pular Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Air Conditioners',
    specs: ['1.5 Ton', 'DC Inverter', 'Heat & Cool', 'Energy Saving Mode'],
    description:
      'A widely-used inverter AC in Pakistan offering efficient cooling and heating with lower electricity consumption compared to non-inverter units.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/split-ac.jpg'],
    featured: true,
    bestSeller: true
  },
  {
    slug: 'haier-inverter-ac-1ton',
    name: 'Inverter Split Air Conditioner 1 Ton',
    brand: 'Haier',
    model: 'Flexis Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Air Conditioners',
    specs: ['1 Ton', 'DC Inverter', 'Self-Clean Function', 'Low Voltage Startup'],
    description:
      'Compact inverter AC suitable for bedrooms and small rooms, designed to start and run smoothly even during voltage fluctuations.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/split-ac.jpg']
  },
  {
    slug: 'dawlance-refrigerator-91999',
    name: 'Double Door Refrigerator',
    brand: 'Dawlance',
    model: '91999 WB',
    categoryGroup: 'home-appliances',
    subcategory: 'Refrigerators',
    specs: ['Double Door', 'No-Frost', 'Wide Freezer Space', 'Energy Saving Compressor'],
    description:
      'A popular family-size refrigerator known for reliable cooling and generous storage, well suited to Pakistani households.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/double-door-fridge.jpg'],
    bestSeller: true
  },
  {
    slug: 'pel-refrigerator-glass-door',
    name: 'Glass Door Refrigerator',
    brand: 'PEL',
    model: 'Glass Door Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Refrigerators',
    specs: ['Glass Door Display', 'No-Frost Cooling', 'LED Interior Lighting', 'Adjustable Shelves'],
    description:
      'A stylish refrigerator with a glass door display, popular for both home use and small shops or juice corners.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/glass-door-fridge.jpg']
  },
  {
    slug: 'waves-deep-freezer-single-door',
    name: 'Single Door Deep Freezer',
    brand: 'Waves',
    model: 'WDF Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Deep Freezers',
    specs: ['Single Door', 'Large Storage Capacity', 'Fast Freezing Mode', 'Lockable Lid'],
    description:
      'Spacious deep freezer suitable for households and small businesses that need reliable long-term frozen storage.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/deep-freezer.jpg']
  },
  {
    slug: 'haier-washing-machine-fully-automatic-8kg',
    name: 'Fully Automatic Washing Machine 8kg',
    brand: 'Haier',
    model: 'HW80 Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Washing Machines',
    specs: ['8kg Capacity', 'Fully Automatic Front Load', 'Multiple Wash Programs', 'Child Lock'],
    description:
      'A fully automatic front-load washing machine offering multiple wash cycles for different fabric types with minimal manual effort.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/washing-machine-auto.jpg'],
    featured: true
  },
  {
    slug: 'dawlance-washing-machine-semi-auto-10kg',
    name: 'Semi-Automatic Washing Machine 10kg',
    brand: 'Dawlance',
    model: 'DW-6100',
    categoryGroup: 'home-appliances',
    subcategory: 'Washing Machines',
    specs: ['10kg Capacity', 'Twin Tub Semi-Automatic', 'Powerful Wash Motor', 'Separate Spin Dryer'],
    description:
      'A durable, easy-to-maintain semi-automatic washing machine that remains a household favourite for its simplicity and strong performance.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/washing-machine-semi.jpg']
  },
  {
    slug: 'boss-dryer-electric',
    name: 'Electric Clothes Dryer',
    brand: 'Boss',
    model: 'KE-DRY Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Dryers',
    specs: ['Front Load Dryer', 'Multiple Heat Settings', 'Lint Filter', 'Compact Footprint'],
    description:
      'An electric dryer that helps dry clothes quickly regardless of weather, useful for busy households and monsoon season.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/clothes-dryer.jpg']
  },
  {
    slug: 'orient-air-cooler-akaza',
    name: 'Room Air Cooler',
    brand: 'Orient',
    model: 'Akaza Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Air Coolers',
    specs: ['Large Water Tank', 'Honeycomb Cooling Pads', 'Remote Control', 'Ice Chamber'],
    description:
      'A powerful evaporative air cooler designed to cool medium to large rooms efficiently, using far less electricity than an AC.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/air-cooler.jpg'],
    bestSeller: true
  },
  {
    slug: 'nasgas-water-dispenser',
    name: 'Water Dispenser with Refrigerator',
    brand: 'Nasgas',
    model: 'NWD-Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Water Dispensers',
    specs: ['Hot & Cold Function', 'Mini Refrigerator Compartment', 'Compressor Cooling', 'Compact Design'],
    description:
      'A convenient water dispenser with an added small refrigerator compartment for chilling snacks and drinks.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/water-dispenser.jpg']
  },
  {
    slug: 'kenwood-water-cooler',
    name: 'Electric Water Cooler',
    brand: 'Kenwood',
    model: 'KWC Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Water Coolers',
    specs: ['Large Tank Capacity', 'Fast Cooling Compressor', 'Durable Steel Body', 'Tap Dispenser'],
    description:
      'Ideal for offices, mosques and larger households that need continuously cool drinking water throughout the day.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/water-cooler.jpg']
  },
  {
    slug: 'canon-geyser-instant',
    name: 'Instant Electric Geyser',
    brand: 'Canon',
    model: 'Instant Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Geysers',
    specs: ['Instant Heating', 'Compact Wall-Mount', 'Safety Cut-off', 'Energy Efficient'],
    description:
      'A space-saving instant geyser that provides hot water on demand, popular for kitchens and small bathrooms.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/geyser.jpg']
  },
  {
    slug: 'westpoint-vacuum-cleaner',
    name: 'Vacuum Cleaner',
    brand: 'Westpoint',
    model: 'WF-3469',
    categoryGroup: 'home-appliances',
    subcategory: 'Vacuum Cleaners',
    specs: ['Powerful Suction Motor', 'Dust Bag + Filter', 'Lightweight Body', 'Multiple Attachments'],
    description:
      'A practical vacuum cleaner for everyday home cleaning, with attachments for carpets, upholstery and tight corners.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/vacuum-cleaner.jpg']
  },
  {
    slug: 'philips-steam-iron',
    name: 'Steam Iron',
    brand: 'Philips',
    model: 'EasySpeed Series',
    categoryGroup: 'home-appliances',
    subcategory: 'Irons',
    specs: ['Steam & Dry Ironing', 'Non-stick Soleplate', 'Anti-drip System', 'Adjustable Thermostat'],
    description:
      'A reliable everyday steam iron that glides smoothly and removes creases quickly from everyday fabrics.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/steam-iron.jpg']
  },
  {
    slug: 'gfc-pedestal-fan',
    name: 'Pedestal Fan 18 inch',
    brand: 'GFC',
    model: 'PF-18',
    categoryGroup: 'home-appliances',
    subcategory: 'Fans',
    specs: ['18 inch Blade', 'Adjustable Height', '3 Speed Settings', 'Oscillating Function'],
    description:
      'A sturdy pedestal fan for home and office use, offering strong airflow with adjustable height and oscillation.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/pedestal-fan-electric.jpg']
  },

  // ---------------------------------------------------------------------
  // KITCHEN APPLIANCES
  // ---------------------------------------------------------------------
  {
    slug: 'dawlance-microwave-oven-solo',
    name: 'Solo Microwave Oven',
    brand: 'Dawlance',
    model: 'DW-115S',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Microwave Ovens',
    specs: ['20L Capacity', 'Solo Function', 'Multiple Power Levels', 'Easy-clean Interior'],
    description:
      'A compact solo microwave oven ideal for reheating and basic cooking in small to medium kitchens.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/microwave-solo.jpg'],
    bestSeller: true
  },
  {
    slug: 'homage-microwave-oven-grill',
    name: 'Grill Microwave Oven',
    brand: 'Homage',
    model: 'HDG Series',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Microwave Ovens',
    specs: ['25L Capacity', 'Grill + Microwave Function', 'Digital Display', 'Multiple Auto Menus'],
    description:
      'A versatile microwave with a grilling function, suitable for baking, grilling and everyday reheating tasks.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/microwave-grill.jpg']
  },
  {
    slug: 'westpoint-built-in-oven',
    name: 'Built-in Baking Oven',
    brand: 'Westpoint',
    model: 'WBO Series',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Built-in Ovens',
    specs: ['Built-in Design', 'Multiple Heating Modes', 'Rotisserie Function', 'Large Capacity'],
    description:
      'A built-in oven suitable for modern kitchen setups, offering multiple cooking modes for baking and roasting.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/built-in-oven.jpg']
  },
  {
    slug: 'anex-air-fryer-4l',
    name: 'Digital Air Fryer 4L',
    brand: 'Anex',
    model: 'AG-2018',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Air Fryers',
    specs: ['4 Litre Basket', 'Digital Touch Panel', 'Oil-free Frying', 'Preset Cooking Programs'],
    description:
      'A popular air fryer that lets you enjoy crispy fried food using little to no oil, with simple digital controls.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/air-fryer.jpg'],
    featured: true,
    bestSeller: true
  },
  {
    slug: 'kenwood-juicer-blender-combo',
    name: 'Juicer Blender Combo',
    brand: 'Kenwood',
    model: 'JB Series',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Juicers',
    specs: ['Juicer + Blender Jars', 'Powerful Motor', 'Stainless Steel Blades', 'Multiple Speed Settings'],
    description:
      'A 2-in-1 kitchen machine that handles both juicing and blending tasks, a practical choice for everyday kitchens.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/juicer-blender.jpg']
  },
  {
    slug: 'panasonic-blender-mx',
    name: 'Mixer Grinder Blender',
    brand: 'Panasonic',
    model: 'MX-Series',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Blenders',
    specs: ['Multiple Jars Included', 'Heavy-duty Motor', 'Stainless Steel Blades', '3 Speed Settings'],
    description:
      'A dependable blender and grinder combo suitable for daily kitchen tasks like chutneys, smoothies and masalas.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/blender-grinder.jpg']
  },
  {
    slug: 'anex-chopper-electric',
    name: 'Electric Vegetable Chopper',
    brand: 'Anex',
    model: 'AG-3049',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Choppers',
    specs: ['Compact Bowl', 'One-touch Operation', 'Stainless Steel Blades', 'Easy to Clean'],
    description:
      'A small, efficient chopper that saves time on everyday chopping tasks like onions, garlic and vegetables.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/vegetable-chopper.jpg']
  },
  {
    slug: 'kenwood-food-processor',
    name: 'Food Processor',
    brand: 'Kenwood',
    model: 'FP Series',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Food Processors',
    specs: ['Multiple Attachments', 'Large Bowl Capacity', 'Powerful Motor', 'Dough & Slicing Function'],
    description:
      'A multi-function food processor that handles chopping, slicing, grating and kneading, cutting down kitchen prep time.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/food-processor.jpg']
  },
  {
    slug: 'philips-electric-kettle',
    name: 'Electric Kettle 1.7L',
    brand: 'Philips',
    model: 'HD9350',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Electric Kettles',
    specs: ['1.7 Litre Capacity', 'Auto Shut-off', 'Cordless Design', 'Fast Boil Element'],
    description:
      'A fast-boiling electric kettle that has become a kitchen essential for tea, coffee and quick hot water needs.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/electric-kettle.jpg'],
    bestSeller: true
  },
  {
    slug: 'anex-sandwich-maker',
    name: 'Sandwich Maker',
    brand: 'Anex',
    model: 'AG-1035',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Sandwich Makers',
    specs: ['Non-stick Plates', 'Indicator Lights', 'Cool-touch Handle', 'Compact Storage'],
    description:
      'A simple, reliable sandwich maker for quick breakfasts and snacks, with non-stick plates for easy cleaning.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/sandwich-maker.jpg']
  },
  {
    slug: 'westpoint-coffee-maker',
    name: 'Automatic Coffee Maker',
    brand: 'Westpoint',
    model: 'WF-2244',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Coffee Makers',
    specs: ['Automatic Drip Brewing', 'Glass Carafe', 'Keep-warm Function', 'Compact Design'],
    description:
      'An easy-to-use drip coffee maker that brews a full pot in minutes and keeps it warm for later.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/coffee-maker.jpg']
  },
  {
    slug: 'nasgas-electric-stove-double',
    name: 'Double Burner Electric Stove',
    brand: 'Nasgas',
    model: 'NG-Electric',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Electric Stoves',
    specs: ['Double Hot Plate', 'Adjustable Heat Control', 'Compact & Portable', 'Indicator Light'],
    description:
      'A practical backup or primary electric stove for kitchens looking for a gas-free cooking option.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/electric-stove.jpg']
  },
  {
    slug: 'homage-kitchen-hood-hob-set',
    name: 'Kitchen Hood & Hob Set',
    brand: 'Homage',
    model: 'HKH Series',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Kitchen Hoods & Hobs',
    specs: ['Auto-clean Hood', 'Built-in Glass Hob', 'Powerful Suction', 'Modern Design'],
    description:
      'A matching hood and hob set designed for modern modular kitchens, combining strong suction with a sleek glass cooktop.',
    price: null,
    oldPrice: null,
    availability: 'Order on Demand',
    images: ['/images/products/kitchen-hood.jpg']
  },
  {
    slug: 'anex-toaster-2-slice',
    name: '2-Slice Pop-up Toaster',
    brand: 'Anex',
    model: 'AG-3020',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Toasters',
    specs: ['2 Slice Capacity', 'Adjustable Browning Control', 'Removable Crumb Tray', 'Auto Pop-up'],
    description:
      'A compact everyday toaster for quick breakfasts, with adjustable browning levels for different bread types.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/pop-up-toaster.jpg']
  },
  {
    slug: 'kenwood-grinder-mill',
    name: 'Dry & Wet Grinder Mill',
    brand: 'Kenwood',
    model: 'GM Series',
    categoryGroup: 'kitchen-appliances',
    subcategory: 'Grinders',
    specs: ['Dry & Wet Grinding Jars', 'Heavy-duty Motor', 'Stainless Steel Blades', 'Compact Footprint'],
    description:
      'A strong grinder mill for spices, lentils and wet grinding tasks common in Pakistani kitchens.',
    price: null,
    oldPrice: null,
    availability: 'In Stock',
    images: ['/images/products/grinder-mill.jpg']
  }
]

// ---------------------------------------------------------------------------
// DEAL PRICING — clearly-marked sample data for the Deals page and homepage
// discount badges. These numbers are illustrative placeholders only
// (priceIsDemo: true). Replace with verified, real prices before launch —
// until then the UI shows an "Indicative price" note automatically.
// ---------------------------------------------------------------------------
const dealOverrides = {
  'gree-inverter-ac-1.5ton': { price: 189500, oldPrice: 215000 },
  'haier-inverter-ac-1ton': { price: 132000, oldPrice: 149000 },
  'dawlance-refrigerator-91999': { price: 98500, oldPrice: 112000 },
  'anex-air-fryer-4l': { price: 14900, oldPrice: 18500 },
  'philips-electric-kettle': { price: 4200, oldPrice: 5100 },
  'orient-air-cooler-akaza': { price: 32500, oldPrice: 38000 },
  'osaka-lithium-battery-100ah': { price: 62000, oldPrice: 71000 },
  'solar-rechargeable-ceiling-fan-56': { price: 12800, oldPrice: 15500 },
  'jbl-bluetooth-speaker-flip': { price: 15900, oldPrice: 19900 },
  'haier-washing-machine-fully-automatic-8kg': { price: 84500, oldPrice: 96000 },
  'tcl-smart-led-tv-43': { price: 66500, oldPrice: 74500 },
  'dawlance-microwave-oven-solo': { price: 17900, oldPrice: 21500 }
}

export const productsWithDeals = products.map((p) =>
  dealOverrides[p.slug]
    ? { ...p, ...dealOverrides[p.slug], priceIsDemo: true, deal: true }
    : p
)

export function getAllProducts() {
  return productsWithDeals
}

export function getProductBySlug(slug) {
  return productsWithDeals.find((p) => p.slug === slug)
}

export function getProductsByCategory(categoryGroup) {
  return productsWithDeals.filter((p) => p.categoryGroup === categoryGroup)
}

export function getFeaturedProducts() {
  return productsWithDeals.filter((p) => p.featured)
}

export function getBestSellers() {
  return productsWithDeals.filter((p) => p.bestSeller)
}

export function getDeals() {
  return productsWithDeals.filter((p) => p.deal)
}

export function getRelatedProducts(product, limit = 4) {
  return productsWithDeals
    .filter((p) => p.slug !== product.slug && p.categoryGroup === product.categoryGroup)
    .slice(0, limit)
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return productsWithDeals.filter((p) => {
    const haystack = `${p.name} ${p.brand} ${p.model || ''} ${p.subcategory} ${p.categoryGroup}`.toLowerCase()
    return haystack.includes(q)
  })
}
