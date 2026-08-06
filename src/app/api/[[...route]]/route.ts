import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge';

const app = new Hono().basePath('/api/v1')

// --- Products ---
app.get('/products', (c) => {
  // Mocked for UI development
  return c.json({
    data: [
      {
        id: '1',
        title: 'Bordeaux Noir',
        slug: 'bordeaux-noir',
        description: 'A deep, high-gloss pinot noir red that drips with luxury.',
        price: 85.00,
        swatchHex: '#5B1217',
        images: ['https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80'],
        shapes: ['Almond', 'Coffin', 'Square'],
        lengths: ['Short', 'Medium', 'Long'],
        finish: 'Gloss',
        collection: 'Signature',
        customizable: false
      },
      {
        id: '2',
        title: 'Taupe Chrome',
        slug: 'taupe-chrome',
        description: 'Muted chrome finish reflecting a sophisticated edge.',
        price: 95.00,
        swatchHex: '#8C7A70',
        images: ['https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?w=800&q=80'],
        shapes: ['Stiletto', 'Almond'],
        lengths: ['Medium', 'Long', 'Extra Long'],
        finish: 'Chrome',
        collection: 'Avant-Garde',
        customizable: true
      },
      {
        id: '3',
        title: 'Gilded Foil',
        slug: 'gilded-foil',
        description: 'Textured gold leaf pressed onto a sheer natural base.',
        price: 115.00,
        swatchHex: '#D4AF37',
        images: ['https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80'],
        shapes: ['Coffin', 'Square'],
        lengths: ['Medium', 'Long'],
        finish: 'Textured',
        collection: 'Limited',
        customizable: false
      }
    ]
  })
})

app.get('/products/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.json({ slug, message: "Product details mock" })
})

// --- Custom Orders ---
app.post('/custom-orders', async (c) => {
  const body = await c.req.json()
  // Mock inserting into D1
  return c.json({ success: true, id: 'co_12345', status: 'submitted' })
})

app.get('/custom-orders/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, status: 'in_design', message: 'Order is being reviewed by our artists.' })
})

// --- Checkout ---
app.post('/checkout', async (c) => {
  // Mock Stripe checkout session creation
  return c.json({ url: 'https://checkout.stripe.com/mock' })
})

app.post('/webhooks/stripe', async (c) => {
  // Mock Stripe webhook handler
  return c.json({ received: true })
})

// --- Reviews ---
app.get('/reviews/:productId', (c) => {
  const productId = c.req.param('productId')
  return c.json({
    data: [
      { id: '1', customerName: 'Eleanor', rating: 5, comment: 'Absolutely stunning. They look like acrylics!', verified: true },
      { id: '2', customerName: 'Sophia', rating: 4, comment: 'Beautiful packaging and fit.', verified: true }
    ]
  })
})

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
