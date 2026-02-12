# Neiman Landscaping - Next.js Business Template

A production-ready Next.js 14 landscaping business website template featuring a modern dark theme with Mediterranean colors (terracotta + teal), custom landscaping icons, and comprehensive SEO optimization.

## 🌳 Live Demo

- **Local Dev Server:** http://localhost:3005
- **Production:** https://neimanlandscaping.com

## ✨ Features

- 🎨 **Mediterranean Color Scheme** - Burnt terracotta primary (#C65D3B) with teal accents (#5FB3B3)
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 App Router and optimized images
- 🎭 **Smooth Animations** - Framer Motion for professional transitions
- 🎯 **SEO Optimized** - Meta tags, structured data, sitemap
- 🗺️ **Google Maps** - Integrated location map
- 🖼️ **Image Gallery** - Showcase your landscaping projects
- 🎨 **Custom Icons** - Landscaping-themed SVG icons (PottedPlant, Palmtree, Rake, Shovel, Cactus)
- 📧 **Contact Forms** - Easy client communication
- ⭐ **Customer Reviews** - Display ratings and testimonials
- 🔧 **Easy Customization** - Single config file for all business info

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/pneiman1/landscaping-template.git
cd landscaping-template
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3005
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_BUSINESS_NAME=Neiman Landscaping
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser:**
Navigate to [http://localhost:3005](http://localhost:3005)

## 🎨 Customization

### Business Information

All business details are centralized in `config/site.ts`:

```typescript
export const siteConfig = {
  business: {
    name: "Neiman Landscaping",
    tagline: "Premium Landscaping Services",
    description: "Your business description here",
    address: {
      street: "4600 Lamont St",
      city: "San Diego",
      state: "CA",
      zip: "92109",
    },
    phone: "(000) 123-4567",
    email: "info@neimanlandscaping.com",
    hours: {
      monday: "9:00 AM - 7:00 PM",
      // ... other days
    },
  },
  domain: "neimanlandscaping.com",
  url: "https://neimanlandscaping.com",
  services: [
    {
      id: "lawn-maintenance",
      name: "Lawn Maintenance",
      description: "Regular mowing, edging, and trimming...",
      price: "$80",
      duration: "Weekly",
      popular: true,
    },
    // ... more services
  ],
  social: {
    instagram: "",
    facebook: "",
    yelp: "",
  },
};
```

### Color Scheme

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#C65D3B',  // Burnt terracotta
    600: '#A0522D',
    700: '#8B4513',
  },
  accent: {
    500: '#E07A5F',  // Lighter terracotta
    600: '#CC5500',
  },
}
```

Teal accents are hardcoded as `#5FB3B3` for buttons and prices.

### Images

Replace images in `public/images/` with your own:
- `AdobeStock_1199248650.jpeg` - Hero background
- `AdobeStock_252563724.jpeg` - Gallery image 1
- `AdobeStock_964977387.jpeg` - Gallery image 2
- `AdobeStock_983618194.jpeg` - Gallery image 3

## 📁 Project Structure

```
landscaping-template/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── animations/          # Framer Motion animations
│   │   ├── FadeIn.tsx
│   │   └── ScrollReveal.tsx
│   ├── icons/               # Custom SVG icons
│   │   ├── PottedPlant.tsx
│   │   ├── Palmtree.tsx (from lucide-react)
│   │   ├── Rake.tsx
│   │   ├── Shovel.tsx
│   │   └── Cactus.tsx
│   ├── layout/              # Header, Footer
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   ├── Location.tsx
│   │   ├── Contact.tsx
│   │   └── Reviews.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       └── Map.tsx
├── config/
│   └── site.ts              # Business configuration (EDIT THIS!)
├── lib/
│   ├── constants.ts         # Navigation links
│   ├── structured-data.ts   # SEO structured data
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Static images
├── tailwind.config.ts       # Tailwind CSS config
└── package.json             # Dependencies
```

## 🛠️ Technologies

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Google Fonts (Lato, Montserrat)
- **Icons:** Lucide React + Custom SVG
- **SEO:** Next.js Metadata API + JSON-LD

## 📦 Available Scripts

```bash
npm run dev          # Start development server (port 3005)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in `.next/` directory. Follow your hosting provider's Next.js deployment guide.

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://neimanlandscaping.com
NEXT_PUBLIC_BUSINESS_NAME=Neiman Landscaping

# Google Maps (Optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 SEO Configuration

The template includes:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Sitemap generation
- ✅ Robots.txt

Update SEO keywords in `config/site.ts`:
```typescript
seo: {
  keywords: [
    "landscaping san diego",
    "lawn care san diego",
    "landscape design",
    // ... more keywords
  ],
}
```

## 🎨 Color Scheme Reference

### Primary Colors (Terracotta)
- `#C65D3B` - Burnt terracotta (primary-500)
- `#A0522D` - Darker terracotta (primary-600)
- `#8B4513` - Darkest terracotta (primary-700)

### Accent Colors
- `#E07A5F` - Light terracotta (accent-500)
- `#5FB3B3` - Teal (buttons, prices)

### Background
- `#0a0a0a` - Main background
- `#121212` - Secondary background

## 📄 License

MIT License - feel free to use this template for your landscaping business.

## 🤝 Support

For issues or questions:
- Create an issue on GitHub
- Email: info@neimanlandscaping.com

## 🔄 Pulling Updates on a New Machine

```bash
# Clone the repository
git clone https://github.com/pneiman1/landscaping-template.git
cd landscaping-template

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run the development server
npm run dev
```

---

Built with ❤️ using Next.js 14 | Co-Authored-By: Claude Sonnet 4.5
