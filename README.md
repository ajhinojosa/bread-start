# Bread Start

A modern, cozy website for a sourdough starter business operating under Oregon cottage law in Central Oregon.

## Design System

### Color Palette (High Desert & Cozy Farmhouse)
- **Desert Sage**: `#8B9D83` - Primary green, inspired by high desert sage
- **Warm Clay**: `#C89F7B` - Secondary warm tone
- **Deep Earth**: `#5C4F3D` - Text and heading color
- **Soft Cream**: `#F7F3ED` - Background color
- **Juniper Green**: `#647259` - Accent color
- **Sunset Rust**: `#B27B5E` - CTA buttons and highlights
- **Stone Gray**: `#9B9B9B` - Muted text

### Typography
- **Headings**: Georgia (serif) - Classic, warm, trustworthy
- **Body**: System UI fonts - Clean, readable, modern

### Design Philosophy
- **Modern Farmhouse**: Clean lines with warm, natural colors
- **High Desert Inspired**: Sage greens and warm earth tones reflect Central Oregon's landscape
- **Approachable**: Simple, friendly design that welcomes beginners and pros alike
- **Mobile-First**: Fully responsive design that works beautifully on all devices

## Pages

### Homepage (`index.html`)
- Hero section with clear call-to-action
- Three-column feature section highlighting key benefits
- About section explaining the business
- Final CTA driving to product page

### Product Page (`product.html`)
- Large product display area
- Three quantity options (Starter Kit, Baker's Choice, Pro Pack)
- Delivery method selection
- Clear pricing and descriptions
- Order button with JavaScript validation

### FAQ Page (`faq.html`)
- Organized into four categories:
  - Delivery & Ordering
  - Starter Care
  - Baking
  - About
- Clean, scannable layout
- Comprehensive answers to common questions

## Deployment to Vercel

### Prerequisites
1. Vercel account (sign up at [vercel.com](https://vercel.com))
2. Vercel CLI installed: `npm install -g vercel`

### Quick Deploy

```bash
cd bread-start
vercel
```

Follow the prompts:
1. Set up and deploy? **Y**
2. Which scope? Choose your account
3. Link to existing project? **N**
4. Project name? **bread-start** (or your choice)
5. Directory? **.** (current directory)
6. Want to modify settings? **N**

Your site will be live in seconds!

### Custom Domain
After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Future Enhancements

### Payment Integration
- Add Stripe or Square for online payments
- Implement order form submission

### Contact Form
- Add email notification system
- Collect customer information

### Image Gallery
- Add photos of actual starter, bread, and process
- Consider Instagram feed integration

### Blog/Resources
- Add sourdough tips and recipes
- Share baking journey stories

## Image Recommendations

When adding real photos, use:
- **Hero image**: Beautiful rustic bread on wooden board with soft morning light
- **Product images**: Clean, well-lit jar of active starter, showing bubbles
- **Feature icons**: Consider custom illustrations of mountains, delivery van, starter jar
- **About section**: Candid photo of you feeding/preparing starter
- **Background patterns**: Subtle textures like linen or flour-dusted surfaces

## Local Development

To test locally:
```bash
# Simple HTTP server
python -m http.server 8000
# Or
npx serve
```

Then visit `http://localhost:8000`

## Support

For questions or help with customization, refer to:
- Vercel docs: https://vercel.com/docs
- HTML/CSS guides: https://developer.mozilla.org/

---

Made with ❤️ for artisan bakers in Central Oregon
