// ---------------------------------------------------------------------------
// Product catalogue for NAMO IT MUMBAI.
// This file is designed to scale to hundreds of products — just keep adding
// objects to the `products` array below in the same shape.
//
// Fields:
//   id            unique string, e.g. 'namo-0005'
//   name          product name shown on the card
//   brand         one of: HP, Lenovo, Dell, Acer, ASUS, Other
//   model         laptop model / series the part fits (string, can be "Multiple Models")
//   category      must match an `id` from src/data/categories.js
//   image         path to product image (place files in public/images/parts or public/images/products)
//   description   one or two line plain-language description, no invented specs
//   availability  'In Stock' | 'Limited Stock' | 'On Order'
// ---------------------------------------------------------------------------

const products = [
  {
    id: 'namo-0001',
    name: 'HP Laptop Speaker',
    brand: 'HP',
    model: 'Multiple HP Models',
    category: 'speaker',
    image: '/images/parts/speaker.svg',
    description: 'Internal speaker unit for HP laptops. Please share your exact HP model on WhatsApp to confirm compatibility.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0002',
    name: 'Laptop Cooling Fan',
    brand: 'Other',
    model: 'Multiple Models',
    category: 'fan',
    image: '/images/parts/fan.svg',
    description: 'Replacement cooling fan to help manage laptop heat. Share your laptop model for the correct fit.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0003',
    name: 'Laptop Display Cable',
    brand: 'Other',
    model: 'Multiple Models',
    category: 'display-cable',
    image: '/images/parts/display-cable.svg',
    description: 'Video/display cable connecting the screen to the motherboard. Confirm your model for exact fitment.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0004',
    name: 'Laptop Top Panel',
    brand: 'Other',
    model: 'Multiple Models',
    category: 'top-panel',
    image: '/images/parts/top-panel.svg',
    description: 'Replacement top cover / lid panel. Send your laptop model and colour on WhatsApp for availability.',
    availability: 'Limited Stock'
  }},
  {
    id: 'namo-0005',
    name: 'Laptop Top Panel',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'top-panel',
    image: '/images/parts/top-panel.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0006',
    name: 'Laptop Bezel',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'bezel',
    image: '/images/parts/bezel.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0007',
    name: 'Laptop C Panel',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'c-panel',
    image: '/images/parts/c-panel.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0008',
    name: 'Laptop Base Panel',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'base-panel',
    image: '/images/parts/base-panel.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0009',
    name: 'Laptop C Panel + Keyboard',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'c-panel-keyboard',
    image: '/images/parts/other-parts.svg',
    description: 'Combined palmrest and keyboard unit. Available for all major brands. Share your exact model on WhatsApp.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0010',
    name: 'Laptop Trackpad',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'touchpad',
    image: '/images/parts/touchpad.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0011',
    name: 'Laptop Touchpad Clicks',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'touchpad-clicks',
    image: '/images/parts/other-parts.svg',
    description: 'Click buttons for the touchpad. Available for all major brands. Share your exact model on WhatsApp.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0012',
    name: 'Laptop Fan',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'fan',
    image: '/images/parts/fan.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0013',
    name: 'Laptop Speaker',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'speaker',
    image: '/images/parts/speaker.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0014',
    name: 'Laptop Display Cable',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'display-cable',
    image: '/images/parts/display-cable.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0015',
    name: 'Laptop On/Off Switch',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'power-switch',
    image: '/images/parts/other-parts.svg',
    description: 'Power button switch. Available for all major brands. Share your exact model on WhatsApp.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0016',
    name: 'Laptop DC Jack',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'dc-jack',
    image: '/images/parts/other-parts.svg',
    description: 'Charging port / DC jack. Available for all major brands. Share your exact model on WhatsApp.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0017',
    name: 'Laptop Hinges',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'hinges',
    image: '/images/parts/hinges.svg',
    description: 'Available for all major brands. Share your exact model on WhatsApp for confirmation.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0018',
    name: 'Laptop Hinges Cap',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'hinges-cap',
    image: '/images/parts/other-parts.svg',
    description: 'Hinge cover caps. Available for all major brands. Share your exact model on WhatsApp.',
    availability: 'In Stock'
  },
  {
    id: 'namo-0019',
    name: 'Laptop Webcam (Camera)',
    brand: 'HP, Dell, Lenovo, Acer, ASUS, MSI, Toshiba, Samsung',
    model: 'All Models',
    category: 'webcam',
    image: '/images/parts/other-parts.svg',
    description: 'Internal webcam module. Available for all major brands. Share your exact model on WhatsApp.',
    availability: 'In Stock'
  }
]

export default products
