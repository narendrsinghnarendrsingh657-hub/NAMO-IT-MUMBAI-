# NAMO IT MUMBAI — Website

A responsive business website for NAMO IT MUMBAI (laptop spare parts, components
and accessories). Built with React, Vite and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Where things live

- `src/data/products.js` — the product catalogue. Add new products here; the
  site is built to handle hundreds of entries without any code changes.
- `src/data/categories.js` — the category cards shown in the "Laptop Parts"
  section.
- `src/data/site.js` — business details (name, phone, WhatsApp number, nav
  links, brand list, filter lists).
- `public/images/parts/` — placeholder SVG illustrations used for category and
  product images. Swap these for real photos by adding image files to
  `public/images/` and updating the `image` path on each product/category.
- `src/components/` — each section of the page (Navbar, Hero, About,
  Categories, Products, Brands, WhyChooseUs, Contact, Footer, FloatingButtons).
- `src/pages/` — `Home.jsx` composes all sections; `NotFound.jsx` is the 404
  page for unmatched routes.

## Adding a product

Open `src/data/products.js` and add an object to the `products` array:

```js
{
  id: 'namo-0005',
  name: 'Lenovo Laptop Keyboard',
  brand: 'Lenovo',
  model: 'ThinkPad Series',
  category: 'keyboard',
  image: '/images/parts/keyboard.svg',
  description: 'Replacement keyboard. Confirm exact model on WhatsApp.',
  availability: 'In Stock'
}
```

`category` must match one of the `id` values in `src/data/categories.js`.
No prices are shown anywhere — every product card links to a pre-filled
WhatsApp enquiry instead.

## WhatsApp number

The WhatsApp number is set once in `src/data/site.js` (`BUSINESS.phoneIntl`)
and used everywhere — navbar, hero, product cards, floating button and
contact section.
