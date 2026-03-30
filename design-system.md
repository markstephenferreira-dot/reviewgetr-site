# Review Getr Design System

## Design Direction
**Style:** Vibrant & Block-based — bold alternating sections, high color contrast, large type, energetic feel. Inspired by cometreviews.com with bold CTAs, star visuals, and conversion-focused layout.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary | #2563EB | Trust blue — buttons, links, highlights |
| Primary Dark | #1E40AF | Dark blue sections, hover states |
| Accent/CTA | #DC2626 | Red — primary call-to-action buttons |
| Accent Hover | #B91C1C | Darker red for button hover states |
| Gold/Stars | #F59E0B | Star icons, highlights, pricing emphasis |
| Navy (Dark BG) | #1E293B | Dark background sections |
| White | #FFFFFF | Light background sections |
| Text Dark | #0F172A | Body text on light backgrounds |
| Text Light | #F8FAFC | Body text on dark backgrounds |

## Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| Headings | Space Grotesk | 400, 500, 600, 700 | All headings, CTAs, nav, pricing |
| Body | DM Sans | 400, 500, 700 | Paragraphs, form labels, descriptions |

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
```

## Section Pattern
Sections alternate between light and dark backgrounds:
- **Dark sections** (`section-dark`): Navy background, light text, gold headings
- **Light sections** (`section-light`): White background, dark text
- **Blue sections** (`section-blue`): Primary dark blue background, light text
- **Accent sections**: Red background for final CTAs

## Button Styles

### Primary CTA (Red)
```css
.btn-primary: bg-accent text-white font-heading font-bold uppercase tracking-wide rounded-lg shadow-lg
Hover: darker red, slight lift (-translate-y-0.5), larger shadow
```

### Secondary (Blue)
```css
.btn-secondary: bg-primary text-white font-heading font-bold rounded-lg shadow-lg
```

## Component Patterns

### Pricing Card
- Navy header with gold stars
- Large price display ($97/mth) with "14 days FREE" prefix
- Green checkmark feature list
- Full-width red CTA button
- "No Contracts. Cancel Anytime." subtitle

### Star Ratings
- Gold (#F59E0B) HTML star entities (&#9733;)
- Used in hero, pricing headers, section dividers
- Sizes: text-sm, text-2xl, text-3xl, text-4xl

### Navigation
- Fixed/sticky, navy background with blur
- Logo: "Review Getr" with gold star icon and gold "Getr" text
- Desktop: text links + red "GET STARTED" button
- Mobile: hamburger menu with slide-down panel

### Cards
- White background, rounded-xl or rounded-2xl
- Subtle border (border-gray-100 or border-gray-200)
- Padding: p-6 on mobile, p-8 on desktop
- Optional shadow (shadow-md, shadow-2xl for featured)

## Spacing Scale
- Section padding: py-16 (mobile), py-24 (desktop)
- Max content width: max-w-7xl (1280px)
- Grid gaps: gap-6, gap-8, gap-12
- Container padding: px-4 (mobile), px-6 (sm), px-8 (lg)

## Responsive Breakpoints
Standard Tailwind breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px

Mobile-first approach with responsive modifiers.

## Key Design Decisions from UUPM Analysis
1. **Red CTAs over blue** — higher contrast, more urgency, proven conversion lift for trial/signup CTAs
2. **Gold star motif** — reinforces the 5-star review theme throughout, creates visual consistency
3. **Alternating section backgrounds** — creates clear visual rhythm, prevents fatigue on long pages
4. **Large bold typography** — Space Grotesk headings in uppercase create authority and energy
5. **Competitor comparison visual** — shows tangible proof of value (138 reviews vs 1-8)
6. **Single pricing plan** — eliminates decision paralysis, one clear offer at $97/mo
7. **Calendar embed placeholder** — reduces friction by offering booking directly on page
