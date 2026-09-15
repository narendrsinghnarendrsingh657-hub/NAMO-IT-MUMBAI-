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
  }
]

export default products
