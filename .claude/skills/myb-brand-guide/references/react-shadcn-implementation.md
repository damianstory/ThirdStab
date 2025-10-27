# myBlueprint React & shadcn Implementation

React components and shadcn/ui configuration for myBlueprint brand.

## shadcn/ui Configuration

### Theme Configuration

```typescript
// lib/theme.ts
export const mybTheme = {
  colors: {
    border: "hsl(221, 26%, 89%)",      // Neutral 2
    input: "hsl(221, 26%, 89%)",       // Neutral 2
    ring: "hsl(207, 100%, 50%)",       // Primary Blue
    background: "hsl(240, 100%, 98%)", // Off White
    foreground: "hsl(237, 30%, 23%)",  // Navy
    primary: {
      DEFAULT: "hsl(207, 100%, 50%)",  // Primary Blue
      foreground: "hsl(0, 0%, 100%)",
    },
    secondary: {
      DEFAULT: "hsl(220, 18%, 92%)",   // Neutral 1
      foreground: "hsl(237, 30%, 23%)",
    },
    muted: {
      DEFAULT: "hsl(220, 26%, 89%)",   // Neutral 2
      foreground: "hsl(217, 15%, 46%)", // Neutral 4
    },
    accent: {
      DEFAULT: "hsl(205, 100%, 89%)",  // Light Blue
      foreground: "hsl(237, 30%, 23%)",
    },
  },
  radius: "0.5rem", // 8px
}
```

### CSS Variables

```css
/* app/globals.css */
@layer base {
  :root {
    --background: 240 100% 98%;
    --foreground: 237 30% 23%;

    --card: 0 0% 100%;
    --card-foreground: 237 30% 23%;

    --popover: 0 0% 100%;
    --popover-foreground: 237 30% 23%;

    --primary: 207 100% 50%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 18% 92%;
    --secondary-foreground: 237 30% 23%;

    --muted: 220 26% 89%;
    --muted-foreground: 217 15% 46%;

    --accent: 205 100% 89%;
    --accent-foreground: 237 30% 23%;

    --border: 221 26% 89%;
    --input: 221 26% 89%;
    --ring: 207 100% 50%;

    --radius: 0.5rem;
  }
}
```

## Component Examples

### Button Component

```tsx
// components/myb-button.tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MyBButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export function MyBButton({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: MyBButtonProps) {
  const variants = {
    primary: "bg-[#0092FF] text-white hover:bg-[#0080E6] shadow-sm hover:shadow-[0_4px_12px_rgba(0,146,255,0.3)]",
    secondary: "bg-white text-[#22224C] border-2 border-[#D9DFEA] hover:border-[#0092FF]",
    ghost: "text-[#0092FF] hover:bg-[#C6E7FF]/20"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <Button
      className={cn(
        "font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
```

### Card Component

```tsx
// components/myb-card.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function MyBCard({
  title,
  subtitle,
  children,
  featured = false,
  className
}: {
  title?: string
  subtitle?: string
  children: React.ReactNode
  featured?: boolean
  className?: string
}) {
  return (
    <Card className={cn(
      "border-[#D9DFEA] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(34,34,76,0.1)]",
      featured && "bg-gradient-to-br from-[#C6E7FF] to-white border-2 border-[#0092FF]",
      className
    )}>
      {(title || subtitle) && (
        <CardHeader>
          {subtitle && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#0092FF]">
              {subtitle}
            </span>
          )}
          {title && (
            <CardTitle className="text-[#22224C] font-[900]">
              {title}
            </CardTitle>
          )}
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}
```

### Navigation Component

```tsx
// components/myb-navigation.tsx
import Link from "next/link"

export function MyBNavigation() {
  return (
    <nav className="bg-white border-b border-[#D9DFEA]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#0092FF] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">m</span>
          </div>
          <span className="text-[#22224C] font-bold text-xl">myBlueprint</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/programs" className="text-[#22224C] hover:text-[#0092FF] transition-colors">
            Programs
          </Link>
          <Link href="/industries" className="text-[#22224C] hover:text-[#0092FF] transition-colors">
            Industries
          </Link>
          <Link href="/about" className="text-[#22224C] hover:text-[#0092FF] transition-colors">
            About
          </Link>
          <MyBButton size="sm">
            Get Started
          </MyBButton>
        </div>
      </div>
    </nav>
  )
}
```

### Form Components

