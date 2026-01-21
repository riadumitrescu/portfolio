# Ria Brand Guidelines

## Brand Essence

**Tagline:** *I share things that help you understand yourself better.*

**Tone:** Gentle, thoughtful, calm, no-pressure, introspective

**Audience:** Overthinkers, night journalers, people who want emotional clarity without productivity guilt

---

## Logo & Brand Mark

### The Moon Icon
The crescent moon is the core brand symbol, representing:
- Night journaling & introspection
- Gentle light in darkness
- Cycles & self-reflection
- Calm, not motivation

**Usage:**
- Appears next to "ria" wordmark in navigation and footer
- Used as a standalone icon for social media profile pictures
- Can be used as a decorative element in content

**Moon SVG:**
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>
```

### Wordmark
- **Text:** ria (lowercase)
- **Font:** Inter, 500 weight
- **Letter-spacing:** -0.02em

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Ink** | `#1a1816` | Primary text, headings, buttons |
| **White** | `#ffffff` | Backgrounds, button text |
| **Gold** | `#c9a962` | Accent color, highlights, links |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Charcoal** | `#2d2a26` | Body text |
| **Stone** | `#5c5650` | Secondary text, descriptions |
| **Mist** | `#8a857d` | Tertiary text, captions |
| **Fog** | `#b8b3ab` | Disabled states, subtle elements |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| **White** | `#ffffff` | Primary background |
| **Cream** | `#fdfcfa` | Hero gradients |
| **Ivory** | `#f9f7f4` | Card backgrounds, inputs |
| **Sand** | `#f3f0eb` | Section backgrounds (signup, connect) |

### Accent Variations

| Name | Value | Usage |
|------|-------|-------|
| **Gold Glow** | `#d4bc7d` | Hover states, lighter gold |
| **Gold Soft** | `rgba(201, 169, 98, 0.12)` | Icon backgrounds |
| **Gold Subtle** | `rgba(201, 169, 98, 0.06)` | Focus rings, very subtle |
| **Sage** | `#7d9a82` | Success states, checkmarks |

### Border Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Border** | `#eae7e2` | Card borders, dividers |
| **Border Strong** | `#ddd9d2` | Emphasized borders |

---

## Typography

