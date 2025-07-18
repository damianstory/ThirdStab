# Next.js Starter Template

A minimal Next.js starter template with TypeScript and Tailwind CSS.

## Features

- **Next.js 14** - The React framework for production
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **App Router** - Next.js App Router for modern routing
- **Fast Refresh** - Instant feedback during development

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone this repository:

```bash
git clone <your-repo-url>
cd nextjs-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── public/             # Static files
├── src/
│   └── app/           # App router pages and layouts
│       ├── layout.tsx # Root layout
│       ├── page.tsx   # Home page
│       └── globals.css # Global styles
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.