```tsx
// components/myb-form.tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MyBInput({
  label,
  placeholder,
  ...props
}: {
  label?: string
  [key: string]: any
}) {
  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-[#22224C] font-medium">
          {label}
        </Label>
      )}
      <Input
        className="border-[#AAB7CB] focus:border-[#0092FF] focus:ring-2 focus:ring-[#0092FF]/20"
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export function MyBSelect({
  label,
  placeholder = "Select an option",
  options,
  ...props
}: {
  label?: string
  placeholder?: string
  options: { value: string; label: string }[]
  [key: string]: any
}) {
  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-[#22224C] font-medium">
          {label}
        </Label>
      )}
      <Select {...props}>
        <SelectTrigger className="border-[#AAB7CB] focus:border-[#0092FF] focus:ring-2 focus:ring-[#0092FF]/20">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
```

### Typography Components

```tsx
// components/myb-typography.tsx
import { cn } from "@/lib/utils"

export function MyBHeading({
  level = 1,
  children,
  className
}: {
  level?: 1 | 2 | 3 | 4
  children: React.ReactNode
  className?: string
}) {
  const sizes = {
    1: "text-[64px] leading-[80px]",
    2: "text-[40px] leading-[56px]",
    3: "text-[32px] leading-[48px]",
    4: "text-[24px] leading-[36px]"
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={cn(
      "text-[#22224C] font-[900]",
      sizes[level],
      className
    )}>
      {children}
    </Tag>
  )
}

export function MyBText({
  variant = 'body',
  children,
  className
}: {
  variant?: 'body' | 'body-lg' | 'compact' | 'subtitle'
  children: React.ReactNode
  className?: string
}) {
  const variants = {
    'body-lg': "text-[20px] leading-[32px]",
    'body': "text-[16px] leading-[28px]",
    'compact': "text-[14px] leading-[20px]",
    'subtitle': "text-[12px] leading-[20px] font-medium uppercase tracking-wider"
  }

  return (
    <p className={cn(
      "text-[#485163]",
      variants[variant],
      className
    )}>
      {children}
    </p>
  )
}
```

### Hero Section

```tsx
// components/myb-hero.tsx
export function MyBHero({
  title,
  subtitle,
  cta,
  ctaAction
}: {
  title: string
  subtitle: string
  cta: string
  ctaAction: () => void
}) {
  return (
    <section className="bg-gradient-to-br from-[#F6F6FF] to-[#C6E7FF] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <MyBHeading level={1} className="mb-6 animate-slideUp">
            {title}
          </MyBHeading>
          <MyBText variant="body-lg" className="mb-8 animate-slideUp animation-delay-100">
            {subtitle}
          </MyBText>
          <MyBButton
            size="lg"
            onClick={ctaAction}
            className="animate-slideUp animation-delay-200"
          >
            {cta}
          </MyBButton>
        </div>
      </div>
    </section>
  )
}
```

## Animations

```css
/* app/globals.css */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.5s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}
```

## Usage Example

```tsx
// app/page.tsx
import { MyBNavigation } from "@/components/myb-navigation"
import { MyBHero } from "@/components/myb-hero"
import { MyBCard } from "@/components/myb-card"
import { MyBButton } from "@/components/myb-button"

export default function HomePage() {
  return (
    <>
      <MyBNavigation />

      <MyBHero
        title="Industry Immersion Series"
        subtitle="Connect Canadian students with real-world industry experiences through monthly sponsorships and micro-grants."
        cta="Start Your Journey"
        ctaAction={() => console.log('CTA clicked')}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <MyBCard
              title="Mining Industry"
              subtitle="Featured"
              featured
            >
              <p className="text-[#485163] mb-4">
                Explore careers in Canada's mining sector with industry professionals.
              </p>
              <MyBButton size="sm" variant="secondary">
                Learn More
              </MyBButton>
            </MyBCard>

            <MyBCard title="Technology">
              <p className="text-[#485163] mb-4">
                Discover opportunities in software, AI, and digital innovation.
              </p>
              <MyBButton size="sm" variant="secondary">
                Learn More
              </MyBButton>
            </MyBCard>

            <MyBCard title="Healthcare">
              <p className="text-[#485163] mb-4">
                Connect with healthcare professionals and explore medical careers.
              </p>
              <MyBButton size="sm" variant="secondary">
                Learn More
              </MyBButton>
            </MyBCard>
          </div>
        </div>
      </section>
    </>
  )
}
```