### Font Family
**Primary:** Inter (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;450;500;600&display=swap" rel="stylesheet">
```

**Fallback Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| H1 (Hero) | clamp(1.85rem, 5vw, 2.5rem) | 400 | -0.03em |
| H2 (Section) | 1.5rem | 400 | -0.02em |
| H3 (Card) | 1rem | 500 | -0.02em |
| Section Title | 0.7rem | 600 | 0.2em (uppercase) |
| Body | 0.95rem | 400 | normal |
| Small | 0.8rem | 400 | normal |

### Line Heights
- Headings: 1.25
- Body text: 1.65
- UI elements: 1.5

---

## Spacing System

Based on a 4px grid:

| Name | Value | Usage |
|------|-------|-------|
| xs | 0.25rem (4px) | Tight spacing |
| sm | 0.5rem (8px) | Icon gaps |
| md | 1rem (16px) | Standard padding |
| lg | 1.5rem (24px) | Card padding |
| xl | 2rem (32px) | Section gaps |
| 2xl | 3rem (48px) | Section padding |
| 3xl | 5rem (80px) | Large sections |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons (pill) | 100px |
| Cards | 20px |
| Input fields | 12px |
| Icons/small elements | 10px |
| Profile images | 50% (circle) |

---

## Shadows

```css
--shadow-xs: 0 1px 3px rgba(26, 24, 22, 0.04);
--shadow-sm: 0 2px 8px rgba(26, 24, 22, 0.06);
--shadow-md: 0 4px 20px rgba(26, 24, 22, 0.08);
--shadow-lg: 0 8px 40px rgba(26, 24, 22, 0.12);
--shadow-glow: 0 0 40px rgba(201, 169, 98, 0.15);
```

---

## Button Styles

### Primary Button
- Background: Ink (`#1a1816`)
- Text: White
- Padding: 1rem 2rem
- Border-radius: 100px (pill)
- Hover: Gold gradient reveals underneath, lifts 3px

### Submit Button
- Background: Ink (`#1a1816`)
- Text: White
- Padding: 1rem
- Border-radius: 12px
- Hover: Background becomes Gold, lifts 2px

---

## Card Styles

### Default Card
```css
background: #ffffff;
border: 1px solid #eae7e2;
border-radius: 20px;
padding: 1.75rem 1.5rem;
```

### Hover State
```css
border-color: #c9a962;
transform: translateY(-4px);
box-shadow: 0 4px 20px rgba(26, 24, 22, 0.08),
            0 0 40px rgba(201, 169, 98, 0.15);
```

---

## Animation & Transitions

### Easing
```css
/* Primary easing - smooth and elegant */
cubic-bezier(0.16, 1, 0.3, 1)

/* Standard easing */
ease
```

### Transition Durations
- Micro-interactions: 0.2s
- Standard: 0.3s
- Page transitions: 0.4s

### Floating Animation (for arrows)
```css
@keyframes float-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
animation: float-up 2s ease-in-out infinite;
```

---

## PDF Guide Design Specifications

### General Layout
- **Page size:** A4 or Letter
- **Margins:** 1 inch (2.54cm) all sides
- **Orientation:** Portrait

### Cover Page
- Background: Cream (`#fdfcfa`) or soft gradient
- Moon icon centered at top (gold color)
- Title in Ink (`#1a1816`), large, centered
- Subtitle in Stone (`#5c5650`)
- "ria" wordmark with moon at bottom

### Interior Pages

**Header:**
- Small moon icon + "ria" in top corner
- Page number in Mist color

**Typography:**
- Headings: Inter 500, Ink color
- Body: Inter 400, Charcoal color
- Prompts/Questions: Inter 500, slightly larger

**Accent Elements:**
- Section dividers: thin gold line
- Bullet points: gold circles or arrows
- Highlight boxes: Ivory background with gold left border

**Writing Space:**
- Dotted or light gray lines
- Generous spacing (at least 8mm between lines)
- Soft rounded corners on boxes

### Color Usage in PDFs
- Keep mostly neutral (white, cream, ivory)
- Gold for accents only (icons, dividers, highlights)
- Avoid heavy color blocks - keep it calm
- Use Stone/Mist for secondary text

### PDF Cover Mockup Example
```
┌─────────────────────────────┐
│                             │
│           ☽                 │  <- Moon icon (gold)
│                             │
│    7-Day Gentle Reset       │  <- Title (ink, large)
│                             │
│   a journaling guide for    │  <- Subtitle (stone)
│   easing back into writing  │
│                             │
│                             │
│                             │
│                             │
│         ☽ ria               │  <- Wordmark (bottom)
└─────────────────────────────┘
```

### Interior Page Example
```
┌─────────────────────────────┐
│ ☽ ria                    01 │  <- Header
├─────────────────────────────┤
│                             │
│  day one                    │  <- Section title (gold, small caps)
│  ─────────                  │  <- Gold underline
│                             │
│  What's one small thing     │  <- Prompt (ink, medium)
│  you're grateful for today? │
│                             │
│  ............................│  <- Writing lines
│  ............................│
│  ............................│
│  ............................│
│                             │
│  ┌────────────────────────┐ │
│  │ gentle reminder:       │ │  <- Tip box (ivory bg)
│  │ there's no wrong       │ │
│  │ answer here.           │ │
│  └────────────────────────┘ │
│                             │
└─────────────────────────────┘
```

---

## Do's and Don'ts

### Do
- Keep designs calm and uncluttered
- Use plenty of white space
- Make text easy to read
- Use gold sparingly as an accent
- Maintain gentle, rounded aesthetics
- Include the moon icon as a brand element

### Don't
- Use harsh colors or high contrast
- Add too many decorative elements
- Use aggressive CTAs or urgency language
- Make anything feel like "homework"
- Use productivity-focused language
- Overcrowd pages with content

---

## Social Media Consistency

### Profile Picture
- Moon icon on cream/white background
- Or profile photo with gold ring border

### Post Aesthetic
- Warm, muted tones
- Cream/ivory backgrounds
- Gold accent text sparingly
- Clean, readable typography
- Plenty of breathing room

### Caption Voice
- Lowercase aesthetic
- Gentle, understanding tone
- No toxic positivity
- Questions over statements
- Short, thoughtful paragraphs

---

## File Naming Convention

```
ria-[guide-name]-[type].pdf
ria-7day-reset-guide.pdf
ria-emotional-checkin-worksheet.pdf
ria-monthly-reflection-template.pdf
```

---

## Quick Reference

**Primary Font:** Inter
**Primary Color:** #1a1816 (Ink)
**Accent Color:** #c9a962 (Gold)
**Background:** #ffffff / #fdfcfa / #f9f7f4
**Border Radius:** 20px (cards) / 12px (inputs) / 100px (buttons)
**Brand Symbol:** Crescent Moon
