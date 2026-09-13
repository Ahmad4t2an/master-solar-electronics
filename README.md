# Master Solar & Electronics

A frontend-only ecommerce storefront for Master Solar & Electronics (solar
products + home & kitchen electronics), built with React, Vite and Tailwind
CSS. Ordering happens entirely through WhatsApp — there is no backend,
database, authentication or payment integration.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to /dist)
npm run preview    # preview the production build locally
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. No environment variables are required.
4. `vercel.json` is already included so client-side routes (e.g.
   `/product/some-item`) work correctly on refresh/direct link.

## Editing content

- **Products** — `src/data/products.js`. Each product is a plain object;
  add, remove or edit entries directly. Prices left as `null` automatically
  display "Price on WhatsApp". A handful of items have illustrative demo
  discount pricing (`priceIsDemo: true`) used to populate the Deals page —
  replace these with verified real prices before launch.
- **Categories & subcategories** — `src/data/categories.js`.
- **Solar packages** — `src/data/packages.js` (marked `isSample: true`;
  replace with your real package specs).
- **Contact details / WhatsApp number** — `src/utils/whatsapp.js`.
- **Logo** — `src/assets/logo.png` (the original uploaded logo; swap the
  file to update it everywhere it's used).

## Product photos

Products ship with placeholder artwork (a clean icon tile) until you add
real photos. To add a photo, put an image URL (or a file under `public/`)
into a product's `images: []` array in `src/data/products.js`, e.g.
`images: ['/products/solar-panel-585w.jpg']`.

## Notes

- All "Order on WhatsApp" / "Add to Cart" flows generate a pre-filled
  WhatsApp message to `+92 345 7286042`.
- The cart is a frontend-only experience (stored in the browser via
  `localStorage`) that culminates in a WhatsApp message — there is no
  real checkout or payment processing.
