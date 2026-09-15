export const BUSINESS = {
  name: 'NAMO IT MUMBAI',
  tagline: 'DRIVEN BY QUALITY, POWERED BY TRUST',
  city: 'Mumbai, Maharashtra, India',
  phone: '9892814478',
  phoneIntl: '919892814478',
  footerLine: 'THE HOUSE OF TECHNOLOGY',
  owner: 'PARVEEN JAIN',
  manager: 'RAVI SINGH'
}

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.phoneIntl}`

export function whatsappLink(message) {
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `${WHATSAPP_BASE}${text}`
}

export function productEnquiryLink(product) {
  const message = `Hello NAMO IT MUMBAI, I am looking for ${product.name} for ${product.model}. Please share availability and details.`
  return whatsappLink(message)
}

export const CALL_LINK = `tel:+${BUSINESS.phoneIntl}`

export const BRANDS = ['HP', 'Lenovo', 'Dell', 'Acer', 'ASUS']
export const BRAND_FILTERS = ['HP', 'Lenovo', 'Dell', 'Acer', 'ASUS', 'Other']
export const PART_TYPE_FILTERS = [
  'Top Panel',
  'Base Panel',
  'C Panel',
  'Bezel',
  'Fan',
  'Speaker',
  'Display Cable',
  'Keyboard',
  'Touchpad',
  'Other'
]

export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Laptop Parts', href: '/#categories' },
  { label: 'Brands', href: '/#brands' },
  { label: 'Contact', href: '/#contact' }
]
