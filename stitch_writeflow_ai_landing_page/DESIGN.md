---
name: WriteFlow Narrative
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#831ada'
  on-secondary: '#ffffff'
  secondary-container: '#9e41f5'
  on-secondary-container: '#fffbff'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6800b4'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand personality of this design system is focused on "Fluid Intelligence." It positions the product as a seamless extension of the writer's mind—effortless, inspiring, and precise. The aesthetic leans into **Modern Minimalism** with high-end SaaS sensibilities, utilizing expansive whitespace to reduce cognitive load and vibrant gradients to represent the creative spark of AI. The emotional response should be one of clarity and empowerment, moving away from cluttered "tool" interfaces toward a sophisticated "canvas" experience.

## Colors
This design system employs a sophisticated "Electric Indigo" palette. The primary brand expression is a linear gradient transitioning from **Deep Indigo (#4F46E5)** to **Vibrant Purple (#9333EA)**, used sparingly for high-impact moments like primary CTAs and active states. 

The neutral palette relies on Slate and Zinc tones to maintain a professional, tech-forward feel. Backgrounds should remain primarily white (#FFFFFF) or very light gray (#F8FAFC) to ensure the colorful AI-driven elements feel purposeful rather than overwhelming. Semantic colors (Success, Warning, Error) should be slightly desaturated to remain harmonious with the vibrant primary duo.

## Typography
The typography system uses **Inter** to achieve a neutral, systematic, and highly legible interface. The hierarchy is defined by significant contrast between bold, tight-tracking headlines and airy, easy-to-read body copy. 

For the "Display" and "Headline" levels, use a heavier weight (700-800) and negative letter-spacing to create a "locked-in" professional look suitable for SaaS marketing. Body text should maintain a generous line height (1.5x - 1.6x) to facilitate long-form reading, which is critical for a writing-focused product.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop, centered within a 1280px container, and a fluid 4-column layout for mobile. A standard 8px-based spatial scale governs all padding and margins.

Sections on the landing page are separated by significant vertical padding (120px) to reinforce the minimalist aesthetic and allow individual features to "breathe." Content blocks should follow a consistent vertical rhythm: Label (8px) -> Headline (16px) -> Body (32px) -> CTA.

## Elevation & Depth
Depth in this design system is created through **Ambient Shadows** and tonal layering rather than heavy borders. Surfaces use a "Soft-Lift" technique:
- **Level 0 (Base):** Flat white or subtle gray background.
- **Level 1 (Cards):** 1px border (#E2E8F0) with a very diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.03)).
- **Level 2 (Hover/Active):** Increased shadow spread (0px 10px 30px rgba(79, 70, 229, 0.08)) and a slight upward translation (-4px).

Avoid using inner shadows or heavy black shadows. Use tinted shadows (Indigo-tinted) for interactive elements to maintain color harmony.

## Shapes
The shape language is defined by **Softness and Modernity**. In accordance with the 12px-16px requirement, the base `rounded-lg` token is set to 16px (1rem). 
- Standard buttons and input fields utilize a 12px radius.
- Cards and larger containers utilize a 16px radius.
- Interactive chips or small badges may use "Pill" (999px) shapes to distinguish them from structural elements.

## Components
### Buttons
Primary buttons feature the brand gradient (Indigo to Purple) with white text and a subtle 16px horizontal internal padding. On hover, the gradient should slightly brighten. Secondary buttons use a "Ghost" style: 1px Indigo border with Indigo text.

### Feature Cards
Cards should have a white background, 1px light border, and 16px corner radius. Icons inside cards should use a soft background tint of the brand colors (e.g., 10% opacity Indigo). Apply a smooth transition on hover that increases the shadow and slightly scales the icon.

### Pricing Cards
The 'Pro' pricing card is differentiated by a 2px Indigo border or a "Most Popular" badge. Ensure the pricing headline is the most prominent element. The 'Pro' CTA should use the full brand gradient, while 'Basic' uses a secondary ghost button.

### FAQ Accordion
The accordion should be "Bordered-Minimal." Each item is separated by a thin 1px horizontal line. The active state should use a subtle Indigo tint for the background of the header, with a rotating chevron icon (0 to 180 degrees) to indicate expansion.

### Input Fields
Inputs use a 12px radius, a light gray border, and a 2px Indigo glow on focus. Placeholders should be a light slate (#94A3B8).