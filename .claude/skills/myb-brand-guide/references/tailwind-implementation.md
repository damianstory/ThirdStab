# myBlueprint Tailwind Configuration

Complete Tailwind CSS configuration for myBlueprint brand consistency.

## Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'myb': {
          'primary': '#0092FF',
          'navy': '#22224C',
          'light-blue': '#C6E7FF',
          'off-white': '#F6F6FF',
          'neutral': {
            100: '#E5E9F1',
            200: '#D9DFEA',
            300: '#AAB7CB',
            400: '#65738B',
            500: '#485163',
            600: '#252A33',
          }
        }
      },
      fontFamily: {
        'museo': ['Museo Sans', 'system-ui', 'sans-serif'],
        'open': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Headers
        'h1': ['64px', { lineHeight: '80px', fontWeight: '900' }],
        'h2': ['40px', { lineHeight: '56px', fontWeight: '900' }],
        'h3': ['32px', { lineHeight: '48px', fontWeight: '900' }],
        'h4': ['24px', { lineHeight: '36px', fontWeight: '900' }],
        // Body
        'subheader': ['22px', { lineHeight: '32px', fontWeight: '500' }],
        'body-lg': ['20px', { lineHeight: '32px' }],
        'body': ['16px', { lineHeight: '28px' }],
        'compact': ['14px', { lineHeight: '20px' }],
        // Subtitles
        'subtitle': ['12px', { lineHeight: '20px', fontWeight: '500' }],
        'subtitle-sm': ['10px', { lineHeight: '16px', fontWeight: '700' }],
      },
      borderRadius: {
        'myb': '8px',
        'myb-lg': '12px',
      },
      boxShadow: {
        'myb-sm': '0 2px 4px rgba(34, 34, 76, 0.08)',
        'myb': '0 4px 12px rgba(34, 34, 76, 0.12)',
        'myb-lg': '0 8px 24px rgba(34, 34, 76, 0.16)',
        'myb-xl': '0 16px 48px rgba(34, 34, 76, 0.20)',
        'myb-primary': '0 4px 12px rgba(0, 146, 255, 0.3)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideUp': 'slideUp 0.3s ease-out',
        'slideDown': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

## Component Classes

### Buttons

```html
<!-- Primary Button -->
<button class="bg-myb-primary text-white font-bold px-6 py-3 rounded-myb
               hover:bg-blue-600 hover:shadow-myb-primary hover:-translate-y-0.5
               transition-all duration-200">
  Start Your Portfolio
</button>

<!-- Secondary Button -->
<button class="bg-white text-myb-navy border-2 border-myb-neutral-200
               font-medium px-6 py-3 rounded-myb
               hover:border-myb-primary hover:shadow-myb transition-all duration-200">
  Learn More
</button>

<!-- Ghost Button -->
<button class="text-myb-primary font-medium px-4 py-2
               hover:bg-myb-light-blue hover:bg-opacity-20
               rounded-myb transition-all duration-200">
  Skip for now
</button>
```

### Cards

```html
<!-- Basic Card -->
<div class="bg-white border border-myb-neutral-200 rounded-myb-lg p-6
            hover:shadow-myb-lg transition-shadow duration-200">
  <h3 class="text-h4 text-myb-navy mb-4">Industry Immersion</h3>
  <p class="text-body text-myb-neutral-500">
    Connect with industry professionals
  </p>
</div>

<!-- Featured Card -->
<div class="bg-gradient-to-br from-myb-light-blue to-white
            border-2 border-myb-primary rounded-myb-lg p-8
            shadow-myb-primary">
  <!-- Content -->
</div>
```

### Forms

```html
<!-- Input Field -->
<input type="text"
       class="w-full px-4 py-3 border border-myb-neutral-300 rounded-myb
              text-myb-navy placeholder-myb-neutral-400
              focus:border-myb-primary focus:ring-2 focus:ring-myb-primary
              focus:ring-opacity-20 focus:outline-none transition-all duration-200"
       placeholder="Enter your email">

<!-- Select -->
<select class="w-full px-4 py-3 border border-myb-neutral-300 rounded-myb
               text-myb-navy bg-white
               focus:border-myb-primary focus:ring-2 focus:ring-myb-primary
               focus:ring-opacity-20 focus:outline-none">
  <option>Select Industry</option>
</select>
```

### Typography

```html
<!-- Headers -->
<h1 class="text-h1 text-myb-navy font-museo">
  Capture the moments
</h1>

<h2 class="text-h2 text-myb-navy font-museo">
  Where growth happens
</h2>

<!-- Body Text -->
<p class="text-body text-myb-neutral-500 font-open">
  Build your digital portfolio and showcase your learning journey.
</p>

<!-- Subtitle/Label -->
<span class="text-subtitle uppercase tracking-wider text-myb-primary">
  Case Study
</span>
```

### Layout Components

```html
<!-- Navigation -->
<nav class="bg-white border-b border-myb-neutral-200">
  <div class="container mx-auto px-4 h-16 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 bg-myb-primary rounded-full flex items-center justify-center">
        <span class="text-white font-bold">m</span>
      </div>
      <span class="text-myb-navy font-museo font-bold text-xl">myBlueprint</span>
    </div>
    <!-- Nav Items -->
    <div class="hidden md:flex space-x-8">
      <a href="#" class="text-myb-navy hover:text-myb-primary transition-colors">
        Programs
      </a>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-myb-off-white to-myb-light-blue py-20">
  <div class="container mx-auto px-4">
    <h1 class="text-h1 text-myb-navy mb-6 animate-slideUp">
      Industry Immersion Series
    </h1>
    <p class="text-subheader text-myb-neutral-500 mb-8 animate-slideUp animation-delay-100">
      Connect students with real-world experiences
    </p>
    <button class="bg-myb-primary text-white font-bold px-8 py-4 rounded-myb-lg
                   hover:shadow-myb-primary hover:-translate-y-1
                   transition-all duration-300 animate-slideUp animation-delay-200">
      Get Started
    </button>
  </div>
</section>
```

## Utility Classes

### Spacing Scale (8px grid)
```
p-1 (4px)  p-2 (8px)   p-3 (12px)  p-4 (16px)
p-5 (20px) p-6 (24px)  p-8 (32px)  p-10 (40px)
p-12 (48px) p-16 (64px) p-20 (80px) p-24 (96px)
```

### Common Patterns

```html
<!-- Card Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards -->
</div>

<!-- Section Container -->
<div class="container mx-auto px-4 py-12 md:py-20">
  <!-- Content -->
</div>

<!-- Flex Center -->
<div class="flex items-center justify-center">
  <!-- Content -->
</div>
```

## Dark Mode Support

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'myb-dark': {
          'bg': '#1a1a2e',
          'surface': '#252A33',
          'text': '#F6F6FF',
        }
      }
    }
  }
}
```

```html
<!-- Dark mode example -->
<div class="bg-white dark:bg-myb-dark-bg
            text-myb-navy dark:text-myb-dark-text">
  <!-- Content -->
</div>
```

## Responsive Helpers

```html
<!-- Mobile-first responsive -->
<div class="text-body md:text-body-lg lg:text-h4">
  Responsive text
</div>

<!-- Hide/Show -->
<div class="hidden md:block">Desktop only</div>
<div class="block md:hidden">Mobile only</div>
```
